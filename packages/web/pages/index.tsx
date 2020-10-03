import { GetStaticProps } from 'next';
import Head from 'next/head';

import { FadeIn } from '../components';
import Landing from '../containers/Landing';

import api from '../services/api';

const Home = ({ total }) => {
  return (
    <>
      <Head>
        <title>Proffy</title>
      </Head>

      <FadeIn background="primary" orientation="right-to-left">
        <Landing total={total} />
      </FadeIn>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/conexoes');
  const { total } = response.data;
  return { props: { total }, revalidate: 100 };
};

export default Home;
