import ConceptItem from "./ConceptItem";

function Concepts(props) {
	const data = props.data;

	return (
		<ul id="concepts">
        {data.map((e) => {
			return (
				<ConceptItem
					key={e.title}
					title={e.title}
					img={e.image}
					desc={e.description}
				/>
			);
		})}
      </ul>
	);
}

export default Concepts;