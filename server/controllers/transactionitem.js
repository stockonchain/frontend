const TransactionItem = require('../models').TransactionItem

module.exports = {
	create(req, res) {
		return TransactionItem
			.create({
				content: req.body.content,
				transactionId: req.params.transactionId,
			})
			.then(todoItem => res.status(201).send(todoItem))
			.catch(error => res.status(400).send(error))
	},
}