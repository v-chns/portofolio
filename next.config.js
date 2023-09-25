// next.config.js
module.exports = {
    // Other configuration options...
  
    trailingSlash: true, // Use trailingSlash instead of exportTrailingSlash
  
    // Define your static paths using generateStaticParams
    async generateStaticParams() {
      // Define your static paths here
      return [
        {
          route: '/',
        },
        // Add more paths as needed
      ];
    },
  };