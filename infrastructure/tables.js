class Tables {
  init(connection) {
    this.connection = connection
    this.createTableSchedules()
  }

  createTableSchedules() {
    const sql = 'CREATE TABLE IF NOT EXISTS SCHEDULES (ID INT NOT NULL AUTO_INCREMENT, CLIENT VARCHAR(50) NOT NULL, PET VARCHAR(20), SERVICE VARCHAR(20) NOT NULL, DATE DATETIME NOT NULL, CREATION_DATE DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, STATUS VARCHAR(20) NOT NULL, OBS TEXT, PRIMARY KEY(ID))'
    console.log(sql)
    this.connection.query(sql, (error, results, fields) => {
      if(error)
        console.log(error)
    })
  }

}

module.exports = new Tables
