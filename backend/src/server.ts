import dotenv from 'dotenv';
import app from './app';

dotenv.config();
/**
 * Iniciando server na porta configurad no .env ou padrao 3333
 */
app.listen(process.env.PORT || 3333, () => {
  console.log(`🚀 Server started on port ${process.env.PORT || 3333}!`);
});
