import artists from "../lib/artists";
import List from "./List";

//Typescript
type ArtistListProps = {
  onLike: (id: any) => void;
  likes: string[];
};
//typescrip End

export default function FavView({
  onLike,
  likes,
}: ArtistListProps): JSX.Element {
  return (
    <>
      {artists.map(
        (artist) =>
          likes.includes(artist.id) && (
            <List key={artist.id} {...artist} onLike={onLike} likes={likes} />
          )
      )}
    </>
  );
}
