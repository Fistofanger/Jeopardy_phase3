const express = require('express');
const removeHeaders = require('./middlewares/removeHeaders');

const indexRouter = require('./routes/index.routes');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(removeHeaders);
app.use(express.json());
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
