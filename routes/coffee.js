const express = require('express');
const router = express.Router();
const MaquinaDeCafe = require('../classes/MaquinaDeCafe');

const maquina = new MaquinaDeCafe();

router.post('/brew', (req, res) => {
    const { size, sugar } = req.body;

    try {
        const message = maquina.getVasoDeCafe(size, parseInt(sugar));
        res.json({ message });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
