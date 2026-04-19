import Papa from 'papaparse';

const GIDS = {
  cuadros: "0",
  tejidos: "1668974614"
};

const BASE_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRMGw9wRMnqwwxsMcz1rxty2ZCYTGp3VZJjIAalwjyUf6O4Y6mjsQEPvtJiYOPhIK8DpiZ2GWFCP8jP/pub?output=csv";

// ── In-memory cache to avoid re-fetching on every page visit ──
const dataCache = {};
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/**
 * Converts a Google Drive sharing link to a direct embeddable image link.
 */
export const convertDriveLink = (link) => {
  if (!link) return "";

  // Already a direct link or local asset
  if (link.startsWith('http') && !link.includes('drive.google.com')) return link;
  if (!link.startsWith('http')) return link;

  // Google Drive link → direct embed
  if (link.includes('drive.google.com')) {
    const idMatch = link.match(/\/d\/(.+?)\//) || link.match(/id=(.+?)(&|$)/) || link.match(/\/file\/d\/(.+?)\//);
    if (idMatch && idMatch[1]) {
      return `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
    }
  }
  return link;
};

/**
 * Fetches product data from Google Sheets.
 * Uses an in-memory cache to prevent redundant network requests.
 */
export const fetchData = async (category = 'cuadros') => {
  const gid = GIDS[category] || GIDS.cuadros;

  // Check cache first
  const cached = dataCache[category];
  if (cached && (Date.now() - cached.timestamp < CACHE_TTL)) {
    return cached.data;
  }

  const url = `${BASE_URL}&gid=${gid}`;

  return new Promise((resolve, reject) => {
    Papa.parse(url, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const filteredData = results.data
          .filter(item => item.Estado === "1" && item.Nombre)
          .map(item => {
            // Normalize image headers between tabs
            const img1 = item['ImagenCuadro 1'] || item['Imagen Tejido 1'];
            const img2 = item['ImagenCuadro 2'] || item['Imagen Tejido 2'];
            const img3 = item['ImagenCuadro 3'] || item['Imagen Tejido 3'];

            return {
              ...item,
              images: [
                convertDriveLink(img1),
                convertDriveLink(img2),
                convertDriveLink(img3)
              ].filter(u => u !== "")
            };
          });

        // Store in cache
        dataCache[category] = {
          data: filteredData,
          timestamp: Date.now()
        };

        resolve(filteredData);
      },
      error: (error) => {
        // If cache exists but expired, return stale data as fallback
        if (cached) {
          resolve(cached.data);
        } else {
          reject(error);
        }
      }
    });
  });
};

/**
 * Prefetch both categories to warm the cache.
 * Call this on app startup for instant gallery loading.
 */
export const prefetchAll = () => {
  fetchData('cuadros').catch(() => {});
  fetchData('tejidos').catch(() => {});
};
