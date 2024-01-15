import { Box, SkeletonText, Skeleton} from '@chakra-ui/react'
import React from 'react'

const CardSkeleton = () => {
  return (
    <Box borderRadius="xl" boxShadow='lg' bg='white'>
        <Skeleton borderTopRadius="xl" height="180px"/>
        <Box p='6'>
        <SkeletonText mt="2" spacing="4" skeletonHeight="3"/>
        </Box>
    </Box>
  )
}

export default CardSkeleton