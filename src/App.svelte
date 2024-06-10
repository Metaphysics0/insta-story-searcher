<script lang="ts">
  import instaStorySearch from './assets/insta-story-search.png';
  import Form from './lib/Form.svelte';
</script>

<main>
  <div class="logo-wrap">
    <img src={instaStorySearch} class="logo" alt="Logo" />
  </div>
  <h1>Insta Story Searcher</h1>
  <p>You simp</p>
  <Form />
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
</style>
