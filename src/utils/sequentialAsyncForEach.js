async function sequentialAsyncForEach(array, callback) {
  return array.reduce(
    async (previousAsyncCallback, item, index) => {
      await previousAsyncCallback;
      await callback(item, index);
    },
    // We need to set an initialValue of undefined so
    // reduce does not skip the first item
    undefined,
  );
}

export async function asyncForEach(array, callback) {
  return Promise.all(array.map(async (item) => callback(item)));
}

export default sequentialAsyncForEach;
