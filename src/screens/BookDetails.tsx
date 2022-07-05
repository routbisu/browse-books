import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  SimpleGrid,
  Text,
  Image,
  AspectRatio,
  HStack,
  Stack,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Book from '../components/Book'
import { bookDetailsState } from '../selector/bookDetailsState'

const BookDetails: React.FC = () => {
  const { bookId } = useParams()
  const bookDetails = useRecoilValue(bookDetailsState(bookId))

  const { title, cover, author, isbn, sameAuthorBooks } = bookDetails
  const isLoaded = Boolean(title)

  return (
    <Box>
      <Skeleton isLoaded={isLoaded}>
        <Text fontSize="3xl" fontWeight="600" color="blue.600" my={3}>
          {title || 'Book title'}
        </Text>
      </Skeleton>

      {isLoaded ? (
        <Link to="/">
          <Button colorScheme="blue" size="sm" leftIcon={<ArrowBackIcon />}>
            Go back to Reading List
          </Button>
        </Link>
      ) : null}

      <Stack direction={['column', 'row']} mt={7} spacing={5}>
        <Skeleton isLoaded={isLoaded}>
          <Box width={['100%', 230, 400]}>
            <AspectRatio ratio={2 / 3}>
              <Image width="100%" fit="cover" src={cover} alt={title} />
            </AspectRatio>
          </Box>
        </Skeleton>
        <Box>
          <Skeleton isLoaded={isLoaded}>
            <Text fontWeight={500} color="blue.600" fontSize="2xl">
              {title || 'Book title'}
            </Text>
          </Skeleton>
          {isLoaded ? (
            <>
              <Text mt={1} fontSize="lg">
                {author}
              </Text>
              <Text mt={1}>ISBN: {isbn}</Text>
              {sameAuthorBooks?.length > 0 ? (
                <Text color="blue.600" fontWeight={500} mt={5}>
                  Books by the same author
                </Text>
              ) : null}

              <SimpleGrid maxWidth={500} mt={5} columns={[2, 2, 3]} spacing={5}>
                {sameAuthorBooks.map((book) => (
                  <Book key={book.id} bookDetails={book} />
                ))}
              </SimpleGrid>
            </>
          ) : (
            <SkeletonText mt={5} width={300} noOfLines={3} spacing={6} />
          )}
        </Box>
      </Stack>
    </Box>
  )
}

export default BookDetails
