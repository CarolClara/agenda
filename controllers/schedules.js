const Schedules = require('../models/schedules');

module.exports = app => {
  app.get(
    '/agendamentos',
    (req, res) =>
      Schedules.list(res)
  )

  app.get(
    '/agendamentos/:id',
    (req, res) => {
      const id = parseInt(req.params.id);
      Schedules.get(id,  res);
    }
  )

  app.post(
      '/agendamentos',
      (req, res) =>
        Schedules.create(req.body, res)
    )

  app.patch(
    '/agendamentos/:id',
    (req, res) => {
      const id = parseInt(req.params.id)
      const values = req.body
      Schedules.update(id, values, res)
    }
  )

  app.delete(
    '/agendamentos/:id',
    (req, res) => {
      const id = parseInt(req.params.id)
      Schedules.delete(id, res)
    }
  )
}
