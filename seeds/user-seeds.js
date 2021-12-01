const { User } = require('../models/Index');

const userData = [{
        username: 'Linh',
        password: '12345678'

    },
    {
        username: 'Yonna',
        password: '12345678'
    },
    {
        username: 'Ralphie',
        password: '12345678'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;