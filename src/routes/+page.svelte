<script>
	import NavHost from '../components/molecules/NavHost.svelte';
	import Hero from '../components/organisms/Hero.svelte';
	import About from '../components/organisms/About.svelte';
	import Technologies from '../components/organisms/Technologies.svelte';
	import Experience from '../components/organisms/Experience.svelte';
	import WebCollaboration from '../components/organisms/WebCollaboration.svelte';
	import Repos from '../components/organisms/Repos.svelte';
	import Publications from '../components/organisms/Publications.svelte';
	import Footer from '../components/molecules/Footer.svelte';
</script>

<NavHost />
<main >
	<Hero />
	<About />
	<Technologies />
	<Experience />
	<WebCollaboration />
	<Repos />
	<Publications />
	<Footer />
</main>
