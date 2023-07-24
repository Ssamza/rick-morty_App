import { useState } from 'react';
import style from './Form.module.css';
import validation from './validation';

export default function Form({ login }) {
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({
		email: '',
		password: '',
	});

	const handleInputChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		setUserData({ ...userData, [property]: value });
		setErrors(validation({ ...userData, [property]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		login(userData);
	};

	return (
		<div>
			<div className={style.titulo}>
				<span>Rick & Morty App</span>
			</div>
			<div className={style.formBackg}>
				<div className={style.formContainer}>
					<form onSubmit={handleSubmit}>
						<div className={style.labelEmail}>
							<label htmlFor='email'>Email:</label>
							<input
								className={style.inputEmail}
								type='text'
								name='email'
								onChange={handleInputChange}
							/>
						</div>
						<span className={style.error}>{errors.email}</span>
						<br />
						<div className={style.labelPassword}>
							<label htmlFor='password'>Password:</label>
							<input
								className={style.inputPassword}
								type='text'
								name='password'
								onChange={handleInputChange}
							/>
						</div>
						<span className={style.error}>{errors.password}</span>
						<br />
						<div className={style.loginContainer}>
							<button className={style.loginButton} type='submit'>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
