// array-utilities-plus

module.exports = {
    // Sum of all elements
    sum(arr) {
        if (!Array.isArray(arr)) throw new TypeError('Expected an array');
        return arr.reduce((acc, val) => acc + val, 0);
    },

    // Average of elements
    average(arr) {
        if (!Array.isArray(arr)) throw new TypeError('Expected an array');
        return arr.length === 0 ? 0 : this.sum(arr) / arr.length;
    },

    // Remove duplicate elements
    unique(arr) {
        if (!Array.isArray(arr)) throw new TypeError('Expected an array');
        return [...new Set(arr)];
    },

    // Maximum value
    max(arr) {
        if (!Array.isArray(arr)) throw new TypeError('Expected an array');
        return Math.max(...arr);
    },

    // Minimum value
    min(arr) {
        if (!Array.isArray(arr)) throw new TypeError('Expected an array');
        return Math.min(...arr);
    },

    // Clear falsy values
    clearFalsy(arr) {
        if (!Array.isArray(arr)) throw new TypeError('Expected an array');
        return arr.filter(Boolean);
    },

    // Frequency count of elements
    frequency(arr) {
        if (!Array.isArray(arr)) throw new TypeError('Expected an array');
        return arr.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});
    },

    // Split array into chunks
    chunk(arr, size) {
        if (!Array.isArray(arr)) throw new TypeError('Expected an array');
        if (typeof size !== 'number') throw new TypeError('Expected size to be a number');
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    },

    // Flatten nested arrays
    flat(arr, depth = 1) {
        if (!Array.isArray(arr)) throw new TypeError('Expected an array');
        return arr.flat(depth);
    },

    // Remove specific element
    removeElement(arr, element) {
        if (!Array.isArray(arr)) throw new TypeError('Expected an array');
        return arr.filter((val) => val !== element);
    },
};
