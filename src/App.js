import CardComp from "./components/Card";
import { useState } from "react";
import { useFetchRepoQuery } from "./store";

function App() {
	const [expanded, setExpanded] = useState(false);
	const [page, setPage] = useState(1);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

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
