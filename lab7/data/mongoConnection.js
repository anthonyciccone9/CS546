//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const MongoClient = require("mongodb").MongoClient;
const settings = {
  mongoConfig: {
    serverUrl: "mongodb://localhost:27017/",
    database: "Ciccone_Anthony_lab7"
  }
};
const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

module.exports = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl);
    _db = await _connection.db(mongoConfig.database);
  }

  return _db;
};
