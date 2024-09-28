import CarsPage from "../../components/templates/CarsPage";

import carsData from "../../data/carsData";

function cars() {
	return (
		<div>
			<CarsPage data={carsData} />
		</div>
	);
}

export default cars;
