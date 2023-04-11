import { Grid, GridItem, Show } from '@chakra-ui/react'
import React from 'react'
import GenreList from './components/GenreList'

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area='nav' bg = 'coral'>Nav</GridItem>
    <Show above='lg'>
    <GridItem area='aside' bg = 'gold'><GenreList /></GridItem>
    </Show>
    <GridItem area='main' bg = 'dodgerblue'>Nav</GridItem>
  </Grid>
}

export default App
