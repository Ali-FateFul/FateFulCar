import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";
function SearchBar() {
	const router = useRouter();
	const [min, setMin] = useState("");
	const [max, setMax] = useState("");

	const searchHandler = () => {
		if (min && max) {
			router.push(`/filter/${min}/${max}`);
		} else {
			alert("Please Enter a valid Min and Max Price");
		}
	};
	return (
		<div className={styles.container}>
			<div>
				<input
					placeholder='Enter min-price'
					value={min}
					onChange={(e) => setMin(e.target.value)}
				/>
				<input
					placeholder='Enter max-price'
					value={max}
					onChange={(e) => setMax(e.target.value)}
				/>
			</div>
			<button onClick={searchHandler}>Search</button>
		</div>
	);
}

export default SearchBar;
