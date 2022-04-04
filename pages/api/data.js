// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    res.status(200).json({
        message: "The data route requires a dataset name. /api/data/[dataset]",
    });
}
