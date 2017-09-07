module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    transactionid: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    // type: DataTypes.BOOLEAN
  }, {
    // underscored: false,
    timestamps: false,
    freezeTableName: true,
    tableName: 'transactionstock'
  })

  Transaction.associate = function(models) {
    Transaction.hasMany(models.TransactionItem, {
      foreignKey: 'transactionid',
      as: 'Items',
      sourceKey: 'transactionid'
    })
  }

  return Transaction
}