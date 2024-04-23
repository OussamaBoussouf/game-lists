import { Box, SkeletonText, Skeleton} from '@chakra-ui/react'
import React from 'react'
import { useTheme } from '../../contexts/themeContext'

const CardSkeleton = () => {

  const {lightMode} = useTheme();

  return (
    <Box mb="4" borderRadius="xl" boxShadow='lg' bg={lightMode ? "lightgray" : "#1c1c1c"}>
        <Skeleton borderTopRadius="xl" height="180px"/>
        <Box p='6' >
        <SkeletonText mt="2" spacing="4" skeletonHeight="3"/>
        </Box>
    </Box>
  )
}

export default CardSkeleton