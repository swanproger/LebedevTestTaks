"use client";

import {Button} from "@radix-ui/themes";
import {useRouter} from "next/navigation";
import styles from "./about.module.css";

type Point = {
	title: string;
	text: string;
};

const aboutPoints: ReadonlyArray<Point> = new Array(6).fill(null).map(() => ({
	title: "Title",
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
}));

export function About() {
	const router = useRouter();

	return (
		<div className={styles.about}>
			<h3 className={styles.title}>Also very important title</h3>

			<div className={styles.points}>
				{aboutPoints.map((point, i) => (
					<div key={i}>
						<h4>{point.title}</h4>
						<p>{point.text}</p>
					</div>
				))}
			</div>

			<div className={styles.button}>
				<Button onClick={() => router.push("/connect")} className={styles.button}>
					Contact Us
				</Button>
			</div>
		</div>
	);
}
