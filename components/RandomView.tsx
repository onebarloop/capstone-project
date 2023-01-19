import styled from 'styled-components';
import Picture from './Picture';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import type { ArtistInterface } from '../lib/ArtistClass';
import useView from '../lib/useView';

type RandomProps = {
  artists: ArtistInterface[];
};

export default function RandomView({ artists }: RandomProps): JSX.Element {
  //The calculation of a random Artist List needs to be done via hook,
  //otherwise it would come to hydration error -> https://nextjs.org/docs/messages/react-hydration-error

  const { viewPoint } = useView();

  const [randomArtists, setRandomArtists] = useState<ArtistInterface[]>([]);
  useEffect(
    () =>
      setRandomArtists(
        artists
          .slice()
          .sort(() => Math.random() - Math.random())
          .slice(0, 6)
      ),
    [artists, viewPoint]
  );

  return (
    <StyledRandom>
      {randomArtists.map((artist) => (
        <Link key={artist._id} href={`/${artist.slug}`}>
          <Picture
            source={
              artist.tattoos[Math.floor(Math.random() * artist.tattoos.length)]
            }
          />
        </Link>
      ))}
    </StyledRandom>
  );
}

const StyledRandom = styled.main`
  color: rgba(217, 217, 217, 1);
  height: 75vh;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: space-around;
  justify-items: center;
  align-items: start;
  gap: 15px;
`;
