const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    const { text } = req.query;

    try {
        if (!text) throw new Error("no text");

        const reversed = text.split("").reverse().join("");

        res.status(200).json({
            text: reversed,
            palindrome: text === reversed ? true : undefined,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
