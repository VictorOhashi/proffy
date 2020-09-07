import Head from 'next/head';

import { FadeIn } from '../components';
import Landing from '../containers/Landing';

const Home = () => {
  return (
    <>
      <Head>
        <title>Proffy</title>
      </Head>

      <FadeIn background="primary" orientation="right-to-left">
        <Landing />
      </FadeIn>
    </>
  );
};

export default Home;
