import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";
function Suv() {
	const suvList = carsData.filter((item) => item.category === "suv");
	return (
		<div>
			<CarsList data={suvList} />
		</div>
	);
}

export default Suv;
