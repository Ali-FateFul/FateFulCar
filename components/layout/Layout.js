import Link from "next/link";
import styles from "./Layout.module.css";
function Layout({ children }) {
	return (
		<>
			<header className={styles.header}>
				<Link href='/'>
					<h2>FateFulCar</h2>
					<p>Chose and Buy Your Car</p>
				</Link>
			</header>
			<div className={styles.container}>{children}</div>
			<footer className={styles.footer}>
				<p>FateFul Car sales site | FateFulCar Project &copy;</p>
			</footer>
		</>
	);
}

export default Layout;
