const pool = require('../utils/pool');

module.exports = class Book {
  //   id;
  //   title;
  //   released_year;
  //   authors;
  constructor({ id, title, released_year, authors }) {
    this.id = id;
    this.title = title;
    this.released_year = released_year;
    this.authors = authors;
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT books.*,
	    coalesce(
            json_agg(to_jsonb(authors))
            filter (WHERE authors.id IS NOT NULL), '[]') as authors
    FROM books 
    LEFT JOIN authors_books
    ON books.id = authors_books.book_id
    LEFT JOIN authors on authors.id = authors_books.author_id
    WHERE books.id = $1
    GROUP BY books.id;
        `,
      [id]
    );
    return new Book(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM books');
    return rows.map((row) => new Book(row));
  }
};
