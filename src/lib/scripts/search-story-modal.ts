// @ts-nocheck

export async function getAllUsersWhoViewedStory() {
  try {
    const wrapper = document.querySelector('div[style*="height: 356px"]');
    if (!wrapper) {
      throw new Error(ERRORS.cannotFindStoryViewerModal);
    }

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

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const ERRORS = {
  cannotFindStoryViewerModal: 'Cannot find story wrapper!',
};
