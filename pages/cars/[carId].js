import { useRouter } from "next/router";
import carsData from "../../data/carsData";

function CarDetails() {
	const router = useRouter();
	const { carId } = router.query;
	const details = carsData[carId - 1];
	console.log(details);

	return <div>CarDetails</div>;
}

export default CarDetails;
