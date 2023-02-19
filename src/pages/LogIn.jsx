import "../assets/scss/_login.scss"
import {A } from "@solidjs/router";
export default function LogIn() {

  return (
	<div class='login-form'>
		<div class='-container'>
			<div class='-text'>Login</div>
			<input class='-input'/>
			<div class='-text'>Password</div>
			<input class='-input' type="password"/>
			  <A class='-link logo' href='/cabinet'>
				  <button class="-button">Login</button>
			  </A>
			
		</div>
	</div>
  )
}
