import Head from 'next/head'

export default function Home() {

  return (   
    <div>
      <Head>
        <title>Next Js Boilerplate</title>
      </Head>
      <main>
        <div className="min-h-screen flex items-center justify-center text-5xl text-white bg-gradient-to-br from-gray-700 to-blue-500 font-sans">
        Next JS + Tailwindcss + Typescript
          
        </div>

      </main>
    </div>
  )
}
