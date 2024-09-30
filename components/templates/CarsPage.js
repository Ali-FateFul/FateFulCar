import Card from "../module/Card";

function CarsPage({ data }) {
	return (
		<div>
			{data.map((car) => (
				<Card key={car.id} {...car}/>
			))}
		</div>
	);
}

export default CarsPage;
