import app from "./server.js"
// import mongodb from "mongodb"
import mongoose from "mongoose"
import dotenv from "dotenv"
// import TranscriptsDAO from "./dao/transcriptsDAO.js"
// import TextTranscriptsDAO from "./dao/textTranscriptsDAO.js"
// import ProjectsDAO from "./dao/projectsDAO.js";

dotenv.config()
// const MongoClient = mongodb.MongoClient

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
// MongoClient.connect(
//   process.env.MONGO_DB_URI,
//   {
//     maxPoolSize: 50,
//     wtimeoutMS: 2500,
//     useNewUrlParser: true }
//   )
//   .catch(err => {
//     console.error(err.stack)
//     process.exit(1)
//   })
//   .then(async client => {
//     await TranscriptsDAO.injectDB(client);
//     await ProjectsDAO.injectDB(client);
//     await TextTranscriptsDAO.injectDB(client);
//     app.listen(port, () => {
//       console.log(`listening on port ${port}`)
//     })
//   })
