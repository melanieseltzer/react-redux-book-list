export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  return {
    // type is always uppercase
    type: 'BOOK_SELECTED',
    payload: book
  };
}
