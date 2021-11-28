const connection = require('../infrastructure/connection');
const { parse, isBefore, format } = require('date-fns');

class Schedules {
  create(scheduling, res) {
    const sql = 'INSERT INTO SCHEDULES SET ?'
    const mysqlDateFormat = 'yyyy-MM-dd kk:mm'
    const formattedDate = parse(scheduling.date, 'dd/MM/yyyy kk:mm', new Date())
    scheduling.date = format(formattedDate, mysqlDateFormat)

    const validations = [
      {
        errorName: 'Invalid Client',
        isInvalid: scheduling.client.length < 5,
        error: 'É necessário que o nome do cliente possua cinco ou mais caracteres.'
      },
      {
        errorName: 'Invalid Date',
        isInvalid: isBefore(formattedDate, new Date()),
        error: 'É necessário que a data e hora sejam maiores que a atual.'
      }
    ]

    const error = validations.filter(validation => validation.isInvalid)

    if (error)
      res.status(400).json(error)
    else {
      connection.query(sql, scheduling, (error, result) => {
        if (error)
          res.status(400).json(error)
        else
          res.status(201).json(scheduling)
      })
    }
  };
  list(res) {
    const sql = "SELECT * FROM SCHEDULES"

    connection.query(sql, (error, result) => {
      if (error)
        res.status(404).json(error)
      else
        res.status(200).json(result)
    })
  };
  get(id, res) {
    const sql = `SELECT * FROM SCHEDULES WHERE ID=${id}`

    connection.query(sql, (error, result) => {
      if (error)
        res.status(404).json(error)
      else
        res.status(200).json(result[0])
    })
  };
  update(id, values, res) {
    const sql = 'UPDATE SCHEDULES SET ? WHERE ID=?'

    if (values.date) {
      const mysqlDateFormat = 'yyyy-MM-dd kk:mm'
      const formattedDate = parse(values.date, 'dd/MM/yyyy kk:mm', new Date())
      values.date = format(formattedDate, mysqlDateFormat)
    }

    connection.query(sql, [values, id], (error, result) => {
      if (error)
        res.status(400).json(error)
      else
        res.status(200).json({ ...values, id })
    })
  };
  delete(id, res) {
    const sql = 'DELETE FROM SCHEDULES WHERE ID=?'

    connection.query(sql, id, (error, result) => {
      if (error)
        res.status(400).json(error)
      else
        res.status(200).json({ id })
    })
  };
}

module.exports = new Schedules
