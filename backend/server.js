import express from "express" 
import cors from "cors"
import { connectDB }  from "./config/db.js"
import productRouter from "./routes/productRoute.js"

const port = 5000
     
const app = express()

connectDB();

//middleware
app.use(express.json())
app.use(cors())

// api endpoint
app.use('/api/producto',productRouter)
app.use("/images", express.static('uploads')) 
// app.use('/api/users', router)



app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port, () => console.log(`Servidor inicado en el puerto ${port}`))