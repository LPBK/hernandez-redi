// Client-side Input Sanitization and Security Utilities

/**
 * Escapes characters that have special meaning in HTML to prevent XSS.
 */
export function sanitizeText(input: string): string {
  if (!input) return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/`/g, '&#060;');
}

/**
 * Removes dangerous javascript: or data: pseudo-protocols for hyperlinks.
 */
export function isSafeUrl(url: string): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  // Safe relative paths
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) return true;
  // Safe protocols
  return /^https?:\/\//i.test(trimmed) || /^mailto:/i.test(trimmed) || /^tel:/i.test(trimmed);
}

/**
 * Validates standard email address formats.
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email.trim());
}

/**
 * Strips potential HTML or malicious tags from an input string for clean database storage.
 */
export function cleanInputString(input: string, maxLength: number = 500): string {
  if (typeof input !== 'string') return '';
  // Strip control chars and trim
  return input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim().slice(0, maxLength);
}
