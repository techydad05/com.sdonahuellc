<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { sineInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { form, field } from 'svelte-forms';
	import { email, required, min } from 'svelte-forms/validators';
	import MaskInput from 'svelte-input-mask/MaskInput.svelte';
	import Captcha from './captcha.svelte';

	const name = field('name', '', [required()]);
	const phone = field('phone', '', []);
	const mail = field('email', '', [required(), email()]);
	const message = field('message', '', [required(), min(20)]);
	const myForm = form(name, phone, mail, message);
	let btnText = 'Send Email';
	let alert = false;

	const submitForm = async () => {
		console.log(myForm.summary());
		emailjs.init('user_sfHHqVix3VlKerTBKwc66');

		btnText = 'Sending...';

		const serviceID = 'sdonahue';
		const templateID = 'template_8tfe3th';

		// Get Google ReCaptcha Score
		let captchaToken = await window.grecaptcha.getResponse();
		// var params = {
		// 	name: '#contact-form',
		// 	'g-recaptcha-response': captchaToken
		// };
		// console.log(params);
		if (captchaToken != '') {
			emailjs.sendForm(serviceID, templateID, '#contact-form').then(
				() => {
					btnText = 'Send Email';
					alert = true;
					myForm.reset();
					setTimeout(() => {
						alert = false;
					}, 3000);
				},
				(err) => {
					btnText = 'Send Email';
					console.log(JSON.stringify(err));
				}
			);
		}
	};
	// const onSubmit = async (e) => {
	// 	grecaptcha.execute().then(async (e) => {
	// 		console.log(await e);
	// 		const res = await fetch('/captcha', {
	// 			method: 'POST',
	// 			body: JSON.stringify({ captchaResponse: e }),
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			}
	// 		});
	// 	});
	// };
</script>

<head>
	<!-- <script src="https://www.google.com/recaptcha/api.js" async defer></script> -->
	<script
		type="text/javascript"
		src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
	></script>
</head>
<div id="contact" class="contact flex w-full items-center justify-center py-14 flex-col">
	<h1
		class="text-5xl w-full px-6 mb-8 text-neutral-100 text-center leading-[4rem] font-bold drop-shadow"
	>
		Send us a message for more info, Someone will contact you shortly!
	</h1>
	<form
		id="contact-form"
		class="flex flex-col items-center justify-center gap-4 w-3/4 md:w-1/2 bg-primary/80 p-4 rounded-lg shadow"
	>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="form-control w-full max-w-md">
			<div class="label">
				<span class="label-text text-2xl">Name:</span>
			</div>
			<input
				type="text"
				bind:value={$name.value}
				name="name"
				id="name"
				class="input input-bordered input-primary w-full max-w-md"
			/>
		</label>
		{#if $myForm.hasError('name.required')}
			<div>Name is required</div>
		{/if}
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="form-control w-full max-w-md">
			<div class="label">
				<span class="label-text text-2xl">Phone:</span>
			</div>
			<MaskInput
				bind:value={$phone.value}
				name="from_phone"
				id="from_phone"
				class="input input-bordered input-primary w-full max-w-md"
				maskChar={'0'}
				mask="000-000-0000"
			/>
		</label>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="form-control w-full max-w-md">
			<div class="label">
				<span class="label-text text-2xl">Email:</span>
			</div>
			<input
				type="text"
				bind:value={$mail.value}
				name="from_email"
				id="from_email"
				class="input input-bordered input-primary w-full max-w-md"
			/>
		</label>
		{#if $myForm.hasError('email.required')}
			<div>Email is required</div>
		{/if}
		{#if $myForm.hasError('email')}
			<div>A valid email is required</div>
		{/if}
		<label class="form-control w-full max-w-md">
			<div class="label">
				<span class="label-text text-2xl">Message:</span>
			</div>
			<textarea
				bind:value={$message.value}
				name="message"
				id="message"
				class="textarea textarea-bordered textarea-lg w-full max-w-md"
			></textarea>
		</label>
		{#if $myForm.hasError('message.required')}
			<div>Message is required</div>
		{/if}
		{#if $myForm.hasError('message.min')}
			<div>Message is too short! 20 character minimum</div>
		{/if}
		<Captcha />
		<!-- <input on:click={testies} type="submit" value="Submit" /> -->
		<button
			disabled={!$myForm.valid | ($mail.value === '')}
			on:click|preventDefault={() => submitForm()}
			class="btn btn-secondary btn-lg">{btnText}</button
		>
	</form>
	<!-- <form
		id="form"
		class="flex flex-col items-center justify-center gap-4 w-3/4 md:w-1/2 bg-primary/80 p-4 rounded-lg shadow"
	>
		<label class="form-control w-full max-w-md">
			<div class="label">
				<span class="label-text text-2xl">Name:</span>
			</div>
			<input
				type="text"
				name="from_name"
				id="from_name"
				class="input input-bordered input-primary w-full max-w-md"
			/>
		</label>
		<label class="form-control w-full max-w-md">
			<div class="label">
				<span class="label-text text-2xl">Phone:</span>
			</div>
			<MaskInput
				name="from_phone"
				id="from_phone"
				class="input input-bordered input-primary w-full max-w-md"
				maskChar={'0'}
				mask="000-000-0000"
			/>
		</label>
		<label class="form-control w-full max-w-md">
			<div class="label">
				<span class="label-text text-2xl">Email:</span>
			</div>
			<input
				type="text"
				name="from_email"
				id="from_email"
				class="input input-bordered input-primary w-full max-w-md"
			/>
		</label>
		<label class="form-control w-full max-w-md">
			<div class="label">
				<span class="label-text text-2xl">Message:</span>
			</div>
			<textarea
				name="message"
				id="message"
				class="textarea textarea-bordered textarea-lg w-full max-w-md"
			></textarea>
		</label>
		<input type="submit" id="form-btn" value="Send Email" class="btn btn-secondary btn-lg" />
	</form> -->
</div>
{#if alert}
	<div
		role="alert"
		class="alert alert-success fixed top-4 right-4 w-96"
		transition:fly={{ x: -250, easing: sineInOut }}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="stroke-current shrink-0 h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<span>Your message has been sent!</span>
	</div>
{/if}
