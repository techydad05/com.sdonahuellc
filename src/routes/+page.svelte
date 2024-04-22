<script>
	import { Slidy } from '@slidy/svelte';
	import '@slidy/svelte/dist/slidy.css';
	import Contact from '../lib/Contact.svelte';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	const Plugins = import('@slidy/plugins');

	const scrollIntoView = ({ target }) => {
		const el = document.querySelector(target.dataset.scroll);
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	};

	let scrolled;
	function getScrollPercent() {
		let h = document.documentElement,
			b = document.body,
			st = 'scrollTop',
			sh = 'scrollHeight';
		scrolled = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
		// console.log(scrolled);
		return scrolled;
	}

	let showText;
	$: showText = false;
	let slides = [
		{ thumbnail: '/yard1.jpg', title: 'Lawn Mowing' },
		{ thumbnail: '/yard3.jpg', title: 'Bush Trimming' },
		{ thumbnail: '/yard2.jpg', title: 'Cleanup Landscaping' },
	];
	let slidyItem = slides[0];
</script>

<svelte:window on:scroll={() => getScrollPercent()} />

<div class="h-[100svh]">
	<div class="navbar bg-base-100 h-[20%]">
		<div class="navbar-start"></div>
		<div class="navbar-center h-full">
			<a class="h-full"><img class="h-full" src="/sdonahue-logo.png" alt="" /></a>
		</div>
		<div class="navbar-end"></div>
	</div>
	<div class="flex flex-col justify-start items-center h-[70%]">
		<div class="h-full w-full relative">
			{#await Plugins}
				<div class="flex w-full h-full justify-center items-center">
					<span class="loading loading-ring w-14"></span>
				</div>
			{:then Plugins}
				<Slidy
					{slides}
					getImgSrc={(item) => item.thumbnail}
					loop
					on:index={(e) => {
						slidyItem = slides[e.detail.index];
					}}
					plugins={[Plugins.autoplay({ autoplay: true, duration: 3000 })]}
					snap={'center'}
					easing={cubicInOut}
					counter={false}
					arrows={false}
					let:item
					--slidy-slide-width={'100%'}
					--slidy-slide-gap={'5px'}
					--slidy-slide-height={'100%'}
					--slidy-slide-radius={'none'}
				></Slidy>
				<div class="absolute top-[35%] w-full h-auto py-4 flex flex-col gap-4 items-center justify-center overflow-hidden">
					{#each slidyItem.title.split(' ') as word, index}
						{#key word}
							<div style="text-shadow: 2px 2px 10px black;" class="text-7xl text-neutral-100" in:fly={{ x: (index % 2 === 0 ? "-250px" : "250px"), duration: 1000, delay: 250 }}>
								&nbsp;{word}
							</div>
						{/key}
					{/each}
				</div>
			{/await}
		</div>
	</div>
	<div class="h-[10%] flex items-center justify-center">
		<button data-scroll="#contact" class="btn btn-secondary" on:click={scrollIntoView}>
			Contact Us</button
		>
	</div>
</div>
<div class="flex h-[70vh]">
	<div
		class="hero h-full bg-no-repeat"
		style={`background-image: url(/yardbg.jpg);background-size: auto ${180 + scrolled}%;`}
	>
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold z-50 text-neutral-100">WE FOCUS ON QUALITY</h1>
			</div>
		</div>
	</div>
</div>
<Contact />
<footer class="footer footer-center p-10 bg-base-100 text-primary-content">
	<aside>
		<img src="/logo-letters.png" alt="" class="w-12" />
		<p class="font-bold">S.Donahue LLC</p>
		<a href="tel:7273312812"><svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="2em" height="2em" viewBox="0 0 256 256">
			<path fill="currentColor" d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.61.61 0 0 0 0 .12l21 47l-20.67 24.74a6.13 6.13 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8.44 8.44 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208" />
		</svg> 727-331-2812</a>
		<p>Copyright © 2024 - All right reserved</p>
	</aside>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<!-- <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
		<a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> -->
			<!-- <a
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
					></path></svg
				></a
			> -->
		</div>
	</nav>
</footer>

<!-- <div id="section-2" class="flex h-[100svh]">
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row">
			<img
				src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
				class="hidden md:block max-w-sm rounded-lg shadow-2xl"
			/>
			<div
				class="bg-[url('https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg')] bg-no-repeat bg-cover bg-center text-white p-10 md:bg-none md:p-0 md:text-black"
			>
				<h1 class="text-5xl font-bold">A Little Bit About Me</h1>
				<p class="py-6">
					The moment I became Spider-Man is etched into my memory like a vivid dream. It all began
					with a simple visit to Oscorp Industries, where a chance encounter with a genetically
					modified spider altered the course of my life forever. As its venom coursed through my
					veins, I felt a surge of newfound strength, heightened senses, and an uncanny agility.
					Confusion soon gave way to realization as I found myself scaling walls and swinging
					effortlessly through the city streets. Embracing my newfound identity, I vowed to use my
					powers for good, navigating the dual identities of Peter Parker and the friendly
					neighborhood Spider-Man with a sense of purpose and responsibility, determined to make a
					positive impact on the world around me..
				</p>
				<button class="btn btn-primary">Get Started</button>
			</div>
		</div>
	</div>
</div> -->

<style lang="postcss">
	div.img {
		opacity: 0;
		transition: opacity 2s linear 1s;
	}
	.active {
		opacity: 1 !important;
	}
	:global(.slidy-slide.bg) {
		background-position: top !important;
	}
	:global(.slidy-slides) {
		padding: 0 5px;
	}
	:global(.slidy) {
		gap: 0 !important;
	}
	:global(autoplay-button) {
		/* z-index: 20 !important; */
		display: none;
	}
</style>
