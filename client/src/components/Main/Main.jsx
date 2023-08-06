import Test from "../Test/Test";
import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("payload");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>EDSENSE</h1>
				{/* <p>{localStorage.getItem("token")}</p> */}
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<Test/>
		</div>
	);
};

export default Main;
