import css from '../CardStats/CardStats.module.css';

const CardStats = ({children}) => {
  return <ul className={css.cardStats}>{children}</ul>;
};

export default CardStats;
