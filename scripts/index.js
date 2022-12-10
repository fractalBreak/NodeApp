
import express from 'express';
import {readFile} from 'fs';
import calendarRouter from './routes/calendar.js';
import employeesRouter from './routes/Employees.js';
import config from './config.js';
import jobsRouter from './routes/Jobs.js';

const app = express();
const PORT = 8080;

/* universal middleware */
app.use("/css",express.static("./css"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

/* Routers */ 
app.use("/", calendarRouter);
app.use("/Employees", employeesRouter);
app.use("/Jobs", jobsRouter);

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