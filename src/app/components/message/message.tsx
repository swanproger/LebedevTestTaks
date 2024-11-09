"use client";

import {getMessageFromState} from "@cadex/common";
import {redirect, useRouter} from "next/navigation";
import styles from "./message.module.css";

export function Message() {
	const router = useRouter();

	const message = getMessageFromState();

	if (!message) {
		redirect("/");
	}

	return (
		<div className={styles.message}>
			<p>{message}</p>
		</div>
	);
}
