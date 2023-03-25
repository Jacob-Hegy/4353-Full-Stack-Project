import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import quoteRoutes from "./routes/quote.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

/* WELCOME */
app.get("/", async (req, res) => {
  res.send("Welcome to our database");
});

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/quote", quoteRoutes);

export default app;
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
