const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

require('./routes/main')(app);

app.listen(port, () => {
      console.log('server listening on port 8080');
});