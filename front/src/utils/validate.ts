const validateEmail = (email: string) => {
	const regex = new RegExp(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);

	return regex.test(email);
};

const maskPhoneNumber = (value: string) => {
	const stringValue = value.toString();
	return stringValue
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '($1) $2')
		.replace(/(\d{5})(\d{4})(\d{0,10})$/, '$1-$2');
};

const validatePhoneNumber = (input_str: string) => {
	var re = /^(1\s|1|)?((\(\d{2}\))|\d{3})(\-|\s)?(\d{5})(\-|\s)?(\d{4})$/;
	return re.test(input_str);
};

export { validateEmail, maskPhoneNumber, validatePhoneNumber };
