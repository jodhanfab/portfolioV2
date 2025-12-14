<script lang="ts">
	import technologies from '../../util/technologies.json'
</script>

<section class="wrapper">
	<div class="title mt-[5rem] md:mt-[10rem] mb-[1.5rem] md:mb-[3rem]">
		<h2 class="text-5xl"><span class="text-[#d7714b]">Tech Stack</span> Worked With</h2>
	</div>

	<div class="tech-stack mb-[6rem] md:mb-[10rem]">
		{#each technologies as { name, icon }}
			<div class="tech">
				<img src={icon} alt={name}  class="hover:scale-110 transition-all duration-300"/>
				<h6>{name}</h6>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.title {
		display: flex;
		flex-direction: column;
		align-items: center;

		@media (max-width: 868px) {
			align-items: normal;
		}
	}

	.tech {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.tech-stack {
		justify-content: center;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}

	img {
		height: 64px;
		width: 64px;
	}
</style>
