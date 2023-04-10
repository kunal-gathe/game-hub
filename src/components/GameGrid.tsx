import React, { useEffect, useState } from 'react'
import apiClient from '../servicess/api-client';
import { Text } from '@chakra-ui/layout';
import { SimpleGrid } from '@chakra-ui/react'


interface Game {
    id : number,
    name: string
}
interface FetchGameResponse{
    count: number,
    results : Game[]
}
function GameGrid() {
    
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(()=>{
        apiClient.get<FetchGameResponse>('/games')
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message))
    })

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid column={{sm:1, md: 2, lg: 3,xl: 5}} padding='10px' spacing={10}>
        {games.map( game => <GameGrid key={game.id}  />)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
