import express from "express";
import shortId from "shortid";

const expressApp = express();
expressApp.use(express.json());

const PORT: number = parseInt(process.env.TZ || "3000", 10);

const URLs: any = {};

expressApp.get('/shorten', (request, response) => {
    const URL = request.query.url;
    const ID: string = shortId.generate();

    URLs[ID] = URL;

    response.send(`http://localhost:3000/${ID}`);
});

expressApp.listen(PORT, () => console.log(`Server is online on PORT ${PORT}`));