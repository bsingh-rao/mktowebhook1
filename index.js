const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON bodies

app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  res.status(200).send('Webhook received!');
});

app.get('/', (req, res) => {
  res.send('Marketo Webhook App is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
