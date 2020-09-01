module.exports = {
    checkAgeIsNumber(req, res, next) {
        const { age } = req.body;

        if (typeof age != "number") {
            console.log('Deu erro aqui');
            return res.status(400).json({ error: 'Invalid age.' });
        }
        next();
    },
}