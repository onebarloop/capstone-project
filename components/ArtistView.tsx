import artists from "../lib/artists";
import List from "./List";

//Typescript
type ViewProps = {
  onLike: (id: string) => void;
  likes: string[];
};
//typescrip End

export default function ArtistView({ onLike, likes }: ViewProps): JSX.Element {
  return (
    <>
      {artists.map((artist) => (
        <List key={artist.id} {...artist} onLike={onLike} likes={likes} />
      ))}
    </>
  );
}
