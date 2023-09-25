// next.config.js
module.exports = {
    // Other configuration options...
  
    exportPathMap: async function () {
      return {
        // Define your pages here for static export
        '/': { page: '/' },
        // Add more pages as needed
      };
    },
  
    // Enable static HTML export
    exportTrailingSlash: true,
  };