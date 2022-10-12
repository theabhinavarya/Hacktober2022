import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results';
import request from '../utils/request'


export default function Home(props) {
  return (
    <div className='my-[2.5rem]'>
      <Head>
        <title>HULU 2.0</title>
        <meta name="description" content="A replica of HULU website." />
        <link rel="icon" href="/hulu-favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={props} />

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = (context.query?.genre) ? context.query.genre : 'fetchTrending';
  const [[obj, value]] = Object.entries(request).filter(([key, { title, url }]) => key === genre);

  const res = await fetch(`https://api.themoviedb.org/3${value.url ? value.url : request.fetchTrending.url}`);
  const data = await res.json();

  return {
    props: {
      data: data,
    }
  }
}