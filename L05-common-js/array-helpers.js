// function last(arr = []) {
//     return arr[arr.length - 1];
// }

// module.exports = {  // CommonJS export
//     last(arr = []) {
//         return arr[arr.length - 1];
//     }
// }

exports.last = (arr = []) => {
    return arr[arr.length - 1];
};
