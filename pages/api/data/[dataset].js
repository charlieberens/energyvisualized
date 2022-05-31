// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
    try {
        const { dataset } = req.query;

        const root =
            process && process.env.NODE_ENV === "development"
                ? "localhost:3000"
                : "energyvisualized.com";

        const our_res = await fetch(
            `http://${root}/data/${dataset.replace("&", "/")}.json`
        ); //
        const data = await our_res.json();

        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}
