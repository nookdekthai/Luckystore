import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import { Facebook1 } from './Facebook1';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>LuckyBear Store</title>

<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>




      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Facebook1/>
        <Footer />
      </footer>
    </div>
    
    
  )
}

export default Layout