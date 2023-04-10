import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import PlatormIconList from './PlatormIconList'

interface Props {
    game: Game
  }

const GameCard = ({ game }: Props) =>{
    return (
        <Card borderRadius={10} overflow='-moz-hidden-unscrollable'>
            <Image src={game.background_image} />
            <CardBody >
                <Heading fontSize='2xl'>{game.name}</Heading>
             <PlatormIconList platforms={game.parent_platforms.map(p => p.platform)} />
            </CardBody>
        </Card>
    )
}
export default GameCard;