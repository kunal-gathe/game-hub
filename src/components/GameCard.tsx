import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import PlatormIconList from './PlatormIconList'
import getCroppedImageUrl from '../servicess/imageUrl'
import CriticScore from './CriticScore'

interface Props {
    game: Game
  }

const GameCard = ({ game }: Props) =>{
    return (
        <Card width='300px' borderRadius={10} overflow='hidden'>
            <Image src={getCroppedImageUrl (game.background_image)} />
            <CardBody >
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
             <PlatormIconList platforms={game.parent_platforms.map(p => p.platform)} />
             <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    )
}
export default GameCard;