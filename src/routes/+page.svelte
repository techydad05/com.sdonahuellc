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
</script>

<svelte:window on:scroll={() => getScrollPercent()} />

<div class="navbar bg-base-100 h-[20vh]">
	<div class="navbar-start"></div>
	<div class="navbar-center h-full">
		<a class="h-full"><img class="h-full" src="/sdonahue-logo.png" alt="" /></a>
	</div>
	<div class="navbar-end"></div>
</div>
<div class="flex flex-col justify-start items-center h-[80vh]">
	<div class="h-[80%] w-full">
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
			--slidy-slide-gap={'0'}
			--slidy-slide-height={'100%'}
			--slidy-slide-radius={'none'}
		/>
	</div>
	<div class="h-[20%] flex items-center justify-center">
        <button data-scroll="#section-2" class="btn btn-outline btn-primary" on:click={scrollIntoView}>
            Learn More</button
        >
    </div>
</div>
<div class="flex h-[50vh] mb-[20%]">
	<div
		class="hero h-full bg-no-repeat"
		style={`background-image: url(/yardbg.jpg);background-size: auto ${160 + scrolled}%;`}
	>
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">FOCUS ON QUALITY</h1>
			</div>
		</div>
	</div>
</div>
<div id="section-2" class="flex h-[100svh]">
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row">
			<img
				src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
				class="hidden md:block max-w-sm rounded-lg shadow-2xl"
			/>
			<div class="bg-[url('https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg')] bg-no-repeat bg-cover bg-center text-white p-10 md:bg-none md:p-0 md:text-black">
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
	<!-- <div
		class="hero min-h-screen"
		style="background-image: url('');"
	>
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">About Me</h1>
				<p class="mb-5 text-left">
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
	</div> -->
</div>

<style>
	:global(.slidy-slide.bg) {
		background-position: top !important;
	}
	:global(.slidy-slides) {
		padding: 0 5px;
	}
</style>
