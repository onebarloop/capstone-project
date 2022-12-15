import artists from "../lib/artists";
import List from "./List";

//Typescript
type ViewProps = {
  onLike: (id: string) => void;
  likes: string[];
};
//typescrip End

export default function FavView({ onLike, likes }: ViewProps): JSX.Element {
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
