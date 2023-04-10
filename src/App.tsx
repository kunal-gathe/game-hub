import { Grid, GridItem, Show } from '@chakra-ui/react'
import React from 'react'
import GenreList from './components/GenreList'
import GameCard from './components/GameCard'
import Navbar from './components/Navbar'

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area='nav' bg = 'coral'>
      <Navbar />
    </GridItem>
    <Show above='lg'>
    <GridItem area='aside' bg = 'gold'>
      {/* <GameCard /> */}
    </GridItem>
    </Show>
    <GridItem area='main' bg = 'dodgerblue'>Nav</GridItem>
  </Grid>
}

export default App
