const db = require('../models');
const { v4: uuidv4 } = require('uuid');


module.exports = {
    createUser: async (value) => {
        try{
            const user = await db.User.create({
                ...value,
                id: uuidv4()
            })
            return user.dataValues;
        } catch (error) {
            throw error;
        }
    },
    getUsers: async () => {
        try{
            const users = await db.User.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    },
    getUser: async (value) => {
        try {
            const user = await db.User.findOne({
                where: {
                    ...value
                }
            });

            return user ? user : null;
        } catch (error) {
            throw error;
        }
    }
}