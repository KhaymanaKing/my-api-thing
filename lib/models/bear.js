const pool = require('../utils/pool');

module.exports = class Bear{
  id;
  name;
  type;
  color;
  willEatFace;
  coolFactor;

  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.color = row.color;
    this.willEatFace = row.willEatFace;
    this.coolFactor = row.coolFactor;
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
