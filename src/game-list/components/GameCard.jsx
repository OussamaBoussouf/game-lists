import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Spacer,
} from "@chakra-ui/react";

import PlatformIcons from "./PlatformIcons";
import "./GameCrad.css";
import arrowIcon from "../../assets/img/icons/arrow-icon.png";
import ThumbsIcon from "../../assets/img/icons/thumbs-up.png";
import { useTheme } from "../../contexts/themeContext";
import { useRef, useState } from "react";

const GameCard = ({
  name,
  imageSrc,
  rate,
  platforms,
  totalReviews,
}) => {
  const { lightMode } = useTheme();

  return (
    <Card
      className="game-card"
      borderTopRadius="2xl"
      backgroundColor={lightMode ? null : "#1c1c1c"}
      shadow={"xl"}
      mb="5"
    >
      <CardBody p="0">
        <Image
          loading="lazy"
          borderTopRadius="xl"
          objectFit="cover"
          src={imageSrc}
        />
        <Box p="5">
          <Flex align="center" justify="space-between" mb="3">
            <Flex gap="2">
              {platforms.map((ele, index) => (
                <PlatformIcons key={index} platform={ele.platform.slug} />
              ))}
            </Flex>
            <Text
              color={lightMode ? null : "#344c3e"}
              as="b"
              bgColor="green.200"
              px="3"
              borderRadius="md"
            >
              {rate}
            </Text>
          </Flex>
          <Flex justify="space-between" align="center">
            <Heading as="h2" size="lg" color={lightMode ? null : "white"}>
              {name}
            </Heading>
            {totalReviews > 5000 ? (
              <Image src={arrowIcon} boxSize="30px" />
            ) : (
              <Image src={ThumbsIcon} boxSize="30px" />
            )}
          </Flex>
          {/* <Box display="none" id={akey} ref={details}>
            <Flex color="white" mt="4" mb="3" justifyContent="space-between">
              <Text fontSize="xs">Release date :</Text>
              <Text fontSize="xs">Nov 30, 2024</Text>
            </Flex>
            <hr />
            <Flex color="white" mt="4" mb="3" justifyContent="space-between">
              <Text fontSize="xs">Genres :</Text>
              <Text fontSize="xs">Action, RPG</Text>
            </Flex>
            <hr />
            <Flex color="white" mt="4" mb="3" justifyContent="space-between">
              <Text fontSize="xs">Rating :</Text>
              <Text fontSize="xs">5.23</Text>
            </Flex>
            <hr />
          </Box> */}
        </Box>
      </CardBody>
    </Card>
  );
};

export default GameCard;
