const Book = require("./book");

const getBookById = (id) => async (id) => {
  try {
    const book = await Book.findById(id);
    return book;
  } catch (error) {
    console.error("Error al obtener el libro por ID:", error);
    throw error;
  }
};
const getAllBooks = () => {};

const createBook = (bookDetails) => {};

const removeBookById = (id) => {};

const updateBookById = (id, update) => {};

module.exports = {
  getBookById,
  getAllBooks,
  createBook,
  removeBookById,
  updateBookById,
};
