import css from './Card.module.css';

const Card = props => {
  const bigCard = props.bigCard;
  const style = !bigCard
    ? css.card
    : `${css.card} ${css.bigCard}`;

  return <div className={style}>{props.children}</div>;
};

export default Card;
