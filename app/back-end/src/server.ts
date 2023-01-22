import 'dotenv/config';
import app from './app';
import connectToDatabase from './Models/Connection';

const PORT = process.env.PORT || 3003;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  });