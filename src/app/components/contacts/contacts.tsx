"use client";

import {Button} from "@radix-ui/themes";
import {useRouter} from "next/navigation";
import styles from "./contacts.module.css";

export function Contacts() {
	const router = useRouter();

	return (
		<div className={styles.contacts}>
			<h5 className={styles.title}>Less important title</h5>
			<Button onClick={() => router.push("/connect")}>Contact Us</Button>
		</div>
	);
}
