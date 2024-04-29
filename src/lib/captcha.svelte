<script>
    import { ReCaptcha } from "@mac-barrett/svelte-recaptcha";
    let SITE_KEY = "6LdxSsYpAAAAAPody1-gCZNzt9z0bjqyh2ABHI45";
</script>

<ReCaptcha {SITE_KEY} captchaStyle={{theme: "light", size: "normal"}} />