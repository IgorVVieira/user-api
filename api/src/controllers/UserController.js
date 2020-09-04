const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const user = await User.findAll();
        return res.json(user);
    },

    async store(req, res) {
        const user = await User.create(req.body);
        return res.json(user);
    },

    async show(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'User does not exist' });
        }
        return res.json(user);
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, email, age } = req.body;

        const user = await User.update(
            {
                name,
                email,
                age,
            },
            {
                returning: true,

                where: {
                    id,
                },
            },
        );

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        return res.json(user);
    },

    async delete(req, res) {
        const { id } = req.params;

        const user = await User.destroy({
            where: {
                id,
            },
        });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        return res.json(user);
    }
};