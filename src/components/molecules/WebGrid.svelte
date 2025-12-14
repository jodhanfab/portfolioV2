<script>
	import Website from '../atoms/Website.svelte';
</script>

<div class="grid-container mb-[5rem] md:mb-[10rem]">
	<div class="grid">
		<Website wide technologies="Next JS, Mapbox, Turf.js, Tailwind" website="insights" websiteLink="https://insights.talkinglands.com/" websiteTitle="TL Insights" />
		<Website wide technologies="Next JS, Mapbox, Turf.js, Tailwind" website="discover" websiteLink="https://discover.talkinglands.com/" websiteTitle="TL Discover" />
		<Website tall technologies="React Native, Node.js, Express.js, postgresql" website="pill-up" websiteLink="https://www.pillup.com/" websiteTitle="Pill Up" />
		<Website technologies="Svelte Kit, Tailwind, Firebase" website="rameem" websiteLink="https://rameem.vercel.app/" websiteTitle="Rameem" />
		<Website shrink tall website="tech-inject" websiteLink="https://www.techinject.in/" websiteTitle="Tech Inject" technologies="Svelte Kit, Bootstrap, JQuery"/>
		<Website technologies="Svelte Kit, Tailwind, Firebase" website="uniform-ship" websiteLink="https://www.uniformship.com/" websiteTitle="UniformShip" />
		<Website tall website="vitaminx" websiteLink="https://www.vitaminx.in/" websiteTitle="Vitamin X" technologies="Firebase, Svelte Kit, Tailwind"/>
		<Website tall website="pradeep" websiteTitle="Pradeep Publications" websiteLink="https://pradeep-client.vercel.app/" technologies="Firebase, Svelte Kit, Tailwind"/>
		<Website tall website="lovely-marbles" websiteLink="https://www.lovelymarblessanitations.com/" websiteTitle="Lovely Marbles And Sanitation" technologies="React , Firebase, Tailwind" />
		<Website tall website="shrey-india" websiteLink="https://www.shreysports.in/"  websiteTitle="Shrey India" technologies="Firebase, Svelte Kit, Tailwind"/>
		<Website website="neualto" websiteLink="https://www.neualto.com/" websiteTitle="Neualto" technologies="Firebase, Svelte Kit, Tailwind"/>
		<Website technologies="Svelte Kit, BootStrap, Firebase" website="not-so-white" websiteLink="https://notsowhite.in/" websiteTitle="Not So White" />
		<Website website="careplanet" websiteLink="https://www.careplanetlifesciences.com/" websiteTitle="Care Planet Life Sciences" technologies="HTML, CSS, JS"/>
		<Website  website="ikon-living" websiteLink="https://www.ikonliving.in/" websiteTitle="Ikon Living" technologies="Svelte Kit, Tailwind" />
		<Website wide technologies="Svelte Kit, Tailwind, Firebase" website="poonik-gaming" websiteLink="https://poonik-gaming.vercel.app/home" websiteTitle="Poonik Gaming" />
	</div>
</div>

<style lang="scss">
  @import '../../styles/mixins.scss';

  .grid {
    gap: 0.8rem;
    grid-auto-rows: 230px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    width: min(90%, 72rem);

    @media screen and (max-width: 600px) {
      grid-auto-rows: 125px;
    }

    @media screen and (max-width: 868px) {
      width: min(100%, 75rem);
      gap: 0.2rem;
      grid-template-columns: 1fr 1fr 1fr;
    }

    &:before {
      @include outlineText($content: '&&', $translateX: -40%, $translateY: -160%);

      @media screen and (max-width: 868px) {
        @include outlineText($content: '&&', $translateX: -25%, $translateY: -95%);
      }
    }
  }

  .grid-container {
    display: flex;
    justify-content: center;
  }
</style>
