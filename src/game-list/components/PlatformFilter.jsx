import React, { useContext } from "react";
import { Select } from "@chakra-ui/react";
import { GameContext } from "../../App";

const PlatformFilter = () => {

  const {onChangePlatform} = useContext(GameContext);

  return (
    <Select
      display="inline-block"
      maxW="max-content"
      backgroundColor="#eaeaea"
      size="md"
      me="5"
      onChange={(e) => onChangePlatform(e.target.value)}
    >
      <option disabled selected>Platforms</option>
      <option value="pc">Pc</option>
      <option value="xbox">Xbox</option>
      <option value="playstation">Playstation</option>
      <option value="mac">Ios</option>
      <option value="android">Android</option>
    </Select>
  );
};

export default PlatformFilter;
