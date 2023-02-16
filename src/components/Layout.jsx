import { Outlet, A } from "@solidjs/router";
import "../assets/scss/_layout.scss";
import logo from "../assets/images/logo_white.svg";
import { useLocation } from "@solidjs/router";

export default function Layout() {	
	const location = useLocation();
	return (
		<>
			<div class={location.pathname === "/cabinet" ? "container cabinet" : "container" }>
				<header id="header-content">
					<div class='nav'>
						<div class='-item left'>
						</div>
						<div class='-item'>
							<A class='-link logo' href=''>
								<img src={logo} /> 
							</A>
						</div>
						<div class='-item right'>
							<A class='-link' href='/sign-in'>sign in</A>
							<A class='-link btn' href='/log-in'>Log in</A>
						</div>
					</div>
				</header>
				<main id="main-content">
					<Outlet />
				</main>
				<footer class='footer'>
					<div>© Heat Mq {new Date().getFullYear()}</div>
				</footer>
			</div>
		</>

	)
}