import React, { useEffect, useState } from 'react'
import apiClient from '../servicess/api-client';
import { Text } from '@chakra-ui/layout';
import { SimpleGrid, Skeleton } from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCardSkeleton from './GameCardSkeleton';



interface Game {
    id : number,
    name: string
}
interface FetchGameResponse{
    count: number,
    results : Game[]
}
function GameGrid() {
    
    const{ games, error, isLoading} = useGames()
    const skeleton = [1,2,3,4,5,6]

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid column={{sm:1, md: 2, lg: 3,xl: 5}} padding='10px' spacing={10}>
        {isLoading && skeleton.map( skeleton => <GameCardSkeleton key={skeleton}/>)}
        {games.map( game => <GameGrid key={game.id}  />)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
