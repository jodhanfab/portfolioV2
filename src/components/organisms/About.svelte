<script>
	// import Terminal from '../molecules/Terminal.svelte';
	import Tooltip from '../atoms/Tooltip.svelte';
	// import Globe from '../molecules/Globe.svelte';
	import OrdbitingCirclesGroup from '../molecules/OrdbitingCirclesGroup.svelte';

	let getAge = () => {
		let birthDate = new Date('2000/09/15');
		const ageMs = Date.now() - birthDate.getTime();
		return (ageMs / 31536000000).toFixed(10);
	};

	let age = getAge();
	setInterval(() => {
		age = getAge();
	}, 1000);
</script>

<section id="about" class="wrapper">
	<!--	<div class="terminal">-->
	<!--		<Terminal />-->
	<!--	</div>-->
	<div class="circles">
		<OrdbitingCirclesGroup />
	</div>
	<div class="text">
		<h2>bio</h2>
		<p>
			Hi, I’m <strong>Jodhan Saji </strong>
			(<Tooltip tip="I'm {age} years old">
				<span>{Math.floor(Number(age))}</span>
			</Tooltip>) — a <strong>Software Engineer</strong>
			with experience building modern web applications using
			<strong> Next.js, Svelte, TypeScript, Firebase, and Node.js</strong>. I hold a degree in
			Computer Science and Engineering from
			<Tooltip tip="Lovely Professional University">
				<a href="https://www.lpu.in/" target="_blank" rel="noreferrer">
					<span> LPU</span>
				</a>
			</Tooltip>. Currently, I work at
			<Tooltip tip="TalkingLands">
				<a href="https://www.talkinglands.com/" target="_blank" rel="noreferrer">
					<span> TalkingLands</span>
				</a>
			</Tooltip>, a prop-tech product company, where I specialize in building
			<strong> map-driven and geospatial web applications</strong> using
			<strong> MapLibre, Leaflet, Mapbox, Next.js, GeoJSON, and Turf.js</strong> to deliver property
			intelligence and location-based insights at scale.
		</p>
	</div>
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	.circles {
		display: block;
	}

	section {
		margin-bottom: 6rem;
		display: grid;
		gap: 4.5rem;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}

	.text {
		position: relative;
		line-height: 1.75rem;
	}

	span {
		font-weight: 400;
		font-family: var(--font-two);
		font-size: 0.9rem;
		background-color: var(--neutral-one);
		border-radius: 7px;
		color: var(--orange);
		padding: 0.2rem 0.5rem 0.2rem;
		width: fit-content;
	}

	a {
		text-decoration: none;
	}

	.text::before {
		@include outlineText(
			$content: 'JOD',
			$translateX: 97%,
			$translateY: -5%,
			$fontSize: 250px,
			$opacity: 0.22
		);
	}

	h2 {
		display: none;
		margin-top: 1rem;
	}

	@media (max-width: 868px) {
		.circles {
			display: none;
		}

		section {
			display: flex;
			flex-direction: column;
			align-items: normal;
		}

		h2 {
			display: block;
			margin-bottom: 1rem;
		}
	}
</style>
