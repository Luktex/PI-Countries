//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Activity} = require('./src/db');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    Activity.findOrCreate({ where: {name: "Football" }});
    Activity.findOrCreate({ where: {name: "Ski" }});
    Activity.findOrCreate({ where: {name: "Meeting" }});
    Activity.findOrCreate({ where: {name: "lacto ovo vegetarian" }});
    Activity.findOrCreate({ where: {name: "pescatarian"  }});
    Activity.findOrCreate({ where: {name: "paleolithic"  }});
    Activity.findOrCreate({ where: {name: "primal" }});
    Activity.findOrCreate({ where: {name: "whole 30"  }});
    Activity.findOrCreate({ where: {name: "kotegenic" }});
    Activity.findOrCreate({ where: {name: "dairy free" }});





  });
});
