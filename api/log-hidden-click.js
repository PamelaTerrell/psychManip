export default function handler(req, res) {
    if (req.method === 'POST') {
      const time = new Date().toISOString();
      console.log(`[${time}] Hidden link clicked`);
      res.status(200).json({ message: 'Click logged' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  