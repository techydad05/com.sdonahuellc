<script>
	import { Slidy } from '@slidy/svelte';
	import '@slidy/svelte/dist/slidy.css';
</script>

<div class="navbar bg-base-100 h-[20svh]">
	<div class="navbar-start"></div>
	<div class="navbar-center">
		<a class="block"><img class="h-[150px]" src="/sdonahue-logo.png" alt="" /></a>
	</div>
	<div class="navbar-end"></div>
</div>
<div class="flex flex-col justify-center items-center h-[80svh]">
	<Slidy
		slides={[
			{ thumbnail: '/yard1.jpeg' },
			{ thumbnail: '/yard2.jpeg' },
			{ thumbnail: '/yard3.jpeg' }
		]}
		getImgSrc={(item) => item.thumbnail}
		arrows
		loop
		counter
		background
		snap={'center'}
		--slidy-slide-height={'60svh'}
		--slidy-slide-width={'100%'}
	/>
	<button class="btn btn-outline btn-primary mb-8">Learn More</button>
</div>
<div class="flex h-[100svh]"></div>

<style>
	:global(.slidy-slide.bg) {
		background-position: bottom !important;
	}
	:global(.slidy-slides) {
		--slidy-slide-gap: 10px !important;
		padding: 0 5px;
	}
</style>
