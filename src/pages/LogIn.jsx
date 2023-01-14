import "../assets/scss/_login.scss"

export default function LogIn() {
  return (
	<div class='login-form'>
		<div class='-container'>
			<div class='-text'>Login</div>
			<input class='-input'/>
			<div class='-text'>Password</div>
			<input class='-input' type="password"/>
			<button class="-button">Login</button>
		</div>
	</div>
  )
}
