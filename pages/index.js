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
       <iframe width="1012" height="1400" src="https://miro.com/app/live-embed/o9J_lj9dcu4=/?moveToViewport=-1570,-2255,2614,2437&embedId=653769344612" frameborder="0" scrolling="no" allowfullscreen></iframe>
       <Header title="Ford x xix3D work flow" />
       <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
