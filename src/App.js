import CardComp from "./components/Card";
import { useState } from "react";
import { useFetchRepoQuery } from "./store";

function App() {
	const [expanded, setExpanded] = useState(false);
	// eslint-disable-next-line
	const [page, setPage] = useState(1);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	// eslint-disable-next-line
	const { data, error, isLoading } = useFetchRepoQuery(page);

	return (
		<div className="App">
			<CardComp
				data={data}
				isLoading={isLoading}
				expanded={expanded}
				setExpanded={setExpanded}
				handleExpandClick={handleExpandClick}
			/>
		</div>
	);
}

export default App;
