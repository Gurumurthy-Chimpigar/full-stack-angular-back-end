import express from "express";
import { routes } from "./routes";
import { db } from "./db";

const app = express();

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});
app.get('/hello', (req, res) => {
    res.status(200).json({ name: "guru12" });
})
const start = async () => {
    await db.connect('mongodb://localhost:27017');
    app.listen(8080);
    console.log('Express server is listening to port 8080');
}
