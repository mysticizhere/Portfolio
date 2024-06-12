import Head from 'next/head';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/scene'), { ssr: false });

const Home = () => {
  return (
    <div>
      <Head>
        <title>My 3D Portfolio</title>
      </Head>
      <main>
        <h1 className="text-center text-3xl font-bold">Welcome to My 3D Portfolio</h1>
        <Scene />
      </main>
    </div>
  );
};

export default Home;
