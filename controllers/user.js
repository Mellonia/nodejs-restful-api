const models = require('../models/user');

// let users = [
//     {
//         id: 1,
//         name: 'alice'
//     },
//     {
//         id: 2,
//         name: 'yasuo'
//     },
//     {
//         id: 3,
//         name: 'ryze'
//     }
// ]

getUsers = (req, res) => {
    // return res.json(users);

    models.User.findAll()
        .then(users => res.json(users));
}

getUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({ error: 'Incorrect id' });
    }

    models.User.findOne({
        where: {
            id
        }
    }).then(user => {
        if (!user) {
            return res.status(404).json({ error: 'No user' });
        }
        return res.json(user);
    });

    // let user = users.filter(user => user.id === id)[0]
    // if (!user) {
    //     return res.status(400).json({ error: 'Unknown user' });
    // }
    // return res.json(user);
}

deleteUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({ error: 'Incorrect id' });
    }

    models.User.destroy({
        where: {
            id
        }
    }).then(() => res.status(204).send());

    // const userIdx = users.findIndex(user => user.id === id);
    // if(userIdx === -1) {
    //     return res.status(404).json({ error: 'Unknown user' });
    // }

    // users.splice(userIdx, 1);
    // res.status(204).send();
}

addUser = (req, res) => {
    const name = req.body.name || '';
    if (!name.length) {
        return res.status(400).json({ error: 'Incorrect name' });
    }

    models.User.create({
        name
    }).then(user => {
        res.status(201).json(user);
    });

    // const id = users.reduce((maxId, user) => {
    //     return user.id > maxId ? user.id : maxId
    // }, 0) + 1;

    // const newUser = {
    //     id,
    //     name
    // }
    // users.push(newUser);
    // return res.status(201).json(newUser);
}

updateUser = (req, res) => {
    // const id = parseInt(req.params.id, 10);
    // const name = req.body.name || '';
    // if (!id) {
    //     return res.status(400).json({ error: 'Incorrect id' });
    // }
    // if (!name.length) {
    //     return res.status(400).json({ error: 'Incorrect name' });
    // }

    // models.User.update({
    //     name: name
    // }, {
    //     where: {
    //         id: id
    //     }
    // }).then(user => {
    //     return res.status(200).json(user);
    // })
    res.send();
}

module.exports = {
    getUsers,
    getUser,
    deleteUser,
    addUser,
    updateUser
}