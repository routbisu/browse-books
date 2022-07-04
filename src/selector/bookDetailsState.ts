import { selectorFamily } from 'recoil'
import { booksState } from '../atoms/booksState'
import { Book } from '../common/types'

/** Get details about a single book including other books by the same author */
export const bookDetailsState = selectorFamily<Book, string>({
  key: 'bookDetailsState',
  get:
    (bookId: string) =>
    ({ get }) => {
      const allBooks = get(booksState)
      const bookDetails = allBooks.find(({ id }) => id === bookId)
      let sameAuthorBooks = []

      /** Find other books with the same author */
      if (bookDetails) {
        sameAuthorBooks = allBooks.filter(
          (book) =>
            book.author === bookDetails.author && book.id !== bookDetails.id
        )
      }

      return { ...bookDetails, sameAuthorBooks }
    },
})
