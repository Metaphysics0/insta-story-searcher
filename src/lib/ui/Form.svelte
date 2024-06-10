<script lang="ts">
  import { getAllUsersWhoViewedStory } from '../scripts/search-story-modal';
  import { storyViewersStore } from '../stores/story-viewers.store';
  import { cn } from '../utils/css';
  import Fuse from 'fuse.js';
  import { getFilteredStoryViewers } from '../utils/search';
  import { searchInputStore } from '../stores/search-input.store';

  let searchInput = '';
  let shouldDisableInput = true;

  async function search() {
    const result = await getAllUsersWhoViewedStory();

    if (result) {
      storyViewersStore.set(result);
    }
  }

  function onInput(e: Event) {
    // @ts-ignore
    searchInput = e.target.value;
    shouldDisableInput = searchInput.length === 0;

    searchInputStore.set(searchInput);
  }
</script>

<div class="form-wrap">
  <label class="input-wrap">
    <input
      type="text"
      name="query"
      placeholder="Search a viewer"
      autocomplete="one-time-code"
      on:input={onInput}
    />
  </label>
  {#if !$storyViewersStore.length}
    <button
      class={cn(shouldDisableInput ? 'opacity-50 cursor-not-allowed' : '')}
      on:click={search}
      disabled={shouldDisableInput}
    >
      Search 🚀
    </button>
  {/if}
</div>

<style>
  .form-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input-wrap {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 10px 5px;
    font-size: medium;
    font-weight: 500;
    margin: auto;
    text-align: center;
    border-radius: 10px;
    border: 1px solid grey;
    margin-bottom: 10px;
  }
  button {
    font-weight: 700;
    border: 1px solid rgb(213, 213, 213);
  }
</style>
