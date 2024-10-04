import CarDetails from "../../components/templates/CarDetails";
import { useRouter } from "next/router";
import carsData from "../../data/carsData";

function CarDetail() {
	const router = useRouter();
	const { carId } = router.query;
	const details = carsData[carId - 1];

	return <CarDetails {...details} />;
}

export default CarDetail;
