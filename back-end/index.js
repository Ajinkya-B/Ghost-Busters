import app from "./server.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const port = process.env.PORT || 5000

// format: mongoose.connect(uri, options{dbName: connects to specific database});
mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.PROJECTS_NS,
});

const db = mongoose.connection

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});