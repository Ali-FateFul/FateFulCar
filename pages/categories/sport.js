import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";
function Sport() {
	const sportList = carsData.filter(
		(item) => item.category === "sport"
	);
	return (
		<div>
			<CarsList data={sportList} />
		</div>
	);
}

export default Sport;
