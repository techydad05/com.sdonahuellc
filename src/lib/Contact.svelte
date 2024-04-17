<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const btn = document.getElementById('button');

		document.getElementById('form').addEventListener('submit', function (event) {
			emailjs.init('user_sfHHqVix3VlKerTBKwc66');
			event.preventDefault();

			btn.value = 'Sending...';

			const serviceID = 'sdonahue';
			const templateID = 'template_8tfe3th';

			emailjs.sendForm(serviceID, templateID, this).then(
				() => {
					btn.value = 'Send Email';
					alert('Sent!');
				},
				(err) => {
					btn.value = 'Send Email';
					alert(JSON.stringify(err));
				}
			);
		});
	});
</script>

<head>
	<script
		type="text/javascript"
		src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
	></script>
</head>

<div class="contact flex w-full items-center justify-center py-14 flex-col">
    <h1 class="text-6xl w-full px-6 mb-8 text-center leading-[4rem] font-bold">
        Send us a message for more info, Someone will contact you asap!
    </h1>
	<form id="form" class="flex flex-col gap-4 w-1/2 bg-primary/80 p-4 rounded-lg">
		<input
			type="text"
			name="from_name"
			id="from_name"
			placeholder="Name"
			class="input input-bordered input-primary w-full max-w-md"
		/>
		<input
			type="text"
			name="from_phone"
			id="from_phone"
			placeholder="Phone"
			class="input input-bordered input-primary w-full max-w-md"
		/>
		<input
			type="text"
			name="from_email"
			id="from_email"
			placeholder="Email"
			class="input input-bordered input-primary w-full max-w-md"
		/>
		<textarea
			name="message"
			id="message"
			placeholder="Message"
			class="textarea textarea-bordered textarea-lg w-full max-w-md"
		></textarea>
		<input type="submit" id="button" value="Send Email" class="btn btn-secondary" />
	</form>
</div>
