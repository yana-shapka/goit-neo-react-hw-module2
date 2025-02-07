import CardStats from '../CardStats/CardStats';
import css from './Profile.module.css';
import CardStatsItem from '../CardStatsItem/CardStatsItem';
import Card from '../Card/Card';

const Profile = ({name, tag, location, image, stats}) => {
  return (
    <Card bigCard={true}>
      <div className={css.profileWrapper}>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.profileTextBold}>{name}</p>{' '}
        <p className={css.profileTextGrey}>@{tag}</p>{' '}
        <p className={css.profileTextGrey}>{location}</p>
      </div>
      <CardStats>
        <CardStatsItem text="Followers" stats={stats.followers}></CardStatsItem>
        <CardStatsItem text="Views" stats={stats.views}></CardStatsItem>
        <CardStatsItem text="Likes" stats={stats.likes}></CardStatsItem>
      </CardStats>
    </Card>
  );
};

export default Profile;
