import express from 'express';
import logger from 'morgan';
import cors from 'cors';

<<<<<<< HEAD
import { HttpCode } from './lib/constants';
=======
>>>>>>> 93d39e48fa09706360a3459f1f8bcec86a8318c4
import contactsRouter from './routes/api/contacts';

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res
    .status(HttpCode.NOT_FOUND)
    .json({ status: 'error', code: HttpCode.NOT_FOUND, message: 'Not found' })
})

app.use((err, req, res, next) => {
  res
    .status(HttpCode.INTERNAL_SERVER_ERROR)
    .json({ status: 'fail', code: HttpCode.INTERNAL_SERVER_ERROR, message: err.message })
})

export default app
