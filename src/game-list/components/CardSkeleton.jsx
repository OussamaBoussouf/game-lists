import { Box, SkeletonText, Skeleton} from '@chakra-ui/react'
import React from 'react'
import { useTheme } from '../../hooks/useTheme'

const CardSkeleton = () => {

  const {lightMode} = useTheme();

  return (
    <Box borderRadius="xl" boxShadow='lg' bg={lightMode ? null : "#1c1c1c"}>
        <Skeleton borderTopRadius="xl" height="180px"/>
        <Box p='6' >
        <SkeletonText mt="2" spacing="4" skeletonHeight="3"/>
        </Box>
    </Box>
  )
}

export default CardSkeleton