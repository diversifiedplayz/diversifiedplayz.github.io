<script>
  import "../app.css";
  import posthog from "posthog-js";
  import { browser } from "$app/environment";
  import { beforeNavigate, afterNavigate } from "$app/navigation";

  if (browser) {
    beforeNavigate(() => posthog.capture("$pageleave"));
    afterNavigate(() => posthog.capture("$pageview"));
  }
</script>

<slot />

<style>
  :global(html) {
    @apply h-full;
  }

  :global(body) {
    @apply h-full;
  }
</style>
