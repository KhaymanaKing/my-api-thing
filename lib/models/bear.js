const pool = require('../utils/pool');

module.exports = class Bear{
  id;
  name;
  type;
  color;
  will_eat_face;
  cool_factor;

  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.color = row.color;
    this.will_eat_face = row.will_eat_face;
    this.cool_factor = row.cool_factor;
  }
  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM bears');
    return rows.map((row) => new Bear(row));
  }
  static async getById(id){
    const { rows } = await pool.query('SELECT * FROM bears WHERE id=$1', [id]);
    if(!rows[0]) return null;
    return new Bear(rows[0]);
  }
};
