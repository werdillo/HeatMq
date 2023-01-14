import { Outlet, A } from "@solidjs/router";
import "../assets/scss/_layout.scss";
import logo from "../assets/images/logo.svg";

export default function Layout() {
	return (
		<>
			<div id="container">
				<header id="header-content">
					<div class='nav'>
						<A class='-link logo' href=''>
							<img src={logo} />
						</A>
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