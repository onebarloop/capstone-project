import Head from 'next/head';
import RandomView from '../components/RandomView';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';
import styled from 'styled-components';
import List from '../components/List';
import type { ArtistInterface } from '../lib/ArtistClass';
import useLikes from '../lib/useLikes';
import useView from '../lib/useView';

type HomeProps = {
  artists: ArtistInterface[];
};

export default function Home({ artists }: HomeProps): JSX.Element {
  const { likes } = useLikes();
  const { viewPoint, handleSwitchView } = useView();

  // need an extra function to trigger the reload of the RandomView page.
  function handleRandom() {
    handleSwitchView('reload');
    handleSwitchView('random');
  }

  return (
    <>
      <Head>
        <title>Wannado</title>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Header />

      <StyledButtonWrapper>
        <StyledButton
          onClick={handleRandom}
          name={'Surprise Me!'}
          inactive={!viewPoint.random}
        />
        <StyledButton
          onClick={() => handleSwitchView('artists')}
          name={'Browse Artists'}
          inactive={!viewPoint.artists}
        />
        <StyledButton
          onClick={() => handleSwitchView('favorites')}
          name={'Favorites'}
          inactive={!viewPoint.favorites}
        />
      </StyledButtonWrapper>

      {viewPoint.random && <RandomView artists={artists} />}
      {viewPoint.artists && (
        <StyledList>
          {artists.map((artist) => (
            <List key={artist._id} {...artist} />
          ))}
        </StyledList>
      )}
      {viewPoint.favorites && likes.length === 0 ? (
        <>
          <StyledPlaceholder>No likes yet...</StyledPlaceholder>
          <StyledPlaceholder>🥲</StyledPlaceholder>
        </>
      ) : (
        viewPoint.favorites && (
          <StyledList>
            {artists.map(
              (artist) =>
                likes.includes(artist._id) && (
                  <List key={artist._id} {...artist} />
                )
            )}
          </StyledList>
        )
      )}

      <Footer />
    </>
  );
}

const StyledList = styled.div`
  margin-bottom: 60px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
`;

const StyledPlaceholder = styled.h2`
  margin: 50px;
  color: rgba(217, 217, 217, 1);
`;

const StyledButton = styled(Button)`
  font-size: 0.7em;
`;
