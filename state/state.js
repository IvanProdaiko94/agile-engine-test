const ActionDebit = "debit";
const ActionCredit = "credit";

let balance = 0;
const transactions = {};
const history = [];

module.exports = {
    resolveCurrentBalance: () => balance,
    resolveTransactionsHistory: () => history,
    resolveTransactionsByID: transactionId => transactions[transactionId],
    commitTransaction: transaction => {
        transactions[transaction.id] = transaction;
        history.push(transaction);
        if (transaction.action === ActionCredit) {
            balance = balance - transaction.amount;
        } else {
            balance = balance + transaction.amount;
        }
    },
    ActionDebit: ActionDebit,
    ActionCredit: ActionCredit,
};