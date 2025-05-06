import adapter from '@sveltejs/adapter-static';
const dev = process.argv.includes('dev');

const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    paths: {
      base: dev ? '' : '/sveltekit-company-profile-new'  
    },
    prerender: {
      entries: ['*']
    }
  }
};

export default config;
