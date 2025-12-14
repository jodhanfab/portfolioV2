<script lang="ts">
	import type { Experience } from '../../util/types';
	import experiences from '../../util/experiences.json';
	import { onMount } from 'svelte';
	import Tooltip from '../atoms/Tooltip.svelte';

	let experienceData: Experience[] = experiences as Experience[];
	let visibleCards: boolean[] = [];
	let hoveredIndex: number | null = null;

	onMount(() => {
		visibleCards = experienceData.map(() => false);
		
		experienceData.forEach((_, index) => {
			setTimeout(() => {
				visibleCards[index] = true;
				visibleCards = [...visibleCards];
			}, index * 200);
		});
	});

	function formatDate(date: string): string {
		if (date === 'Present') return date;
		const d = new Date(date);
		return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
	}

	function calculateDuration(startDate: string, endDate: string): string {
		const start = new Date(startDate);
		const end = endDate === 'Present' ? new Date() : new Date(endDate);
		const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
		const years = Math.floor(months / 12);
		const remainingMonths = months % 12;
		
		if (years === 0) return `${months} month${months !== 1 ? 's' : ''}`;
		if (remainingMonths === 0) return `${years} year${years !== 1 ? 's' : ''}`;
		return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
	}
</script>

<section class="wrapper" id="experience">
	<div class="title">
		<h2 class="text-5xl"><span class="text-[#d7714b]">Work</span> Experience</h2>
	</div>

	<div class="experiences-grid">
		{#if experienceData}
			{#each experienceData as experience, index}
				<div 
					class="experience-item" 
					class:visible={visibleCards[index]}
					role="article"
					on:mouseenter={() => hoveredIndex = index}
					on:mouseleave={() => hoveredIndex = null}
				>
					<!-- Animated background gradient -->
					<div class="gradient-bg"></div>
					
					<!-- Floating orb effect -->
					<div class="orb orb-1"></div>
					<div class="orb orb-2"></div>

					<!-- Timeline indicator -->
					<div class="timeline-indicator">
						<div class="timeline-dot-main">
							<div class="dot-pulse"></div>
							<div class="dot-core"></div>
						</div>
						{#if index < experienceData.length - 1}
							<div class="timeline-line"></div>
						{/if}
					</div>

					<!-- Main content wrapper -->
					<div class="content-wrapper">
						<!-- Left side - Date and Duration -->
						<div class="left-panel">
							<div class="date-display">
								<div class="date-start">{formatDate(experience.startDate)}</div>
								<div class="date-arrow">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<path d="M5 12h14M12 5l7 7-7 7"/>
									</svg>
								</div>
								<div class="date-end">{formatDate(experience.endDate)}</div>
							</div>
							<div class="duration-pill">
								{calculateDuration(experience.startDate, experience.endDate)}
							</div>
						</div>

						<!-- Right side - Main content -->
						<div class="right-panel">
							<!-- Header -->
							<div class="experience-header">
								<div class="header-content">
									{#if experience.companyUrl}
										<a href={experience.companyUrl} target="_blank" rel="noreferrer" class="company-link">
											<h3 class="position">{experience.position}</h3>
											<h4 class="company">{experience.company}</h4>
										</a>
									{:else}
										<div>
											<h3 class="position">{experience.position}</h3>
											<h4 class="company">{experience.company}</h4>
										</div>
									{/if}
									<div class="location-tag">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
											<circle cx="12" cy="10" r="3"></circle>
										</svg>
										<span>{experience.location}</span>
									</div>
								</div>
							</div>

							<!-- Description -->
							<div class="experience-description">
								<ul>
									{#each experience.description as bullet}
										<li>
											<span class="bullet-line"></span>
											<span class="bullet-text">{bullet}</span>
										</li>
									{/each}
								</ul>
							</div>

							<!-- Technologies -->
							<div class="experience-tech">
								{#each experience.technologies as tech}
									<Tooltip tip={tech}>
										<span class="tech-badge">{tech}</span>
									</Tooltip>
								{/each}
							</div>
						</div>
					</div>

					<!-- Decorative corner accent -->
					<div class="corner-accent"></div>
				</div>
			{/each}
		{:else}
			<div class="experience-item shimmer" />
			<div class="experience-item shimmer" />
		{/if}
	</div>
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	.title {
		display: flex;
		justify-content: center;
		margin-top: 3rem;
		margin-bottom: 4rem;

		@media (max-width: 868px) {
			justify-content: left;
			margin-bottom: 3rem;
		}
	}

	h2 {
		display: inline-block;
		margin-bottom: 2rem;
	}

	.experiences-grid {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 4rem;
		margin-bottom: 5rem;

		@media (max-width: 868px) {
			gap: 3rem;
			margin-bottom: 4rem;
		}
	}

	.experience-item {
		position: relative;
		opacity: 0;
		transform: translateY(30px) scale(0.95);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
		perspective: 1000px;

		&.visible {
			opacity: 1;
			transform: translateY(0) scale(1);
		}

		&:hover {
			transform: translateY(-5px) scale(1.01);
			
			.gradient-bg {
				opacity: 0.15;
				transform: scale(1.1);
			}

			.orb {
				opacity: 0.6;
				transform: scale(1.2);
			}

			.timeline-dot-main {
				transform: scale(1.2);
				
				.dot-pulse {
					animation: pulse 2s ease-in-out infinite;
				}
			}

			.corner-accent {
				opacity: 1;
				transform: translate(0, 0);
			}

			.content-wrapper {
				transform: translateZ(20px);
			}
		}
	}

	.gradient-bg {
		position: absolute;
		inset: -20px;
		background: radial-gradient(
			circle at 30% 50%,
			rgba(215, 113, 75, 0.15) 0%,
			rgba(215, 113, 75, 0.05) 40%,
			transparent 70%
		);
		border-radius: 24px;
		opacity: 0;
		transition: all 0.6s var(--bezier-one);
		pointer-events: none;
		z-index: 0;
	}

	.orb {
		position: absolute;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(215, 113, 75, 0.3), transparent);
		filter: blur(40px);
		opacity: 0;
		transition: all 0.8s var(--bezier-one);
		pointer-events: none;
		z-index: 0;

		&.orb-1 {
			width: 200px;
			height: 200px;
			top: -50px;
			right: -50px;
		}

		&.orb-2 {
			width: 150px;
			height: 150px;
			bottom: -30px;
			left: -30px;
		}
	}

	.timeline-indicator {
		position: absolute;
		left: 0;
		top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 10;
		width: 20px;
		height: calc(100% - 2rem);

		@media (max-width: 868px) {
			left: -1rem;
			width: 16px;
		}
	}

	.timeline-dot-main {
		position: relative;
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.4s var(--bezier-one);

		@media (max-width: 868px) {
			width: 16px;
			height: 16px;
		}
	}

	.dot-pulse {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 2px solid var(--orange);
		opacity: 0.4;
	}

	.dot-core {
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--orange);
		box-shadow: 0 0 20px rgba(215, 113, 75, 0.6);

		@media (max-width: 868px) {
			width: 8px;
			height: 8px;
		}
	}

	.timeline-line {
		width: 2px;
		flex: 1;
		margin-top: 1.5rem;
		background: linear-gradient(
			to bottom,
			var(--orange),
			rgba(215, 113, 75, 0.3),
			transparent
		);
		opacity: 0.4;
		min-height: 4rem;
	}

	.content-wrapper {
		position: relative;
		display: flex;
		gap: 3rem;
		padding: 3rem;
		margin-left: 4rem;
		background: rgba(33, 28, 28, 0.4);
		backdrop-filter: blur(20px);
		border: 1px solid rgba(215, 113, 75, 0.1);
		border-radius: 20px;
		transition: all 0.5s var(--bezier-one);
		overflow: hidden;
		z-index: 1;

		@media (max-width: 868px) {
			margin-left: 0;
		}

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(
				135deg,
				rgba(215, 113, 75, 0.05) 0%,
				transparent 50%,
				rgba(215, 113, 75, 0.02) 100%
			);
			opacity: 0;
			transition: opacity 0.5s var(--bezier-one);
			pointer-events: none;
		}

		.experience-item:hover &::before {
			opacity: 1;
		}

		@media (max-width: 868px) {
			flex-direction: column !important;
			padding: 2rem;
			gap: 2rem;
		}
	}

	.left-panel {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		min-width: 200px;
		flex-shrink: 0;

		@media (max-width: 868px) {
			min-width: auto;
		}
	}

	.date-display {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-family: var(--font-two);
	}

	.date-start,
	.date-end {
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--white-two);
		letter-spacing: 0.5px;
	}

	.date-arrow {
		color: var(--orange);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.25rem 0;
		opacity: 0.6;

		svg {
			width: 18px;
			height: 18px;
		}
	}

	.duration-pill {
		font-family: var(--font-two);
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--orange);
		padding: 0.5rem 1rem;
		background: rgba(215, 113, 75, 0.1);
		border: 1px solid rgba(215, 113, 75, 0.2);
		border-radius: 12px;
		backdrop-filter: blur(10px);
		text-align: center;
		letter-spacing: 0.5px;
		transition: all 0.3s var(--bezier-one);

		.experience-item:hover & {
			background: rgba(215, 113, 75, 0.15);
			border-color: rgba(215, 113, 75, 0.3);
			transform: translateY(-2px);
		}
	}

	.right-panel {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.experience-header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.header-content {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.position {
		margin: 0;
		font-size: 1.75rem;
		font-weight: 600;
		line-height: 1.2;
		color: var(--orange);
		transition: all 0.3s var(--bezier-one);
		background: linear-gradient(135deg, var(--orange), rgba(215, 113, 75, 0.8));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;

		@media (max-width: 868px) {
			font-size: 1.5rem;
		}
	}

	.company {
		margin: 0;
		font-size: 1.2rem;
		font-weight: 500;
		color: var(--white);
		line-height: 1.3;

		@media (max-width: 868px) {
			font-size: 1.1rem;
		}
	}

	.company-link {
		text-decoration: none;
		color: inherit;
		display: block;
		transition: transform 0.3s var(--bezier-one);

		&:hover {
			transform: translateX(5px);

			.position {
				background: linear-gradient(135deg, var(--white), var(--orange));
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
			}
		}
	}

	.location-tag {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--font-two);
		font-size: 0.85rem;
		color: var(--white-two);
		padding: 0.4rem 0.8rem;
		background: rgba(215, 113, 75, 0.08);
		border-radius: 8px;
		width: fit-content;

		svg {
			stroke: var(--orange);
			opacity: 0.7;
		}
	}

	.experience-description {
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		li {
			display: flex;
			align-items: flex-start;
			gap: 1rem;
			color: var(--white-two);
			font-size: 1rem;
			line-height: 1.8;
			position: relative;
			padding-left: 1.5rem;

			@media (max-width: 868px) {
				font-size: 0.95rem;
				gap: 0.75rem;
				padding-left: 1.25rem;
			}
		}
	}

	.bullet-line {
		position: absolute;
		left: 0;
		top: 0.75rem;
		width: 12px;
		height: 2px;
		background: linear-gradient(90deg, var(--orange), transparent);
		border-radius: 2px;
		transition: all 0.3s var(--bezier-one);

		.experience-item:hover li:hover & {
			width: 20px;
			background: linear-gradient(90deg, var(--orange), rgba(215, 113, 75, 0.5));
		}
	}

	.bullet-text {
		flex: 1;
	}

	.experience-tech {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(215, 113, 75, 0.1);
	}

	.tech-badge {
		font-weight: 400;
		font-family: var(--font-two);
		font-size: 0.8rem;
		background: rgba(33, 28, 28, 0.6);
		backdrop-filter: blur(10px);
		border-radius: 8px;
		color: var(--orange);
		padding: 0.4rem 0.85rem;
		display: inline-block;
		transition: all 0.3s var(--bezier-one);
		border: 1px solid rgba(215, 113, 75, 0.15);
		position: relative;
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(135deg, rgba(215, 113, 75, 0.1), transparent);
			opacity: 0;
			transition: opacity 0.3s var(--bezier-one);
		}

		&:hover {
			background: rgba(215, 113, 75, 0.15);
			border-color: rgba(215, 113, 75, 0.4);
			transform: translateY(-3px) scale(1.05);
			box-shadow: 0 8px 20px rgba(215, 113, 75, 0.2);

			&::before {
				opacity: 1;
			}
		}
	}

	.corner-accent {
		position: absolute;
		top: 0;
		right: 0;
		width: 60px;
		height: 60px;
		border-top: 2px solid var(--orange);
		border-right: 2px solid var(--orange);
		border-top-right-radius: 20px;
		opacity: 0;
		transform: translate(10px, -10px);
		transition: all 0.5s var(--bezier-one);
		pointer-events: none;
		z-index: 2;

		&::before {
			content: '';
			position: absolute;
			top: -2px;
			right: -2px;
			width: 20px;
			height: 20px;
			background: radial-gradient(circle, var(--orange), transparent);
			filter: blur(8px);
			opacity: 0.6;
		}
	}

	.shimmer {
		animation-duration: 2.2s;
		animation-fill-mode: forwards;
		animation-iteration-count: infinite;
		animation-name: shimmer;
		animation-timing-function: linear;
		background: linear-gradient(
			to right,
			var(--neutral-two) 8%,
			var(--neutral-one) 18%,
			var(--neutral-two) 33%
		);
		background-size: 1200px 100%;
		min-height: 300px;
		border-radius: 20px;
	}

	@keyframes shimmer {
		0% {
			background-position: -1200px 0;
		}
		100% {
			background-position: 1200px 0;
		}
	}

	@keyframes pulse {
		0%, 100% {
			transform: scale(1);
			opacity: 0.4;
		}
		50% {
			transform: scale(1.5);
			opacity: 0.1;
		}
	}
</style>

