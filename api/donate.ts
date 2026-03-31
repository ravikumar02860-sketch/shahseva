import { db, collection, addDoc, Timestamp } from '../src/firebase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, amount, campaignId } = req.body;

  if (!name || !phone || !amount) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Record donation in Firestore
    await addDoc(collection(db, 'donors'), {
      name,
      phone,
      email: email || null,
      amount: Number(amount),
      campaignId: campaignId || null,
      timestamp: Timestamp.now(),
      emailedInBatch: false
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing donation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
