/**
 * Returns whether the list contains duplicates.
 * @param arr
 * @returns {boolean}
 */
export function hasDuplicates(arr) {
    let counts = [];

    //parse through list
    for (let i = 0; i <= arr.length; i++) {
        if (counts[arr[i]] === undefined) {
            counts[arr[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}