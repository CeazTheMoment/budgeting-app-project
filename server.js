const app = require("./app");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3003;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () => console.log("Listening on port:", PORT));
