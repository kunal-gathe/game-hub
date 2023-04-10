import {FaWindows, FaPlaystation, FaXbox,FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

 interface Props{
    platforms: Platform[]
}
function PlatormIconList({platforms}:Props) {
    const iconMap: {[key: string]: IconType} = {
        pc : FaWindows,
        FaPlaystation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        web: BsGlobe
    }
  return (
    <HStack margin={1}>
    {platforms.map((platform)=><Icon as={iconMap[platform.slug]} color='gray.500'></Icon>)}
    </HStack>
  )
}

export default PlatormIconList
