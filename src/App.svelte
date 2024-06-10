<script lang="ts">
  import instaStorySearch from './assets/insta-story-search.png';
  import Form from './lib/Form.svelte';
  import { storyViewersStore } from './lib/stores/story-viewers.store';
</script>

<main>
  <div class="logo-wrap">
    <img src={instaStorySearch} class="logo" alt="Logo" />
  </div>
  <h1>Insta Story Searcher</h1>
  <p>You simp</p>
  <Form />

  <div class="story-viewers">
    {#if $storyViewersStore.length}
      <strong>Viewers: </strong>
    {/if}
    {#each $storyViewersStore as storyViewer, idx}
      <span>{idx + 1}. {storyViewer}</span>
    {/each}
  </div>
</main>

<style>
  .logo-wrap {
    margin-bottom: 1px;
  }
  h1 {
    margin: 10px 0px;
  }
  p {
    opacity: 0.5;
    font-style: italic;
  }
  .logo {
    height: 6em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .story-viewers {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    max-height: 300px;
    overflow: scroll;
    /* max-width: ; */
  }
</style>
