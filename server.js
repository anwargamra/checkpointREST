const express = require("express");
const Connect = require("./Config/Connect");
const app = express();

require("dotenv").config({ path: "./config/.env" });
Connect();


app.use(express.json())
app.use('/',require('./routes/User'));


const port = process.env.PORT || process.env.port;
app.listen(port, () => {
  console.log(
    `Success! Your application is running on http://localhost:${port}`
  );
});