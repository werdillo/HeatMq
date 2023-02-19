import "../assets/scss/_login.scss"
import { A } from "@solidjs/router";


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
				<A class='-link logo' href='/cabinet'>
					<button class="-button">Register</button>
				</A>
			</div>
		</div>
	)
}
