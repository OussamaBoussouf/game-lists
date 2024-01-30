import { Box, Flex, Heading } from '@chakra-ui/react'
// import GenreCard from './components/GenreCard';
import adventure from '../assets/img/genre/adventure.jpg';
import action from '../assets/img/genre/action.jpg';
import rpg from '../assets/img/genre/rpg.jpg';
import shooter from '../assets/img/genre/shooter.jpg';
import indie from '../assets/img/genre/indie.jpg';
import CardElement from './components/CardElement';
import axiosGame from '../services/api-games';
import { useContext, useEffect, useRef, useState } from 'react';
import { useGames } from '../hooks/useGames';
import { useTheme } from '../hooks/useTheme';

const gameGenre = ["Adventure", "Action", "Shooter", "Indie"];
const images = [adventure, action, shooter, indie];

const Genre = () => {

  // const{setGenre} = useContext(GameContext);
  const {setGenre} = useGames();
  const {lightMode} = useTheme();
  const [isActive, setIsActive] = useState(0);

  const handleClick = (genre, key)=>{
    setGenre(genre);
    setIsActive(key);
  }

  return (
    <aside>
      <Heading as="h2" size={{base: "lg", md:"lg", lg:"xl"}} mb="5"  color={lightMode ? null : "#e9e9e9"}>Genres</Heading>
      <Flex mb={{base:"5", sm:"0"}} align={{base:"center", sm:"flex-start"}} justifyContent="space-between" flexDirection={{md:"column"}}>
          {gameGenre.map((text, index) => <CardElement key={index} akey={index + 1} isActive={isActive} onClick={handleClick} text={text} imageSrc={images[index]}/>)}
      </Flex>
    </aside>
  )
}

export default Genre