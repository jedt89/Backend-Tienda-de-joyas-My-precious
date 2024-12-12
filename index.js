import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jewelRoutes from './routes/jewelRoutes.js';
import logRequest from './middleware/logRequest.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(logRequest);
app.use('/joyas', jewelRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
