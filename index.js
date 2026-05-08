const { PeerServer } = require('peer');
const server = PeerServer({ port: process.env.PORT || 10000, path: '/' });
console.log('Server is finally live!');
