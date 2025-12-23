/**
 * Generates a unique screenshot file name using current date and time.
 *
 * @param {string} prefix - Logical prefix for the screenshot (e.g. "cart", "order")
 * @returns {string} Unique file name without extension
 *
 * @example
 * generateScreenshotName('cart');
 * // cart_2025-01-30_14-23-08-123
 */
export function generateScreenshotName(prefix = 'screenshot') {
    const now = new Date();
    console.log(now);
    const timestamp = now
        .toISOString()
        .replace(/[:.]/g, '-')
        .replace('T', '_')
        .slice(0, 19)
        // .replace('Z', '');

    return `${prefix}_${timestamp}`;
}
