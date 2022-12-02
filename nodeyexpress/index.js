let express = require("express");
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Read
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

//Create
app.post("/", (req, res) => {
  res.send(`te llamas: ${req.body.name}`);
});

//Update
app.put("/", (req, res) => {
  res.send(`Has actualizado el registro numero: ${req.body.id}`);
});

//Delete
app.delete("/users", (req, res) => {
  res.send(`Has eliminado el registro: ${req.query.user}`);
});

let server = app.listen(8080, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log("Aplicacion escuchando en: htttp://%s:%s", host, port);
});
