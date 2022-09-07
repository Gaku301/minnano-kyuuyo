import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-6xl font-bold">
        Welcome to{" "}
        <a className="text-blue-600" href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className="mt-3 text-2xl">
        Get started by editing{' '}
        <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">pages/index.tsx</code>
      </p>

      <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        <a 
          href="https://nextjs.org/docs" 
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h2 className="text-2xl font-bold">Documentation &rarr;</h2>
          <p className="mt-4 text-xl">Find in-depth information about Next.js features and API.</p>
        </a>

        <a 
          href="https://nextjs.org/learn" 
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h2 className="text-2xl font-bold">Learn &rarr;</h2>
          <p className="mt-4 text-xl">Learn about Next.js in an interactive course with quizzes!</p>
        </a>
      </div>

      <h2 className="font-bold text-white">ほげk</h2>
    </>
  )
}

export default Home
