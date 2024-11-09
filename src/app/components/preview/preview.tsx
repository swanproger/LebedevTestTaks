import styles from "./preview.module.css";

export function Preview() {
	return (
		<div className={styles.preview}>
			<div className={styles.titleContainer}>
				<h2 className={styles.title}>Most important title on the page</h2>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum
					ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
				</p>
			</div>

			<div className={styles.video}>
				<iframe
					src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=xPdAvY_FQsEqcA0K"
					title="YouTube video player"></iframe>
			</div>
		</div>
	);
}
