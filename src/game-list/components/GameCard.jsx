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

const GameCard = ({ name, imageSrc, rate, platforms }) => {
    
  return (
    <Card>
      <CardBody p="0">
        <Image borderTopRadius="xl" objectFit="cover" src={imageSrc} />
        <Box p="5">
          <Flex align="center" justify="space-between" mb="3">
            <Flex gap="2">
              {platforms.map(ele => <PlatformIcons platform={ele.platform.slug}/>)}
            </Flex>
            <Text as="b" bgColor="green.200" px="3" borderRadius="md">
              {rate}
            </Text>
          </Flex>
          <Flex justify="space-between" align="center">
            <Heading as="h2" size="lg">{name}</Heading>
            <Image src={arrowIcon} boxSize="40px" />
          </Flex>
        </Box>
      </CardBody>
    </Card>
  );
};

export default GameCard;
