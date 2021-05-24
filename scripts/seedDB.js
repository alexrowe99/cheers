const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/beerdb');

const userSeed = [
	{
		username: 'User1',
		email: 'user1@email.com',
		password: 'password1234',
	},
	{
		username: 'User2',
		email: 'user2@email.com',
		password: 'password1234',
	},
	{
		username: 'User3',
		email: 'user3@email.com',
		password: 'password1234',
	},
	{
		username: 'User4',
		email: 'user4@email.com',
		password: 'password1234',
	},
	{
		username: 'User5',
		email: 'user5@email.com',
		password: 'password1234',
	},
];

db.User.remove({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
