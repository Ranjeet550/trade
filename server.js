import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// POST /send-message
app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const text = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  const url = `https://api.callmebot.com/text.php?source=web&user=@Tradeshai&text=${text}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      return res.json({ success: true });
    } else {
      return res.status(500).json({ error: 'Failed to send message.' });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
