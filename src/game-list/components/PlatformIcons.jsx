

import xbox from "../../assets/img/icons/xbox.svg";
import playstation from "../../assets/img/icons/playstation.svg";
import pc from "../../assets/img/icons/pc.svg";
import android from "../../assets/img/icons/android.svg";
import ios from "../../assets/img/icons/ios.svg";
import { Image } from '@chakra-ui/react';

const PlatformIcons = ({platform}) => {
  switch (platform) {
    case "pc":
        return <Image src={pc} boxSize="20px" />
    case "playstation":
        return <Image src={playstation} boxSize="20px" />
    case "xbox":
        return <Image src={xbox} boxSize="20px" />
    case "android":
        return <Image src={android} boxSize="20px" />
    case "mac":
        return <Image src={ios} boxSize="20px" />
    default:
        break;
  }
}

export default PlatformIcons