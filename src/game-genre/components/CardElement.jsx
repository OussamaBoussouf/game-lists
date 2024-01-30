import { Button, Flex, Image, Link } from '@chakra-ui/react'
import { memo, useEffect, useState } from 'react'
import "./CardElement.css"
import { useTheme } from '../../hooks/useTheme';

const CardElement = ({isActive ,akey ,imageSrc, text, onClick}) => {

  const {lightMode} = useTheme();

  const fetchData = (e)=>{
    onClick(e.target.innerHTML, akey);
  }



  return (
    <Flex mb={{sm:"5"}} alignItems="center" flexDirection={{base:"column", md:"row"}}>
      <Image
        src={imageSrc}
        borderRadius="xl"
        objectFit="cover"
        w="50px"
        h="50px"
        me={{md:"4"}}
      />
      <Link fontSize="sm"  className={ isActive === akey ? "active" : null} onClick={(e) => fetchData(e)} color={lightMode ? "gray" : "#e9e9e9"}>{text}</Link>
    </Flex>
  );
};

export default memo(CardElement);
