const express = require("express");
const PORT = 3000;
const app = express();

app.use("/", (req, res, next) => {
  return res.status(200).json({
    status: true,
    message: "mantap",
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

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
