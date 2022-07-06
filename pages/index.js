import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <iframe width="1012" height="1700" src="https://miro.com/app/live-embed/o9J_lj9dcu4=/?moveToViewport=-1570,-2255,2614,2437&embedId=415936286538" frameborder="0" scrolling="no" allowfullscreen></iframe>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
