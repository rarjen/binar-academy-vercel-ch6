const express = require("express");
const port = 3000;
const app = express();

app.use("/", (req, res, next) => {
  return res.status(200).json({
    status: true,
    message: "manrap",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    status: false,
    message: "Page Not Found!",
  });
});

app.use((err, req, res, next) => {
  return res.status(500).json({
    status: false,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
