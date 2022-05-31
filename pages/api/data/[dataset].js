// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs").promises;

export default async function handler(req, res) {
    try {
        const { dataset } = req.query;
        const file_data = await fs.readFile(
            `data/${dataset.replace("&", "/")}.json`
        );
        const json_data = JSON.parse(file_data);
        // Do stuff
        res.status(200).json(json_data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error reading data" });
    }
}
