import profile from '../Profile/Profile.module.css';
import css from './CardStatsItem.module.css';

const CardStatsItem = props => {
  return (
    <li className={css.cardStatsItem}>
      <span className={profile.profileTextNormal}>{props.text}</span>{' '}
      <span className={profile.profileTextBold}>{props.stats}</span>
    </li>
  );
};

export default CardStatsItem;
