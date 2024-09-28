function CarsPage({ data }) {
	return (
		<div>
			{data.map((car) => (
				<p key={car.id}>{car.name}</p>
			))}
		</div>
	);
}

export default CarsPage;
