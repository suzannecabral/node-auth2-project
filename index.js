const server = require('./api/server');
// const Secrets = require('./api/secrets');

const PORT = 9000;

server.listen(PORT, ()=>{
  console.log(`Server is listening on port ${PORT}`);
});