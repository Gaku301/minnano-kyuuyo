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
import { Bar } from "react-chartjs-2";

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

const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  aspectRatio: 1.5,
  plugins: {
    title: {
      display: true,
      text: '年齢別の平均給与',
      font: {size: 20}
    },
    datalabels: {
      align: 'top',
      color: 'white',
      font: {size: 13},
      formatter: (value: Number ,context: Context) => {
        return value.toString() + '万円';
      }
    },
    tooltip: {
      callbacks: {
        label: (context: TooltipItem) => {
          let label = context.dataset.label || "";
          let data = context.dataset.data[context.dataIndex] || "";
          return `${label}: ${data}万円`;
        }
      }
    }
  },
  scales: {
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

const labels = [
  '19歳以下',
  '20〜24歳', '25〜29歳',
  '30〜34歳', '35〜39歳',
  '40〜44歳', '45〜49歳',
  '50〜54歳', '55〜59歳',
  '60〜64歳', '65〜69歳',
  '70歳以上'
];

const data = {
  labels,
  datasets: [
    // {
    //   label: '男性',
    //   data: [146, 277, 393, 458, 518, 571, 621, 656, 668, 521, 421, 357],
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
    // {
    //   label: '女性',
    //   data: [115, 242, 319, 309, 311, 317, 321, 319, 311, 257, 208, 191],
    //   borderColor: 'rgb(255, 99, 132)',
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
    // },
    {
      label: '平均給与',
      data: [129, 260, 362, 400, 437, 470, 498, 514, 518, 415, 332, 285],
      borderColor: '#fb923c',
      backgroundColor: '#fb923c',
    },
  ],
};

export default function Chart(): JSX.Element {
  return <Bar options={options} data={data} />;
}