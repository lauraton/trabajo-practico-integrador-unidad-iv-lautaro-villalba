import express from "express";


const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, async () => {
    await startDB();
    console.log(`Servidor listo https://localhost:${PORT}`);
})