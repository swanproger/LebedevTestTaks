import {Footer} from "../footer";
import {Header} from "../header";
import styles from "./layout.module.css";

type Props = {
	children: React.ReactNode;
};

export function Layout({children}: Props) {
	return (
		<>
			<Header />
			<div className={styles.layout}>{children}</div>
			<Footer />
		</>
	);
}
