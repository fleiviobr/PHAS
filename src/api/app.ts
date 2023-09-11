import express from 'express';
import { sequelize } from './config/config';
import userRoute from './routes/userRoute';
import peopleRoute from './routes/peopleRoute';
import activityRoute from './routes/activityRoute'



const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Servidor aberto')
})

app.use('/users', userRoute);

app.use('/people', peopleRoute);

app.use('/activity', activityRoute);

async function initializeApp() {
  try {
    await sequelize.authenticate();

    await sequelize.sync();
    console.log('Modelos sincronizados com o banco de dados.');

    app.listen(PORT, () => {
      console.log(`Servidor Express iniciado na porta ${PORT}.`);
    });
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error);
  }
}

initializeApp();
