const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    const { text } = req.query;

    try {
        if (!text) throw new Error("no text");

        res.json({ text: text.split("").reverse().join("") });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
