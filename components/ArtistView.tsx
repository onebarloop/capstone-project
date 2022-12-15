import artists from "../lib/artists";
import List from "./List";

//Typescript
type ArtistListProps = {
  onLike: (id: any) => void;
  likes: string[];
};
//typescrip End

export default function ArtistView({
  onLike,
  likes,
}: ArtistListProps): JSX.Element {
  return (
    <>
      {artists.map((artist) => (
        <List key={artist.id} {...artist} onLike={onLike} likes={likes} />
      ))}
    </>
  );
}
