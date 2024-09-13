/** @format */

import { loginI } from "@/utils/types";
import { FieldApi } from "@tanstack/react-form";
import React from "react";

const LoginForm = (
	field: FieldApi<
		loginI,
		PrefixObjectAccessor<loginI, []>,
		undefined,
		undefined,
		string
	>
) => {
	console.log(field);

	return (
		<>
			<input
				type='text'
				placeholder='salom'
			/>
		</>
	);
};

export default LoginForm;
