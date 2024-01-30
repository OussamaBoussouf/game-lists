import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import PlatformIcons from "./PlatformIcons";
import arrowIcon from "../../assets/img/icons/arrow-icon.png";
import ThumbsIcon from "../../assets/img/icons/thumbs-up.png";
import { useTheme } from "../../hooks/useTheme";

const GameCard = ({ name, imageSrc, rate, platforms, totalReviews }) => {

  const {lightMode} = useTheme();
    
  return (
    <Card borderTopRadius="2xl"  backgroundColor={lightMode ? null : "#1c1c1c"} >
      <CardBody p="0">
        <Image loading="lazy" borderTopRadius="xl"  objectFit="cover" src={imageSrc} />
        <Box p="5"  >
          <Flex align="center" justify="space-between" mb="3">
            <Flex gap="2">
              {platforms.map((ele, index) => <PlatformIcons key={index} platform={ele.platform.slug}/>)}
            </Flex>
            <Text color= {lightMode ? null: "#344c3e"} as="b" bgColor="green.200" px="3" borderRadius="md" >
              {rate}
            </Text>
          </Flex>
          <Flex justify="space-between" align="center">
            <Heading as="h2" size="lg" color={lightMode ? null : "white"}>{name}</Heading>
            {totalReviews > 5000 ? <Image src={arrowIcon} boxSize="30px" />: <Image src={ThumbsIcon} boxSize="30px" /> }
          </Flex>
        </Box>
      </CardBody>
    </Card>
  );
};

export default GameCard;
