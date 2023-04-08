import { Image } from '@chakra-ui/image'
import { HStack } from '@chakra-ui/layout'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <HStack>
        <Image src={logo} boxSize="3.5rem" />
    </HStack>
  )
}

export default Navbar
