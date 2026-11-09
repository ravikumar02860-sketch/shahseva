/**
 * Export and Sharing Utilities for Zakat Calculator:
 * - Lazy-loaded PDF Summary generation using jsPDF
 * - iCalendar (.ics) Ramadan / Hawl Reminder file generation
 * - WhatsApp breakdown share generator
 */

import { ZakatCalculationResult, LiveMetalPrices, formatINR } from './zakatCalculation';
import { ZakatLanguage, zakatTranslations } from './zakatTranslations';

/**
 * Dynamically loads jsPDF and generates a structured assessment receipt
 */
export async function generateZakatPdf(
  result: ZakatCalculationResult,
  prices: LiveMetalPrices,
  lang: ZakatLanguage
): Promise<void> {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({
    unit: 'pt',
    format: 'a4',
  });

  const t = zakatTranslations[lang] || zakatTranslations.en;
  const pageWidth = doc.internal.pageSize.getWidth();

  // Primary colors
  const primaryColor = [20, 83, 45]; // dark green
  const accentColor = [217, 119, 6]; // amber
  const darkTextColor = [30, 41, 59];
  const mutedTextColor = [100, 116, 139];

  let y = 45;

  // Header band
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, pageWidth, 75, 'F');

  // Title in header
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('Dargah Saiyad Ali Shah Seva Sansthan', 40, 36);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('Pur, Bhilwara, Rajasthan 311001 | Reg: COOP/2025/BHILWARA/500577', 40, 56);

  y = 105;

  // Document Heading
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('Zakat Assessment & Calculation Summary', 40, y);

  y += 18;
  doc.setTextColor(mutedTextColor[0], mutedTextColor[1], mutedTextColor[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(
    `Date Generated: ${new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })} | Online Portal: shahseva.vercel.app/zakat-calculator`,
    40,
    y
  );

  y += 24;

  // Nisab Summary Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(40, y, pageWidth - 80, 52, 6, 6, 'FD');

  doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Nisab Benchmark Applied:', 55, y + 22);

  doc.setFont('helvetica', 'normal');
  const metalName = result.nisabMetal.toUpperCase();
  const stdName = result.nisabStandard === 'classical' ? 'Hanafi Standard' : 'AAOIFI Standard';
  doc.text(`${metalName} Nisab (${stdName}) = ${formatINR(result.nisabThreshold)}`, 205, y + 22);

  doc.setFontSize(8.5);
  doc.setTextColor(mutedTextColor[0], mutedTextColor[1], mutedTextColor[2]);
  doc.text(
    `Market Baseline: Gold 24k: ₹${prices.goldPricePerGram24k}/g | Silver: ₹${prices.silverPricePerGram}/g`,
    55,
    y + 38
  );

  y += 72;

  // Section 1: Assets Table
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('1. Zakatable Assets Breakdown', 40, y);

  y += 14;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.8);
  doc.line(40, y, pageWidth - 40, y);

  y += 16;
  doc.setFontSize(9);
  doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);

  if (result.assetBreakdown.length === 0) {
    doc.text('No positive assets entered.', 55, y);
    y += 18;
  } else {
    for (const item of result.assetBreakdown) {
      const label = formatAssetLabel(item.id);
      doc.setFont('helvetica', 'normal');
      doc.text(label, 55, y);
      doc.setFont('helvetica', 'bold');
      doc.text(formatINR(item.amount), pageWidth - 55, y, { align: 'right' });
      y += 16;
    }
  }

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Total Gross Assets:', 55, y + 4);
  doc.text(formatINR(result.totalAssets), pageWidth - 55, y + 4, { align: 'right' });

  y += 26;

  // Section 2: Deductible Liabilities Table
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('2. Deductible Liabilities Breakdown', 40, y);

  y += 14;
  doc.setDrawColor(203, 213, 225);
  doc.line(40, y, pageWidth - 40, y);

  y += 16;
  doc.setFontSize(9);
  doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);

  if (result.liabilityBreakdown.length === 0) {
    doc.text('No deductible liabilities entered.', 55, y);
    y += 18;
  } else {
    for (const item of result.liabilityBreakdown) {
      const label = formatLiabilityLabel(item.id);
      doc.setFont('helvetica', 'normal');
      doc.text(label, 55, y);
      doc.setFont('helvetica', 'bold');
      doc.text(formatINR(item.amount), pageWidth - 55, y, { align: 'right' });
      y += 16;
    }
  }

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(185, 28, 28); // red
  doc.text('Total Deductible Liabilities:', 55, y + 4);
  doc.text(`- ${formatINR(result.totalLiabilities)}`, pageWidth - 55, y + 4, { align: 'right' });

  y += 32;

  // Final Result Box
  const resultBoxColor = result.isEligible ? [240, 253, 244] : [248, 250, 252];
  const resultBorderColor = result.isEligible ? [187, 247, 208] : [226, 232, 240];

  doc.setFillColor(resultBoxColor[0], resultBoxColor[1], resultBoxColor[2]);
  doc.setDrawColor(resultBorderColor[0], resultBorderColor[1], resultBorderColor[2]);
  doc.roundedRect(40, y, pageWidth - 80, 80, 8, 8, 'FD');

  doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`Net Zakatable Wealth: ${formatINR(result.netAssets)}`, 60, y + 26);
  doc.text(`Nisab Required: ${formatINR(result.nisabThreshold)}`, 60, y + 44);

  if (result.isEligible) {
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text(`Obligatory Zakat (2.5%): ${formatINR(result.zakatDue)}`, 60, y + 66);

    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.roundedRect(pageWidth - 160, y + 20, 100, 22, 4, 4, 'F');
    doc.text('STATUS: ZAKAT DUE', pageWidth - 110, y + 34, { align: 'center' });
  } else {
    doc.setTextColor(mutedTextColor[0], mutedTextColor[1], mutedTextColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('STATUS: Net wealth is below Nisab. No Zakat is due.', 60, y + 66);
  }

  y += 105;

  // Trust Strip & Disclaimer
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(mutedTextColor[0], mutedTextColor[1], mutedTextColor[2]);
  doc.text(
    'Shah Seva 100% Zakat Policy: All collected Zakat is distributed strictly to Quranic Asnaf (Surah At-Tawbah 9:60).',
    pageWidth / 2,
    y,
    { align: 'center' }
  );
  doc.text(
    'This calculation is an educational and digital estimation aid. Consult a qualified Mufti for complex estates.',
    pageWidth / 2,
    y + 12,
    { align: 'center' }
  );

  doc.save('Zakat-Assessment-Summary-ShahSeva.pdf');
}

function formatAssetLabel(id: string): string {
  switch (id) {
    case 'cashInHand':
      return 'Cash in Hand (Physical currency)';
    case 'bankSavings':
      return 'Bank Balances (Savings & Current)';
    case 'gold':
      return 'Gold (Bars, Coins, or Jewellery)';
    case 'silver':
      return 'Silver (Bars, Utensils, or Ornaments)';
    case 'sharesInvestments':
      return 'Shares, Mutual Funds & Liquid Equity';
    case 'businessStock':
      return 'Business Inventory & Finished Stock for Sale';
    case 'moneyOwedToYou':
      return 'Money Owed to You (Recoverable Debts)';
    case 'fixedDepositsCertificates':
      return 'Fixed Deposits & Savings Certificates (Principal)';
    case 'crypto':
      return 'Cryptocurrency & Digital Tokens';
    case 'otherAssets':
      return 'Other Liquid Assets';
    default:
      return id;
  }
}

function formatLiabilityLabel(id: string): string {
  switch (id) {
    case 'debtsDueNow':
      return 'Debts Due Immediately (Payable Now)';
    case 'unpaidBillsRentTax':
      return 'Unpaid Bills, Outstanding Rent & Taxes';
    case 'loanInstallmentsYear':
      return 'Principal Loan Installments (Next 12 Months)';
    case 'otherLiabilities':
      return 'Other Immediate Liabilities';
    default:
      return id;
  }
}

/**
 * Generates and downloads an iCalendar (.ics) event for annual Hawl review
 */
export function downloadZakatIcsReminder(): void {
  // Set date 354 days from now or next Ramadan baseline
  const reminderDate = new Date();
  reminderDate.setDate(reminderDate.getDate() + 354);

  const pad = (n: number) => (n < 10 ? '0' + n : String(n));

  const formatIcsDate = (date: Date) => {
    return (
      date.getUTCFullYear() +
      pad(date.getUTCMonth() + 1) +
      pad(date.getUTCDate()) +
      'T090000Z'
    );
  };

  const dtStart = formatIcsDate(reminderDate);
  const dtEnd = formatIcsDate(new Date(reminderDate.getTime() + 60 * 60 * 1000));
  const dtStamp = formatIcsDate(new Date());

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Shah Seva//Zakat Calculator Hawl Reminder//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:zakat-hawl-${Date.now()}@shahseva.vercel.app`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    'SUMMARY:Shah Seva Zakat Hawl (Annual Islamic Wealth Review)',
    'DESCRIPTION:Annual reminder to calculate and distribute your obligatory 2.5% Zakat on net wealth exceeding Nisab for the completion of one full lunar year (Hawl). Recalculate anytime at https://shahseva.vercel.app/zakat-calculator',
    'URL:https://shahseva.vercel.app/zakat-calculator',
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'DESCRIPTION:Zakat Calculation Reminder Tomorrow',
    'ACTION:DISPLAY',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'zakat-hawl-reminder.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Creates a pre-formatted WhatsApp share link
 */
export function getWhatsAppShareUrl(result: ZakatCalculationResult, lang: ZakatLanguage): string {
  const t = zakatTranslations[lang] || zakatTranslations.en;
  let message = `*${t.heroTitle} - Shah Seva*\n\n`;

  if (result.isEligible) {
    message += `Assalamu Alaikum,\nI just calculated my obligatory Zakat using the verified Shah Seva India Zakat Calculator.\n\n`;
    message += `• *Net Zakatable Wealth:* ${formatINR(result.netAssets)}\n`;
    message += `• *Nisab Applied:* ${formatINR(result.nisabThreshold)} (${result.nisabMetal.toUpperCase()})\n`;
    message += `• *Total Zakat Payable (2.5%):* ${formatINR(result.zakatDue)}\n\n`;
  } else {
    message += `Assalamu Alaikum,\nI checked my Zakat eligibility on Shah Seva. My net assets are currently below the Nisab threshold.\n\n`;
  }

  message += `Calculate your Zakat accurately with live Indian gold/silver rates here: https://shahseva.vercel.app/zakat-calculator`;

  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
