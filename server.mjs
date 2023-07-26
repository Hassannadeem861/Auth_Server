
console.log("Hello world server side javascript");


import express from 'express';
import path from "path"
import apiv1 from "./apiv1/index.mjs"
import apiv2 from "./apiv2/index.mjs"



const app = express()
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000
app.use(express.json());



app.use("/api/v1", apiv1)
app.use("/api/v2", apiv2)


app.use(express.static(path.join(__dirname, "public")))
app.listen(PORT, () => {
  console.log(`Example server listening on PORT ${PORT}`)
})