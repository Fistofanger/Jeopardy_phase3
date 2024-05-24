const express = require('express');
const cookieParser = require('cookie-parser');
const removeHeaders = require('./middlewares/removeHeaders');

const indexRouter = require('./routes/index.routes');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(removeHeaders);
app.use(express.json());
app.use('/api', indexRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
