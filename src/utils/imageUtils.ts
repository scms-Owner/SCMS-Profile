/**
 * Image Utilities for WebP Conversion and Responsive SrcSet Generation
 */

/**
 * Normalizes an asset URL to resolve correctly across subpath hostings like GitHub Pages
 * (e.g. /SCMS-Profile/) as well as standard root hostings.
 */
export const normalizeAssetUrl = (url: string): string => {
  if (!url) return '';

  // External URLs or data URIs
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('data:') ||
    url.startsWith('blob:')
  ) {
    return url;
  }

  // Strip leading slashes and dot-slashes
  const cleanPath = url.replace(/^(\.\/|\/)+/, '');
  const meta = import.meta as unknown as { env?: { BASE_URL?: string } };
  const base = meta?.env?.BASE_URL || './';

  if (base === './') {
    return `./${cleanPath}`;
  }

  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};

export const getWebpUrl = (url: string, width?: number, quality = 80): string => {
  if (!url) return '';

  // Local static images in public folder - return normalized local path so uploaded .jpg/.png/.webp load directly
  if (url.startsWith('/') || url.startsWith('./') || !url.startsWith('http')) {
    return normalizeAssetUrl(url);
  }

  // Unsplash CDN URLs - inject WebP format and width
  if (url.includes('images.unsplash.com')) {
    try {
      const parsed = new URL(url);
      parsed.searchParams.set('fm', 'webp');
      parsed.searchParams.set('auto', 'format');
      parsed.searchParams.set('fit', 'crop');
      parsed.searchParams.set('q', quality.toString());
      if (width) {
        parsed.searchParams.set('w', width.toString());
      }
      return parsed.toString();
    } catch {
      // Fallback string manipulation if URL parsing fails
      let modified = url;
      if (!modified.includes('fm=webp')) {
        modified += '&fm=webp';
      }
      if (width && !modified.includes(`w=${width}`)) {
        modified = modified.replace(/w=\d+/, `w=${width}`);
      }
      return modified;
    }
  }

  return url;
};

export const getResponsiveSrcSet = (
  url: string,
  widths: number[] = [360, 480, 720, 960, 1200, 1600],
  quality = 80
): string => {
  if (!url) return '';

  // If Unsplash URL, generate full width-based srcset
  if (url.includes('images.unsplash.com')) {
    return widths
      .map((w) => `${getWebpUrl(url, w, quality)} ${w}w`)
      .join(', ');
  }

  // For local images, return empty so <img> loads the exact uploaded file directly
  return '';
};

export const getDefaultSizes = (
  layout: 'gallery' | 'card' | 'hero' | 'thumb' | 'fullscreen' = 'card'
): string => {
  switch (layout) {
    case 'gallery':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
    case 'hero':
      return '100vw';
    case 'fullscreen':
      return '(max-width: 1024px) 95vw, 1200px';
    case 'thumb':
      return '(max-width: 640px) 25vw, 120px';
    case 'card':
    default:
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px';
  }
};
