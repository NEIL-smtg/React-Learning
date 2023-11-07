import {React, useState} from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import ResultTable from "./components/ResultTable/ResultTable";

function App() {

	const [result, setResult] = useState([]);

	const getResult = (data) => {
		setResult(data);
	}

	return (
		<div>
			<Header />
			<Form result={getResult}/>
			{result.length ? <ResultTable data={result}/> :
			<p style={{textAlign: 'center'}}>No data.</p>}
		</div>
	);
}

export default App;
