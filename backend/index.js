import express from 'express';

const app = express();
const PORT = 8000;

app.get('/api', (req, res) => {
  res.json({message: "Express server connected"});
});

app.listen(PORT, () => {
  console.log(`pxlprfct listening on port ${PORT}`);
});