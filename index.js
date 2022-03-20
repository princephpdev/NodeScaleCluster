const express = require("express");
const app = express();

/**
 * Command used for artillery Test
 * artillery quick --count 2000 --num 10 http://localhost:3000
 */

app.get("/", (req, res) => {
  for (let index = 0; index < 1e8; index++) {
    // const element = array[index];
  }
  res.send(`Say hi to pid ${process.pid}`);
});

/**
 * This is when only single core is used
 */

app.listen(3000, () => {
  console.log(`Server Started at 3000 ${process.pid}`);
});
