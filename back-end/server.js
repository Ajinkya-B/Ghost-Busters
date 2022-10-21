import express from "express"
import cors from "cors"
import transcripts from "./api/transcripts.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/transcripts", transcripts)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app