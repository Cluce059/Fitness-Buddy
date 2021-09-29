// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').con

let sequelize;

 if (process.env.JAWSDB_URL) {
   sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
     dialect: 'mysql',
     port: 3306
   });
};

///hardcode .env for npm run seedsd to work

//  if (process.env.JAWSDB_URL) {
//    sequelize = new Sequelize(process.env.JAWSDB_URL);
//  } else {
//      sequelize = new Sequelize('fitness_buddy_db', 'root', 'USCaptain33', {
//      host: 'localhost',
//      dialect: 'mysql',
//      port: 3306
//    });
//  };

module.exports = sequelize;