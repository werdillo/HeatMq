import { Outlet, A } from "@solidjs/router";
import "../assets/scss/_layout.scss"

export default function Layout() {
	return (
		<>
			<div id="container">
				<header id="header-content">
					<div class='nav'>
						<A class='-link logo' href=''>HEAT</A>
						<A class='-link' href='/sign-in'>sign in</A>
						<A class='-link' href='/log-in'>log in</A>
					</div>
				</header>
				<main id="main-content">
					<Outlet />
				</main>
				<footer class='footer'>
					<div>{new Date().getFullYear()}</div>
				</footer>
			</div>
		</>

	)
}