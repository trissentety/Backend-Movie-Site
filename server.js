import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"

const app = express()

app.use(cors())
app.use(express.json()) // req send and recieve with json

app.use("/api/v1/reviews", reviews) //for url use reviews route
app.use("*", (req, res) => res.status(404).json({error: "not found"})) //* anything else

export default app