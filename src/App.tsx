import { Container, Text } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import Recommendations from './screens/Recommendations'
import BookDetails from './screens/BookDetails'
import { getData } from './services/http'
import { useSetRecoilState } from 'recoil'
import { booksState } from './atoms/booksState'

const App = () => {
  const setBooks = useSetRecoilState(booksState)

  useEffect(() => {
    ;(async () => {
      try {
        const result = await getData('/')
        setBooks(result.books)
      } catch (error) {
        // TODO: Add better error handling
        alert('There was an unexpected error!')
      }
    })()
  }, [])

  return (
    <Container p={4} maxWidth={1100}>
      <Router>
        <Routes>
          <Route path="/" element={<Recommendations />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
