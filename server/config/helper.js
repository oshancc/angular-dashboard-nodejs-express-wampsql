/*connecting with our back end database
use mysqli package  created by Yutent */

const Mysqli = require('mysqli');
let conn = new Mysqli({
    host: 'localhost',
    post: 3306,
    user: 'root',
    passwd: '',
    db: 'practical'
});

let db = conn.emit(false, '');

module.exports = {
    database: db
};