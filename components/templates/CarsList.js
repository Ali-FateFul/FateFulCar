import styles from "./CarsList.module.css";
import Back from "../icons/Back";
import Card from "../module/Card";

function CarsList({ data }) {
	return (
		<div className={styles.container}>
			<div className={styles.back}>
				<Back />
				<p>Back</p>
			</div>
			<div className={styles.cards}>
				{data.map((car) => (
					<Card
						key={car.id}
						{...car}
					/>
				))}
			</div>
		</div>
	);
}

export default CarsList;
