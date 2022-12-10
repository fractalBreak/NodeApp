
import express from 'express';
import {readFile} from 'fs';
import loginRouter from './routes/login.js';
import employeesRouter from './routes/Employees.js';
import config from './config.js';

const app = express();
const PORT = 8080;

/* callback method */
app.use("/css",express.static("./css"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

/* Routers */ 
app.use("/", loginRouter);
app.use("/Employees", employeesRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

/* App listener */
app.listen(
    process.env.PORT || PORT, 
    () => console.log(`App available on http://${config.db.host}:${PORT}`));