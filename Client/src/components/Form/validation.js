const validation = (userData) => {
	const error = {};
	const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	const validPassword = /^(?=.*\d).{6,10}$/;
	console.log(userData);

	// if (!userData.email) {
	//   error.email = "Empty email";
	// } else
	if (userData.email.length > 35) {
		error.email = 'Cannot exceed 35 characters';
	} else if (!validEmail.test(userData.email)) {
		error.email = 'Invalid email';
	} else {
		error.email = '';
	}

	// if (!userData.password) {
	//   error.password = "Empty password";
	// } else
	if (!validPassword.test(userData.password)) {
		error.password = 'Password at least 6 characters and 1 number';
	} else {
		error.password = '';
	}
	return error;
};

export default validation;
