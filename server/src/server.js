// const http = require('http');
const app = require('./app');

// const port = process.env.PORT || 3000;
// const server = http.createServer(app);
// server.listen(port);

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
  // eslint-disable-next-line
  console.log(`Express running → PORT ${server.address().port}`);
});
