import "../assets/scss/_login.scss"

export default function SignIn() {
	return (
		<div class='login-form'>
			<div class='-container'>
				<div class='-text'>e-mail</div>
				<input class='-input' />
				<div class='-text'>password</div>
				<input class='-input' type="password" />
				<div class='-text'> repeat password</div>
				<input class='-input' type="password" />
				<button class="-button">Register</button>
			</div>
		</div>
	)
}
