import "../assets/scss/_cabinet.scss"

export default function Cabinet() {
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
							350
						</div>
					</div>
					<div class="-item">
						<div class="-text">
							Water level (mm)
						</div>
						<div class="-text xl">
							50
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
}
