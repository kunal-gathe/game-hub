import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import getCroppedImageUrl from "../servicess/imageUrl";

function GenreList() {
  const { data } = useGenres();
  return (
    <List >
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
          </HStack>
          <Text fontSize='lg'>{genre.name}</Text>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
