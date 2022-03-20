const express = require("express");
const app = express();
const cluster = require("cluster");
const os = require("os");
const cpuNum = os.cpus().length;

/**
 * Command used for artillery Test
 * artillery quick --count 2000 --num 10 http://localhost:3000
 */

app.get("/", (req, res) => {
  for (let index = 0; index < 1e8; index++) {
    // const element = array[index];
  }
  res.send(`Say hi to pid ${process.pid}`);

  // Kill the worker
  //   cluster.worker.kill();
});

/**
 * This is when multi core is used
 */

if (cluster.isMaster) {
  for (let index = 0; index < cpuNum; index++) {
    cluster.fork();
  }
  // If worker is killed then create a new instance of worker
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker died at ${process.pid}`);
    cluster.fork();
  });
} else {
  app.listen(3000, () => {
    console.log(`Server Started at 3000 ${process.pid}`);
  });
}
