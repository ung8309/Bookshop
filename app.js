const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();


app.listen(process.env.PORT);

const userRouter = require('./routers/users');
const bookRouter = require('./routers/books');
const likeRouter = require('./routers/likes');
const cartRouter = require('./routers/carts');
const orderRouter = require('./routers/orders');

app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/likes", likeRouter);
app.use("/carts", cartRouter);
app.use("/orders", orderRouter);
