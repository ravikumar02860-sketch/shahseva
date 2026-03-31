import { db, collection, getDocs, query, where, orderBy, addDoc, Timestamp, doc, updateDoc } from '../src/firebase';

export default async function handler(req, res) {
  const path = 'campaigns';

  if (req.method === 'GET') {
    try {
      const q = query(collection(db, path), where('active', '==', true), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const campaignsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return res.status(200).json(campaignsData);
    } catch (err) {
      console.error('Failed to fetch campaigns', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  if (req.method === 'POST') {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    try {
      const docRef = await addDoc(collection(db, path), {
        title,
        description,
        active: true,
        createdAt: Timestamp.now()
      });
      return res.status(200).json({ id: docRef.id, title, description });
    } catch (err) {
      console.error('Failed to create campaign', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'ID is required' });

    try {
      await updateDoc(doc(db, path, id as string), {
        active: false
      });
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('Failed to delete campaign', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
