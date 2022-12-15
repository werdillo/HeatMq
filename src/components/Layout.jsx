import { Outlet, A } from "@solidjs/router";
import { createSignal } from "solid-js";

import "../assets/scss/_layout.scss"

export default function Layout() {
	const [year, setYear] = createSignal('2022');
	return (
		<div id="container">
			<header id="header-content">
				<div class='nav'>
					<A class='-link logo' href=''>HEAT</A>
					<A class='-link' href='about'>about</A>
					<A class='-link' href='about'>about</A>
				</div>
			</header>
			<main id="main-content">
				<Outlet />
			</main>
			<footer class='footer'>
				<div>{year}</div>
			</footer>
		</div>
	)
}