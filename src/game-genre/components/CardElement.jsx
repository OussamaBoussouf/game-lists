import { Button, Flex, Image, Link } from '@chakra-ui/react'
import { memo, useEffect, useState } from 'react'
import "./CardElement.css"

const CardElement = ({isActive ,akey ,imageSrc, text, onClick}) => {


  const fetchData = (e)=>{
    onClick(e.target.innerHTML, akey);
  }



  return (
    <Flex align="center" mb="5">
      <Image
        src={imageSrc}
        borderRadius="xl"
        objectFit="cover"
        mr="3"
        width="50px"
        height="50px"
      />
      <Link className={ isActive === akey ? "active" : null} onClick={(e) => fetchData(e)} color="gray">{text}</Link>
    </Flex>
  );
};

export default memo(CardElement);
