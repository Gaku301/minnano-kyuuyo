import {
 Chart as ChartJS, 
 CategoryScale,
 LinearScale,
 PointElement,
 BarElement,
 Title,
 Tooltip,
 Legend,
 TooltipItem
} from "chart.js";
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import KyuuyoData from "../utils/Data"

interface Props {
  year: string,
  is_devided: boolean
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function Chart({ year, is_devided }: Props): JSX.Element {
  const [aspectRatio, setAspectRatio] = useState(1.5);
  const [datalabelDisplay, setDataLabelDisplay] = useState(true);
  useEffect(() => {
    if (typeof window !== undefined && window.matchMedia('(max-width:639px)').matches) {
      // Smart Phone
      setAspectRatio(0.9);
      setDataLabelDisplay(false);
    } else if (typeof window !== undefined && window.matchMedia('(max-width:768px)').matches) {
      // Tablet
      setAspectRatio(1.2);
    }
  }, []);
    // chart option
  const options = {
    layout: {padding: 50},
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    aspectRatio: aspectRatio,
    plugins: {
      title: {
        display: true,
        text: `${year}年（${KyuuyoData[year.toString()]['wareki']}）`,
        font: {size: 20}
      },
      datalabels: {
        display: datalabelDisplay,
        align: 'top' as const,
        font: {size: 13},
        formatter: (value: Number ,context: Context) => {
          return value.toString() + '万円';
        }
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"bar">) => {
            let label = context.dataset.label || "";
            let data = context.dataset.data[context.dataIndex] || "";
            return `${label}: ${data}万円`;
          }
        }
      }
    },
    scale: {
      x: {
        title: {
          display: false,
          text: '年齢'
        }
      },
      y: {
        ticks: {
          callback: (value: String, index: Number) => {
            return `${value} 万円`;
          }
        },
      }
    }
  }

  // chart datas
  let datasets = [];
  if (is_devided) {
    const manData = KyuuyoData[year]['man'] ?? [];
    const womanData = KyuuyoData[year]['woman'] ?? [];
    // 男女で分ける
    datasets = [
      {
        label: '男性',
        data: manData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: '女性',
        data: womanData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ];
  } else {
    const chartData = KyuuyoData[year]['all'] ?? [];
    // 平均給与
    datasets = [
      {
        label: '平均給与',
        data: chartData,
        borderColor: '#fb923c',
        backgroundColor: 'rgba(251, 146, 60, 0.7)',
        borderWidth: 2
      }
    ];
  }

  // chart label
  let labels = [];
  if (Number(year) <= 2006) {
    labels = [
      '19歳以下',
      '20〜24歳', '25〜29歳',
      '30〜34歳', '35〜39歳',
      '40〜44歳', '45〜49歳',
      '50〜54歳', '55〜59歳',
      '60歳以上',
    ];
  } else {
    labels = [
      '19歳以下',
      '20〜24歳', '25〜29歳',
      '30〜34歳', '35〜39歳',
      '40〜44歳', '45〜49歳',
      '50〜54歳', '55〜59歳',
      '60〜64歳', '65〜69歳',
      '70歳以上'
    ];
  }

  const data = {
    labels,
    datasets: datasets,
  };

  return <Bar options={options} data={data} />;
}