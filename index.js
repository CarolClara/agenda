const customExpress = require('./config/customExpress');
const connection = require('./infrastructure/connection');
const Tables = require('./infrastructure/tables');

connection.connect(error => {
  if(error)
    console.log(error)
  else {
    Tables.init(connection)

    const app = customExpress()
    app.listen(
      3000,
      () => console.log('localhost:3000/agendamentos')
    )
  }
})
