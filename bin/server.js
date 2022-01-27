import app from '../app';
<<<<<<< HEAD
import db from '../lib/db';
=======
>>>>>>> 93d39e48fa09706360a3459f1f8bcec86a8318c4

const PORT = process.env.PORT || 5000

db.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`)
  })
}).catch(err => {
  console.log(`Server not running. Error: ${err.message}`)
})


