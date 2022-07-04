import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Image,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Book as BookProps } from '../common/types'
import { Link } from 'react-router-dom'

type BookComponentProps = {
  bookDetails?: BookProps
  isLoading?: boolean
}

const Book: React.FC<BookComponentProps> = ({ bookDetails, isLoading }) => {
  const { title, id, cover, author } = bookDetails || {}

  return (
    <Flex direction="column">
      <Skeleton isLoaded={!isLoading}>
        <AspectRatio ratio={2 / 3}>
          <Image width="100%" fit="cover" src={cover} alt={title} />
        </AspectRatio>
      </Skeleton>
      <Flex flex="1" direction="column" justifyContent="space-between">
        <Box mb={2}>
          {isLoading ? (
            <SkeletonText noOfLines={3} mt={3} />
          ) : (
            <>
              <Text fontWeight="500" mt={2}>
                {title}
              </Text>
              <Text fontSize="sm" mt={1}>
                {author}
              </Text>
            </>
          )}
        </Box>
        {isLoading ? null : (
          <Link to={`/book/${id}`}>
            <Button colorScheme="blue" size="sm">
              See Details
            </Button>
          </Link>
        )}
      </Flex>
    </Flex>
  )
}

export default Book
