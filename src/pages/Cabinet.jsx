import { createSignal } from "solid-js"
import "../assets/scss/_cabinet.scss"

export default function Cabinet() {
	const [lux, setLux] = createSignal(350);
	const start = '8:30';
	const end = '18:30';


	const plus = () => setLux(lux() + 10);
	const minus = () => setLux(lux() - 10);

	

	return <>
		<div class='cabinet'>
			<div class='-container'>
				<div class="-grid">
					<div class="-item">
						<div class="-text">
							Temperature
						</div>
						<div class="-text xl">
							26c
						</div>
					</div>
					<div class="-item">
						<div class="-text">
							Wifi
						</div>
						<div class="-text xl">
							75%
						</div>
					</div>
					<div class="-item">
						<div class="-text">
							LUX
						</div>
						<div class="-text xl">
							{lux}
						</div>
					</div>
					<div class="-item">
						<div class="-text">
							Water level
						</div>
						<div class="-text xl">
							50
						</div>
					</div>
				</div>
				<div class='-light-settings'>
					<div class='-item'>
						<div class='-title'>Set light working time</div> 
						<div class='-timer'>
							<input class="-input" value={start}/>
							<div class="-txt">-</div>
							<input class="-input" value={end} />
						</div>
					</div>
					<div class='-item'>
						<div class='-title'>Set lights power (+-10 lux )</div> 
						<div class='-lux'>
							<button class="-btn" onClick={minus}>-</button>
							<div class="-txt">{lux}</div>
							<button class="-btn" onClick={plus}>+</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
}
