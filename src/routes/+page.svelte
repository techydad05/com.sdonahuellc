<script>
	import { Slidy } from '@slidy/svelte';
	import '@slidy/svelte/dist/slidy.css';

	const scrollIntoView = ({ target }) => {
		const el = document.querySelector(target.dataset.scroll);
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<div class="navbar bg-base-100 h-[20vh]">
	<div class="navbar-start"></div>
	<div class="navbar-center h-full">
		<a class="h-full"><img class="h-full" src="/sdonahue-logo.png" alt="" /></a>
	</div>
	<div class="navbar-end"></div>
</div>
<div class="flex flex-col justify-start items-center h-[80vh]">
	<div class="h-[60vh] w-full">
		<Slidy
			slides={[
				{ thumbnail: '/yard1.jpg' },
				{ thumbnail: '/yard2.jpg' },
				{ thumbnail: '/yard3.jpg' }
			]}
			getImgSrc={(item) => item.thumbnail}
			arrows
			loop
			counter
			background
			snap={'center'}
			--slidy-slide-width={'100%'}
			--slidy-slide-gap={'4px'}
			--slidy-slide-height={'100%'}
			--slidy-slide-radius={'none'}
		/>
	</div>
	<!-- <button class="btn btn-outline btn-primary mt-[3%]">Learn More</button> -->
	<button
		data-scroll="#section-2"
		class="btn btn-outline btn-primary mt-[3%]"
		on:click={scrollIntoView}
	>
		Learn More</button
	>
</div>
<div class="flex h-[50vh] mb-[20%]">
	<div class="hero h-full bg-no-repeat" style="background-image: url(/yardbg.jpg);">
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">FOCUS ON QUALITY</h1>
			</div>
		</div>
	</div>
</div>
<div id="section-2" class="flex h-[100svh]">
	<div
		class="hero min-h-screen"
		style="background-image: url('');"
	>
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Hello there</h1>
				<p class="mb-5">
					The moment I became Spider-Man is etched into my memory like a vivid dream. It all began
					with a simple visit to Oscorp Industries, where a chance encounter with a genetically
					modified spider altered the course of my life forever. As its venom coursed through my
					veins, I felt a surge of newfound strength, heightened senses, and an uncanny agility.
					Confusion soon gave way to realization as I found myself scaling walls and swinging
					effortlessly through the city streets. Embracing my newfound identity, I vowed to use my
					powers for good, navigating the dual identities of Peter Parker and the friendly
					neighborhood Spider-Man with a sense of purpose and responsibility, determined to make a
					positive impact on the world around me.
				</p>
				<button class="btn btn-outline btn-primary">Contact Me</button>
			</div>
		</div>
	</div>
</div>

<style>
	:global(.slidy-slide.bg) {
		background-position: bottom !important;
	}
	:global(.slidy-slides) {
		padding: 0 5px;
	}
</style>
