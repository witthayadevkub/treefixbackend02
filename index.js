const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require('cors')
const multer = require("multer")
const path = require("path")

const authRoute = require("./routes/auth")
const authUser = require("./routes/user")
const authPost = require("./routes/posts")
const authCat = require("./routes/categories")
const products = require('./routes/products');
const orders = require('./routes/orders');

dotenv.config()
app.use(cors())
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")))

const db = process.env.MONGODB_URI
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /*  useCreateIndex: true,
    useFindAndModify: true,*/
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))

const storage = multer.diskStorage({
  destination: (req, file, callb) => {
    callb(null, "images")
  },
  filename: (req, file, callb) => {
    callb(null, req.body.name)
  },
})
const upload = multer({ storage: storage })
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded")
})

app.use("/auth", authRoute)
app.use("/users", authUser)
app.use("/posts", authPost)
app.use("/category", authCat)
app.use('/products', products);
app.use('/orders', orders);
const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log("backend running..."+port)
})
