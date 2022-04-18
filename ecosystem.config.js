module.exports = {
  apps: [
    {
      name: 'blog1',
      script: './bin/www',
      watch: '.',
      env: {
        port: 3001
      }
    }
  ]
};
