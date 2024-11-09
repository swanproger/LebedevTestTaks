import {Validator} from "@cadex/common";

export const requiredValidator: Validator = (s: string) => (!!s ? true : "Required field");
