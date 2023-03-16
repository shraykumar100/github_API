import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useFetchAddDelActivityQuery } from "../store";
const Chart = ({ repoData }) => {
	// eslint-disable-next-line
	const { data, error, isLoading } = useFetchAddDelActivityQuery({
		owner: repoData.owner.login,
		repo: repoData.name,
	});

	// console.log(data, error, isLoading);

	const options = {
		title: {
			text: "My chart",
		},
		series: [
			{
				data: [1, 2, 3, 4, 5],
			},
		],
	};
	return (
		<>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</>
	);
};

export default Chart;
