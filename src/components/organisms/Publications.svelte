<script lang="ts">
	import type { Publication } from '../../util/types';

	// Since you only have one publication, you can customize this data
	let publication: Publication = {
		title: 'A Review Paper on Serverless Architecture of Web Applications',
		authors: ['Jodhan Saji', 'Ashish Kumar'],
		venue: 'KILBY 100 7th International Conference on Computing Sciences',
		year: '2024',
		description:
			'A comprehensive review analyzing serverless architecture for web applications, exploring its evolution, architecture, key characteristics, and use cases. The study examines cost-efficient deployment benefits including scalability, reliability, and performance, while addressing challenges such as limited infrastructure control and debugging complexity.',
		url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4495958'
	};
</script>

<section class="wrapper" id="publications">
	<div class="title">
		<h2 class="text-5xl"><span class="text-[#d7714b]">Research</span> Publications</h2>
	</div>

	<div class="publication-container">
		<div class="publication-card">
			<div class="publication-header">
				{#if publication.url}
					<a href={publication.url} target="_blank" rel="noreferrer" class="publication-link">
						<h3 class="publication-title">{publication.title}</h3>
					</a>
				{:else}
					<h3 class="publication-title">{publication.title}</h3>
				{/if}
			</div>

			<div class="publication-authors">
				{#each publication.authors as author, index}
					<span class="author">
						{author}
						{#if index < publication.authors.length - 1}
							<span class="separator">,</span>
						{/if}
					</span>
				{/each}
			</div>

			<div class="publication-meta">
				<div class="meta-item">
					<span class="meta-label">Venue:</span>
					<span class="meta-value">{publication.venue}</span>
				</div>
				<div class="meta-item">
					<span class="meta-label">Year:</span>
					<span class="meta-value">{publication.year}</span>
				</div>
			</div>

			{#if publication.description}
				<p class="publication-description">{publication.description}</p>
			{/if}

			{#if publication.url}
				<div class="publication-footer">
					<a href={publication.url} target="_blank" rel="noreferrer" class="read-more">
						<span>Read Paper</span>
						<img src="/icons/open.svg" alt="open in new tab" class="open-icon" />
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	.title {
		display: flex;
		justify-content: center;
		margin-top: 3rem;
		margin-bottom: 3rem;

		@media (max-width: 868px) {
			justify-content: left;
		}
	}

	.publication-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 6rem;
	}

	.publication-card {
		width: 100%;
		padding: 2.5rem;
		background-color: var(--neutral-two);
		border-radius: 12px;
		border: 1px solid var(--neutral-four);

		@media (max-width: 868px) {
			padding: 1.5rem;
		}
	}

	.publication-header {
		margin-bottom: 1rem;
	}

	.publication-title {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--white);
		line-height: 1.4;
		margin: 0;
		transition: color 0.3s var(--bezier-one);

		@media (max-width: 868px) {
			font-size: 1.25rem;
		}
	}

	.publication-link {
		text-decoration: none;
		color: inherit;

		&:hover .publication-title {
			color: var(--orange);
		}
	}

	.publication-authors {
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	.author {
		color: var(--white);
		font-size: 1rem;

		&:first-child {
			font-weight: 500;
			color: var(--orange);
		}
	}

	.separator {
		margin-right: 0.25rem;
	}

	.publication-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
		padding: 1rem;
		background-color: var(--neutral-one);
		border-radius: 8px;

		@media (max-width: 868px) {
			flex-direction: column;
			gap: 0.75rem;
		}
	}

	.meta-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.meta-label {
		color: var(--white);
		font-weight: 500;
		font-size: 0.9rem;
	}

	.meta-value {
		color: var(--orange);
		font-size: 0.9rem;
		font-family: var(--font-two);
	}

	.publication-description {
		color: var(--white);
		line-height: 1.7;
		margin-bottom: 1.5rem;
		font-size: 0.95rem;
		opacity: 0.9;
	}

	.publication-footer {
		display: flex;
		justify-content: flex-end;
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--neutral-four);
	}

	.read-more {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background-color: var(--neutral-one);
		border-radius: 8px;
		text-decoration: none;
		color: var(--white);
		font-size: 0.9rem;
		font-weight: 500;
		transition:
			background-color 0.3s var(--bezier-one),
			transform 0.2s var(--bezier-one);

		&:hover {
			background-color: var(--neutral-three);
			transform: translateX(4px);
		}

		span {
			color: var(--white);
		}
	}

	.open-icon {
		height: 16px;
		width: auto;
		transition: filter 0.3s var(--bezier-one);
	}
</style>
