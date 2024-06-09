import express from "express"
import router from "./routs"
import cors from "cors"

function creatApp(){
const app = express()

app.use(express.json())

app.use("/api", router)

//const corsOption = {
   // origin: ["http://jaypi.api.com"],
   // methods: ['GET']
//}
app.use(cors())

return app
}


export default creatApp