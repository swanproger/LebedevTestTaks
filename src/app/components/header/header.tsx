"use client";

import {Button} from "@radix-ui/themes";
import Link from "next/link";
import {useRouter} from "next/navigation";
import styles from "./header.module.css";

export function Header() {
	const router = useRouter();

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Link href="/">
					<h1>Some Company</h1>
				</Link>
			</div>
			<Button className={styles.button} onClick={() => router.push("/connect")}>
				Contact Us
			</Button>
		</div>
	);
}
