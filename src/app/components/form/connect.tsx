"use client";

import {emailValidator, requiredValidator, setMessageReducer, Validator} from "@cadex/common";
import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";
import styles from "./connect.module.css";

type ConnectForm = {
	name: string;
	email: string;
	message: string;
};

type ServerResponse = {
	message: string;
};

export function Connect() {
	const router = useRouter();

	const initialFormState: ConnectForm = {
		name: "",
		email: "",
		message: "",
	};

	const initialFormErrors: {[Property in keyof ConnectForm]: false | string} = {
		name: false,
		email: false,
		message: false,
	};

	const formValidators: {[Property in keyof ConnectForm]: ReadonlyArray<Validator>} = {
		name: [requiredValidator],
		email: [emailValidator],
		message: [requiredValidator],
	};

	const [formState, setFormState] = useState(initialFormState);
	const [formErrors, setFormErrors] = useState(initialFormErrors);

	const updateControl = (
		controlName: keyof ConnectForm,
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormErrors((prevState) => ({
			...prevState,
			[controlName]: false,
		}));

		setFormState((prevState) => ({
			...prevState,
			[controlName]: e.target.value,
		}));
	};

	const processForm = () => {
		let body: string;

		try {
			const bodyString = JSON.stringify(formState);

			body = bodyString;
		} catch (e) {
			console.log("Error in stringify process");

			body = "";
		}

		if (!body) {
			//TODO: показать ошибку обработки формы
			return;
		}

		fetch("/api/cadex/form", {
			method: "POST",
			body: body,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then(async (res: Response) => {
				const response = await res.json();

				console.log("server result", response);

				setMessageReducer(response.message);

				router.push("/result");
			})
			.catch((e) => {
				//TODO: показать ошибку сервера
				console.error(e);
			});
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		let formErrors = false;

		//TODO: можно вынести в отедельную типизируемую функцию
		Object.keys(formState).forEach((key) => {
			const controlName = key as keyof ConnectForm;
			formValidators[controlName].forEach((validator) => {
				const validationResult = validator(formState[controlName]);

				if (typeof validationResult !== "boolean") {
					formErrors = true;

					setFormErrors((prevState) => ({
						...prevState,
						[controlName]: validationResult,
					}));
				}
			});
		});

		if (formErrors) {
			return;
		}

		processForm();
	};

	return (
		<div className={styles.connect}>
			<h2 className={styles.title}>Only CTA on the page</h2>

			<form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
				<div className={styles.control}>
					<span>Name</span>
					<input
						value={formState.name}
						spellCheck="false"
						className={formErrors.name ? styles.error : ""}
						onChange={(e) => updateControl("name", e)}
						type="text"></input>
					<span className={styles.controlError}>{formErrors.name}</span>
				</div>

				<div className={styles.control}>
					<span>Email</span>
					<input
						type="email"
						value={formState.email}
						className={formErrors.email ? styles.error : ""}
						onChange={(e) => updateControl("email", e)}></input>
					<span className={styles.controlError}>{formErrors.email}</span>
				</div>

				<div className={styles.control}>
					<span>Message</span>
					<textarea
						value={formState.message}
						className={`${formErrors.message ? styles.error : ""} ${styles.textarea}`}
						onChange={(e) => updateControl("message", e)}></textarea>
					<span className={styles.controlError}>{formErrors.message}</span>
				</div>

				<button className={styles.button} type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}
