import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { booksState } from '../atoms/booksState'
import Book from '../components/Book'

/** Loading state for the book component */
const booksLoading = [...new Array(7)].map((_, idx) => (
  <Book key={idx} isLoading />
))

const Recommendations: React.FC = () => {
  const allBooks = useRecoilValue(booksState)

  return (
    <Box>
      <Text fontSize="3xl" fontWeight="600" color="blue.600">
        Reading List
      </Text>
      <Text mt={2} color="gray.600">
        A list of good reads recommended based on your search history and
        profile.
      </Text>
      <SimpleGrid mt={5} columns={[2, 3, 4]} spacing={6}>
        {allBooks.length > 0
          ? allBooks.map((book) => <Book key={book.id} bookDetails={book} />)
          : booksLoading}
      </SimpleGrid>
    </Box>
  )
}

export default Recommendations
