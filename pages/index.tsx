import type { NextPage } from "next";
import Chart from "../components/Chart";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-6xl font-bold">
        みんなの <b className="text-orange-400">給与</b>
      </h1>

      <p className="mt-3 text-2xl">
        How much ?
      </p>

      <div className="mt-6 flex max-w-5xl flex-wrap items-center justify-around sm:w-full">
        {/* Search Box */}
        <div className="mt-6 w-4/5 rounded-xl border p-6 text-left">
          <h2 className="text-2xl font-bold">検索</h2>
          <p className="mt-4 text-xl">Find in-depth information about Next.js features and API.</p>
        </div>

        {/* Chart Box */}
        <div className="mt-6 w-full rounded-xl border p-6 text-left">
          <h2 className="text-2xl font-bold">検索</h2>
          <Chart />
        </div>
      </div>
    </>
  )
}

export default Home
