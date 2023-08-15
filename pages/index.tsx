import React, { useState } from "react";
import type { NextPage } from "next";
import Chart from "../components/Chart";
import KyuuyoData from "../utils/Data";

const Home: NextPage = () => {
  const [select_val, setSelectVal] = useState<string>('2021');
  const [checked, setChecked] = useState<boolean>(false);
  const years = [];
  for (let index = 2021; index > 1996; index--) {
    const year = {
      'year': index,
      'wareki': KyuuyoData[index.toString()]['wareki']
    }
    years.push(year);
  }

  const selectHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectVal(e.target.value);
  }

  const checkboxHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  }

  return (
    <>
      <div className="mt-10">
        <h1 className="text-6xl font-bold sm:mx-0">
          みんなの <b className="text-orange-400">給与</b>
        </h1>
        <p className="mt-3 text-2xl">
          How much ?
        </p>
      </div>

      <div className="mt-10 flex max-w-5xl flex-wrap items-center justify-around sm:w-full">
        {/* Description */}
        <div className="my-3 border-y-2 p-6 w-full text-center">
          <p className="items-center">
            <strong className="text-orange-400 font-extrabold text-lg">※ </strong>
            本サイトは国税庁の「
            <a 
              href="https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan/top.htm"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-2 decoration-orange-400 hover:text-orange-400"
            >民間給与実態統計調査</a>
            」のデータを基に作成しています。
          </p>
        </div>

        {/* Search Box */}
        <div className="mt-10 rounded-xl border p-6 text-left shadow-lg lg:w-3/5 md:w-4/5">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="mt-3">
              <label htmlFor="year_select" className="block mb-1 font-medium">【 西暦 】</label>
              <select 
                id="year_select"
                className="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-orange-400 bg-gray-100"
                value={select_val}
                onChange={(e) => selectHandle(e)}
              >
                {years.map((val, index) => <option value={val.year} key={index}>{`${val.year}年（${val.wareki}）`}</option>)}
              </select>
            </div>
            <div className="mt-3">
              <label className="block mb-1 font-medium">【 性別 】</label>
              <div className="grid gap-6 mt-3">
              <div className="flex items-center mr-4">
                <input 
                  id="all-checkbox" 
                  type="checkbox" 
                  className="bg-gray-50 border border-gray-300 rounded text-orange-400 focus:ring-orange-400 focus:border-orange-400 w-6 h-6 cursor-pointer" 
                  checked={checked}
                  onChange={(e) => checkboxHandle(e)}
                />
                <label htmlFor="all-checkbox" className="ml-2 mb-1 font-medium cursor-pointer">男性・女性で分ける</label>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Box */}
        <div className="mt-6 w-full rounded-xl border text-left my-10 shadow-lg">
          <h2 className="text-2xl font-bold px-6 pt-6">年齢別の平均給与</h2>
          <Chart year={select_val} is_devided={checked}/>
        </div>
      </div>
    </>
  )
}

export default Home
