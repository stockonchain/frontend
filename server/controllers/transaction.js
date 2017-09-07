const { Transaction, TransactionItem } = require('../models')

module.exports = {
	create(req, res) {
		return Transaction.create({
				title: req.body.title,
			})
			.then(todo => res.status(201).send(todo))
			.catch(error => res.status(400).send(error))
	},
	list(req, res) {
		return Transaction.all({
				include: [{
					model: TransactionItem,
					as: 'Items'
				}]
			})
			.then(todos => res.status(200).send(todos))
			.catch(error => res.status(400).send(error))
	},
}