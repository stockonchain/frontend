module.exports = (sequelize, DataTypes) => {
  const TransactionItem = sequelize.define('TransactionItem', {
    itemid: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    // underscored: false,
    timestamps: false,
    freezeTableName: true,
    tableName: 'transaction_item'
  })

  TransactionItem.associate = models => {
    TransactionItem.belongsTo(models.Transaction, {
      foreignKey: 'transactionid',
      onDelete: 'CASCADE',
      targetKey: 'transactionid'
    })
  }

  return TransactionItem
}