import css from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
  return (
    <table>
      <thead>
        <tr className={css.tableHeader}>
          <th className={css.tableHeaderCell}>Type</th>
          <th className={css.tableHeaderCell}>Amount</th>
          <th className={css.tableHeaderCell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({id, type, amount, currency}) => (
          <tr className={css.tableRow} key={id}>
            <td className={css.tableCell}>
              {type[0].toUpperCase() + type.slice(1)}
            </td>
            <td className={css.tableCell}>{amount}</td>
            <td className={css.tableCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
