<script lang="ts">
	import type { Experience } from '../../util/types';
	import experiences from '../../util/experiences.json';
	import { onMount } from 'svelte';
	import Tooltip from '../atoms/Tooltip.svelte';
	import RetroGrid from '../molecules/RetroGrid.svelte';

	let experienceData: Experience[] = experiences as Experience[];
	let visibleCards: boolean[] = [];

	onMount(() => {
		visibleCards = experienceData.map(() => false);
		experienceData.forEach((_, index) => {
			setTimeout(() => {
				visibleCards[index] = true;
				visibleCards = [...visibleCards];
			}, index * 150);
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
		const months =
			(end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
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
		{#each experienceData as experience, index}
			<div class="experience-item" class:visible={visibleCards[index]}>
				<div class="timeline">
					<div class="timeline-dot"></div>
					{#if index < experienceData.length}
						<div class="timeline-line"></div>
					{/if}
				</div>

				<div class="relative !w-full">
					<RetroGrid />
					<div class="content max-md:!flex-col-reverse w-full">
						<div class="date-section">
							<div class="flex gap-1 items-center text-white">
								<span>{formatDate(experience.startDate)}</span>
								<span class="text-[#d7714b] pb-2">→</span>
								<span>{formatDate(experience.endDate)}</span>
							</div>
							<div class="duration">
								{calculateDuration(experience.startDate, experience.endDate)}
							</div>
						</div>

						<div class="details">
							<div class="header">
								{#if experience.companyUrl}
									<a
										href={experience.companyUrl}
										target="_blank"
										rel="noreferrer"
										class="company-link"
									>
										<h3>{experience.position}</h3>
										<h4>{experience.company}</h4>
									</a>
								{:else}
									<div>
										<h3>{experience.position}</h3>
										<h4>{experience.company}</h4>
									</div>
								{/if}
								<div class="location">
									<span>{experience.location}</span>
								</div>
							</div>

							<ul class="description">
								{#each experience.description as bullet}
									<li>{bullet}</li>
								{/each}
							</ul>

							<div class="technologies">
								{#each experience.technologies as tech}
									<Tooltip tip={tech}>
										<span class="tech-badge">{tech}</span>
									</Tooltip>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
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
		display: flex;
		flex-direction: column;
		gap: 3rem;
		margin-bottom: 5rem;

		@media (max-width: 868px) {
			gap: 2.5rem;
			margin-bottom: 4rem;
		}
	}

	.experience-item {
		position: relative;
		display: flex;
		gap: 2rem;
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.5s ease,
			transform 0.5s ease;

		&.visible {
			opacity: 1;
			transform: translateY(0);
		}

		@media (max-width: 868px) {
			flex-direction: column;
			gap: 1.5rem;
		}
	}

	.timeline {
		@media (max-width: 868px) {
			display: none !important;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-shrink: 0;
	}

	.timeline-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--orange);
		border: 2px solid var(--orange);
		box-shadow: 0 0 10px rgba(215, 113, 75, 0.5);
	}

	.timeline-line {
		width: 2px;
		flex: 1;
		margin-top: 0.5rem;
		background: linear-gradient(to bottom, var(--orange), transparent);
		opacity: 0.3;
		min-height: 3rem;
	}

	.content {
		flex: 1;
		display: flex;
		gap: 2rem;
		padding: 2rem;
		border: 1px solid rgba(215, 113, 75, 0.1);
		border-radius: 12px;
		transition: border-color 0.3s ease;

		&:hover {
			border-color: rgba(215, 113, 75, 0.3);
		}

		@media (max-width: 868px) {
			flex-direction: column;
			padding: 1.5rem;
			gap: 1.5rem;
		}
	}

	.date-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-width: 180px;
		flex-shrink: 0;

		@media (max-width: 868px) {
			min-width: auto;
		}
	}

	.duration {
		font-family: var(--font-two);
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--orange);
		padding: 0.5rem 1rem;
		background: rgba(215, 113, 75, 0.1);
		border: 1px solid rgba(215, 113, 75, 0.2);
		border-radius: 8px;
		text-align: center;
	}

	.details {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.header {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	h3 {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--orange);

		@media (max-width: 868px) {
			font-size: 1.25rem;
		}
	}

	h4 {
		margin: 0;
		font-size: 1.1rem;
		font-weight: 500;
		color: var(--white);

		@media (max-width: 868px) {
			font-size: 1rem;
		}
	}

	.company-link {
		text-decoration: none;
		color: inherit;
		transition: transform 0.2s ease;

		&:hover {
			transform: translateX(3px);
		}
	}

	.location {
		font-family: var(--font-two);
		font-size: 0.85rem;
		color: var(--white-two);
	}

	.description {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		color: var(--white-two);
		line-height: 1.6;

		li {
			padding-left: 1.25rem;
			position: relative;

			&::before {
				content: '•';
				position: absolute;
				left: 0;
				color: var(--orange);
			}
		}
	}

	.technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(215, 113, 75, 0.1);
	}

	.tech-badge {
		font-family: var(--font-two);
		font-size: 0.8rem;
		color: var(--orange);
		padding: 0.4rem 0.75rem;
		background: rgba(33, 28, 28, 0.6);
		border: 1px solid rgba(215, 113, 75, 0.15);
		border-radius: 6px;
		transition: all 0.2s ease;

		&:hover {
			background: rgba(215, 113, 75, 0.15);
			border-color: rgba(215, 113, 75, 0.3);
		}
	}
</style>
