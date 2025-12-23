/**
 * Generates a random alphanumeric string.
 *
 * @param {number} [length=10] - Length of the generated string.
 * @returns {string} Random string.
 *
 * @example
 * randomString();        // e.g. "k3j9xq2abc"
 * randomString(6);       // e.g. "a9x2qz"
 */
export function randomString(length = 10) {
    return Math.random().toString(36).slice(2, 2 + length);
}
