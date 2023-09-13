import express from "express";
import { sequelize } from "./config/config";
import path from "path";
import passport from "./config/auth";
import session from "express-session"
import userRoute from "./routes/userRoute";
import peopleRoute from "./routes/peopleRoute";
import activityRoute from "./routes/activityRoute";
import loginRouter from "./routes/login";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(passport.initialize());
app.use(passport.session());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Servidor aberto");
});

app.use("/login", loginRouter);

app.use("/users", userRoute);

app.use("/people", peopleRoute);

app.use("/activity", activityRoute);

async function initializeApp() {
  try {
    await sequelize.authenticate();

    await sequelize.sync();
    console.log("Modelos sincronizados com o banco de dados.");

    app.listen(PORT, () => {
      console.log(`Servidor Express iniciado na porta ${PORT}.`);
    });
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error);
  }
}

initializeApp();
