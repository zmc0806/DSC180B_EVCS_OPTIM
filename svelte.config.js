import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base: "/ev_charge_station"  // ⚠ Ensure this matches your repo name!
    },
    appDir: "internal" // Helps avoid GitHub Pages caching issues
  }
};
