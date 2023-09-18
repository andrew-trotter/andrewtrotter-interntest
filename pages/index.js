import Head from 'next/head';
import Header from '../componenets/Header';
import styles from '../styles/Home.module.css';
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - WASSP Multimbeam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Typography variant='h1'>Hello world</Typography>
        
      </main>

      <footer>
      </footer>
    </div>
  );
}
