import express from "express";

const app = express();
const port = 3000;

// app.get( "/",( req,res ) =>
// {
//     console.log(req.rawHeaders);
// })

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.put("/user/cong", (req, res) => {
  res.sendStatus(200);
});

app.path("/user/cong", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/cong", (req, res) => {
  res.sendStatus(200);
});

// 3000 is port
app.listen(port, () => {
  // here is the callback function
  console.log(`Server running on port ${port}.`);
});
