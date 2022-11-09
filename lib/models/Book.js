const pool = require('../utils/pool');

module.exports = class Book {
  id;
  title;
  released_year;

  constructor({ id, title, released_year }) {
    this.id = id;
    this.title = title;
    this.released_year = released_year;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM books');
    console.log(rows);
    return rows.map((row) => new Book(row));
  }
};
