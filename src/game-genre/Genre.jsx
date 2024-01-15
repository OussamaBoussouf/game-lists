import { Box, Heading } from '@chakra-ui/react'
// import GenreCard from './components/GenreCard';
import adventure from '../assets/img/genre/adventure.jpg';
import action from '../assets/img/genre/action.jpg';
import rpg from '../assets/img/genre/rpg.jpg';
import shooter from '../assets/img/genre/shooter.jpg';
import indie from '../assets/img/genre/indie.jpg';
import CardElement from './components/CardElement';
import axiosGame from '../services/api-games';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { useGameContext } from '../contexts/GameContext';
import { GameContext } from '../App';

const gameGenre = ["Adventure", "Action", "Shooter", "Rpg", "Indie"];
const images = [adventure, action, shooter, rpg, indie];

const Genre = () => {

  const{fetchGenre} = useContext(GameContext);
  const [isActive, setIsActive] = useState(0);

  const handleClick = (title, key)=>{
    fetchGenre(title);
    setIsActive(key);
  }

  return (
    <aside>
      <Heading as="h2" size="xl" mb="5">Genres</Heading>
      <Box>
          {gameGenre.map((text, index) => <CardElement akey={index + 1} isActive={isActive} onClick={handleClick} text={text} imageSrc={images[index]}/>)}
      </Box>
    </aside>
  )
}

export default memo(Genre)