import {
  List,
  ListItem,
  HStack,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";

import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Prop {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ selectedGenre, onSelect }: Prop) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genre
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelect(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
