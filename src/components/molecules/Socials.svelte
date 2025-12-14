<script>
	import Social from '../atoms/Social.svelte';
</script>

<div class="socials-container">
	<Social icon="github.svg" tip="Jodhansajifab" link="https://github.com/jodhanfab" />
	<Social icon="linkedin.svg" tip="jodhansaji" link="https://www.linkedin.com/in/jodhansaji/?originalSubdomain=in" />
	<Social icon="email.svg" tip="jodhan.saji@gmail.com" link="mailto:jodhan.saji@gmail.com" />
	<Social icon="resume.png" tip="resume-jodhan" link="/pdfs/resume.pdf" />
</div>

<style>
	.socials-container {
		display: flex;
		gap: 0.75rem;
	}
</style>
