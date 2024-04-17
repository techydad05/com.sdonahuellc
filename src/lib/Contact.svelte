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

<div class="contact">
	<form id="form">
		<div class="field">
			<label for="from_name">from_name</label>
			<input type="text" name="from_name" id="from_name" />
		</div>
		<div class="field">
			<label for="from_phone">from_phone</label>
			<input type="text" name="from_phone" id="from_phone" />
		</div>
		<div class="field">
			<label for="from_email">from_email</label>
			<input type="text" name="from_email" id="from_email" />
		</div>
		<div class="field">
			<label for="message">message</label>
			<input type="text" name="message" id="message" />
		</div>

		<input type="submit" id="button" value="Send Email" />
	</form>
</div>
