import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";
function Sedan() {
	const sedanList = carsData.filter(
		(item) => item.category === "sedan"
	);
	return (
		<div>
			<CarsList data={sedanList} />
		</div>
	);
}

export default Sedan;
