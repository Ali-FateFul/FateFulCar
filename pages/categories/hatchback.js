import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";
function Hatchback() {
	const hatchbackList = carsData.filter(
		(item) => item.category === "hatchback"
	);
	return (
		<div>
			<CarsList data={hatchbackList} />
		</div>
	);
}

export default Hatchback;
