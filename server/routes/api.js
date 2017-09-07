const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transaction')
const transactionItemController = require('../controllers/transactionitem')

/*
 * Transactions
 */
router.route('/transaction')
	.get(transactionController.list)
	.post(transactionController.create)

router.route('/transaction/:transactionId')
	.get(transactionController.find)
	.put(transactionController.update)

router.route('/transaction/:transactionId/item')
	.post(transactionItemController.create)

module.exports = router