import { atom } from 'recoil'
import { Book } from '../common/types'

export const booksState = atom<Book[]>({
  key: 'booksState',
  default: [],
})
