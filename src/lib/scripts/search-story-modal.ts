// @ts-nocheck

export async function call() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const tabId = tabs[0].id;

  const scriptResult = await chrome.scripting.executeScript<string[]>({
    target: { tabId },
    func: getAllUsersWhoViewedStory,
  });
  return scriptResult[0].result as string[];
}
export async function getAllUsersWhoViewedStory() {
  try {
    const wrapper = document.querySelector('div[style*="height: 356px"]');
    if (!wrapper) {
      throw new Error(ERRORS.cannotFindStoryViewerModal);
    }

    const removeDuplicates = (arr) =>
      arr.filter((item, index) => arr.indexOf(item) === index);

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    const result = [];

    let i = 1;
    let isWrapperScrolledToTheBottom =
      wrapper.scrollHeight - wrapper.scrollTop - wrapper.clientHeight < 1;

    while (!isWrapperScrolledToTheBottom) {
      const users = wrapper.getElementsByTagName('span');
      const r = Array.from(users).map((e) => e.innerText);
      result.push(...removeDuplicates(r));
      wrapper.scroll(0, 300 * i);
      await sleep(100);
      if (wrapper.scrollHeight - wrapper.scrollTop - wrapper.clientHeight < 1) {
        break;
      }
      i++;
    }

    return removeDuplicates(result);
  } catch (error) {
    const isKnownError = Object.values(ERRORS).includes(error?.message);
    if (isKnownError) alert(error);

    console.error('Error searching', error);
  }
}

const ERRORS = {
  cannotFindStoryViewerModal: 'Cannot find story wrapper!',
};
