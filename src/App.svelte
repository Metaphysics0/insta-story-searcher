<script lang="ts">
  import { storyViewersStore } from './lib/stores/story-viewers.store';
  import Form from './lib/ui/Form.svelte';
  import Instructions from './lib/ui/Instructions.svelte';
  import Logo from './lib/ui/Logo.svelte';
  import StoryViewers from './lib/ui/StoryViewers.svelte';
</script>

<main class="flex flex-col items-center">
  <Logo />
  <h1 class="font-bold mb-2">Insta Story Searcher</h1>
  <p class="mb-3 font-light opacity-70">You simp.</p>
  <Form />
  {#if !$storyViewersStore.length}
    <Instructions />
  {/if}

  <StoryViewers />
</main>
