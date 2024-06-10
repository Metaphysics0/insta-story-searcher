<script>
  import { searchInputStore } from '../stores/search-input.store';
  import { storyViewersStore } from '../stores/story-viewers.store';
  import { getFilteredStoryViewers } from '../utils/search';

  let filteredStoryViewers = $storyViewersStore;

  searchInputStore.subscribe((searchText) => {
    if (!searchText) {
      filteredStoryViewers = $storyViewersStore;
      return;
    }

    filteredStoryViewers = getFilteredStoryViewers({
      storyViewers: $storyViewersStore,
      searchText,
    });
  });
</script>

<div class="flex flex-col">
  {#if $storyViewersStore.length}
    <strong>Viewers: </strong>
  {/if}
  {#each filteredStoryViewers as storyViewer, idx}
    <span>{idx + 1}. {storyViewer}</span>
  {/each}
</div>
