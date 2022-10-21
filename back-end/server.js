import express from "express"
import cors from "cors"
import transcripts from "./api/routes/transcripts.route.js"

// This is the express config file
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/transcripts", transcripts)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app