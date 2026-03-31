export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, amount, campaignId } = req.body;

  if (!name || !phone || !amount) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // In a real app, we would use Twilio or another SMS service here
    // For now, we just simulate a successful confirmation
    console.log(`Confirmation for ${name} (${phone}) for ₹${amount}`);
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error confirming payment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
