const app = require("./app");
const { initDb } = require("./resources/db");
require("dotenv").config();

(async () => {
    try {
        initDb();
    } catch (err) {
        console.error("Erro ao sicroncizar o banco de dados")
    }
})();

app.listen(process.env.PORT, () => console.log(`Server running in port ${process.env.PORT}!!!`));