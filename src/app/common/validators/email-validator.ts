import {Validator} from "@cadex/common";

const emailRegExp = new RegExp(
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const emailValidator: Validator = (s: string) =>
	emailRegExp.test(s) ? true : "Enter email in example@domain.com format";
