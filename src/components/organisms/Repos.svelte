<script lang="ts">
	import type { Repo } from '../../util/types';
	import BorderBeam from '../molecules/BorderBeam.svelte';

	let repos: Repo[] = [{
		description: 'A website for creating AI generated images using OPEN AI and share to the community',
		forks: 1,
		language: 'MERN, Tailwind, Stable Diffusion, Cloudinary',
		languageColor: 'red',
		name: 'AIR-IMG',
		owner: 'jodhan-techinject',
		stars: 5,
		url: 'https://github.com/jodhan-techinject/AirIMG'
	}, {
		description: 'Map Nest is an interactive map-focused web application designed to explore various geographic and architectural data across different locations. ',
		forks: 4,
		language: 'Map Libre, Svelte-Kit, Tailwind, TypeScript',
		languageColor: 'purple',
		name: 'MAP NEST',
		owner: 'jodhan-techinject',
		stars: 3,
		url: 'https://github.com/jodhan-techinject/map-nest'
	}, {
		description: 'Wifi-deauther using esp8266 board and arduino IDE',
		forks: 0,
		language: 'C, C++',
		languageColor: 'blue',
		name: 'Wifi Deauther Esp8266',
		owner: 'jodhan-techinject',
		stars: 2,
		url: 'https://github.com/jodhan-techinject/wifi-deauther-esp8266'
	}, {
		description: 'Simple Tic Tac Toe using vanilla JS',
		forks: 1,
		language: 'JS, HTML, CSS',
		languageColor: 'green',
		name: 'TIC TAC TOE',
		owner: 'jodhan-techinject',
		stars: 0,
		url: 'https://github.com/jodhan-techinject/tic-toc-toe'
	}];
</script>

<section class="wrapper" id="code">
	<div class="title">
		<h2 class="text-5xl"><span>coded</span>:projects</h2>
	</div>
	<div class="grid mb-[5rem] md:mb-[10rem] !gap-6">
		{#if repos}
			{#each repos as { name, description, owner, forks, stars, language, languageColor, url }, index}
				<a href={url} target="_blank" rel="noreferrer">
					<div class="repo-card relative">
						<BorderBeam size={100} duration={10} delay={index > 0 ? 0 : -5} />
						<div id="top-part">
							<div class="info !gap-4">
								<img
									src="/icons/github.svg"
									alt="github"
									id="pfp"
								/>
								<h6>{owner}</h6>
							</div>
							<div>
								<img src="icons/open.svg" alt="open in new tab" id="open" />
							</div>
						</div>
						<div>
							<h3 class="py-2 text-orange-300">{name}</h3>
							<h6>{description}</h6>
						</div>
						<div class="flex justify-between items-center info-container pt-4">
							<div class="info ">
								<span class="dot  mr-3" style="background-color: {languageColor}" />
								<h2 class=" italic !mb-0">{language}</h2>
							</div>
							<div class="flex gap-4">
								<div class="info">
									{#if stars}
										<img src="icons/star.svg" id="star" alt="star" />
										<h6>{stars}</h6>
									{/if}
								</div>
								<div class="info">
									{#if forks}
										<img src="icons/fork.svg" id="fork" alt="fork" />
										<h6>{forks}</h6>
									{/if}
								</div>
							</div>
						</div>
					</div>
				</a>
			{/each}
		{:else}
			<div class="repo-card shimmer" />
			<div class="repo-card shimmer" />
			<div class="repo-card shimmer" />
			<div class="repo-card shimmer" />
		{/if}
	</div>
</section>

<style lang="scss">
  @import '../../styles/mixins.scss';

  .title {
    display: flex;
    justify-content: center;
    margin-top: 3rem;

    @media (max-width: 868px) {
      justify-content: left;
    }
  }

  .repo-card {
    padding: 1rem 1.25rem;
    background-color: var(--neutral-two);
    border-radius: 8px;
    min-height: 140px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    transition: transform 0.3s var(--bezier-one), box-shadow 0.3s var(--bezier-one);
    justify-content: space-between;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-blend-mode: overlay;
    border: 1px solid var(--neutral-four);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0px 15px 25px -10px rgba(0, 0, 0, 0.25);

      #open {
        filter: brightness(1.3);
      }
    }
  }

  .shimmer {
    animation-duration: 2.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: shimmer;
    animation-timing-function: linear;
    background: #ddd;
    background: linear-gradient(
                    to right,
                    var(--neutral-two) 8%,
                    var(--neutral-one) 18%,
                    var(--neutral-two) 33%
    );
    background-size: 1200px 100%;
  }

  @keyframes shimmer {
    0% {
      background-position: -1200px 0;
    }
    100% {
      background-position: 1200px 0;
    }
  }

  a {
    text-decoration: none;
    color: var(--white);
    height: 100%;
    border-radius: 8px;
  }

  img {
    height: 16px;
    width: auto;
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
  }

  #star {
    transform: translateY(-1px);
  }

  #fork {
    height: 17px;
  }

  #pfp {
    border-radius: 50%;
    height: 16px;
  }

  #top-part {
    display: flex;
    justify-content: space-between;
  }

  #open {
    height: 20px;
    transition: filter 0.3s var(--bezier-one);
  }

  span {
    color: var(--orange);
  }

  .grid {
    gap: 0.8rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;

    &:before {
      @include outlineText($content: 'λ', $translateX: 1150%, $translateY: -30%);
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 868px) {
      margin-bottom: 2rem;
    }
  }

  .dot {
    height: 11px;
    width: 11px;
    border-radius: 50%;
    display: inline-block;
  }

  .info {
    display: flex;
    gap: 0.2rem;
    align-items: center;

    &-container {
      display: flex;
      gap: 0.9rem;
    }
  }
</style>
