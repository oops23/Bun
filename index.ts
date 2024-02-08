const server = Bun.serve({
    port: Bun.env.PORT || 8000, //get port from .env file
    fetch(req){
        const url = new URL(req.url);
        if (url.pathname === '/') return new Response('HomePage!');
        if (url.pathname === '/blog') return new Response('Blog!');
        return new Response('404!');
    },
});
console.log(`Listening on port ${server.port}`);