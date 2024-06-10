import Fuse from 'fuse.js';

export function getFilteredStoryViewers({
  searchText,
  storyViewers,
}: {
  searchText: string;
  storyViewers: string[];
}) {
  const fuse = new Fuse(storyViewers);
  return fuse.search(searchText).map((res) => res.item);
}
