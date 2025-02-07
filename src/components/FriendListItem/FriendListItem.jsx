import css from './FriendListItem.module.css';
import profile from '../Profile/Profile.module.css';
import Card from '../Card/Card';

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li>
      <Card>
        <img
          className={css.friendAvatar}
          src={avatar}
          alt={`${name} avatar`}
          width="48"
        />
        <p className={profile.profileTextNormal}>{name}</p>
        <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </Card>
    </li>
  );
};

export default FriendListItem;
