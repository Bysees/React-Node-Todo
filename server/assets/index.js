const fs = require('fs')
const path = require('path')

module.exports = {
  getNextId(arr) {
    const lastId =
      arr.concat().sort((a, b) => a.id - b.id)[arr.length - 1]?.id || 0
    return +lastId + 1
  },

  addItemToDB(currentPath, to, db, task) {
    const newDB = [...db, task]
    writeFileToDB(currentPath, to, newDB)
  },

  removeItemFromDB(currentPath, to, db, id) {
    const newDB = db.filter((item) => item.id !== +id)
    writeFileToDB(currentPath, to, newDB)
  },
}

function writeFileToDB(currentPath, to, newFile) {
  fs.writeFile(
    path.resolve(currentPath, to),
    JSON.stringify(newFile, null, 2),
    (err) => {
      if (err) return console.log(err)
    }
  )
}
