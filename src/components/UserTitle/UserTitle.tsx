import { LocalGithubUser } from 'types';
import styles from './UserTitle.module.scss';

interface UserTitleProps
  extends Pick<LocalGithubUser, 'name' | 'login' | 'created'> {}

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});
export const UserTitle = ({ created, login, name }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created));

  return (
    <div className={styles.userTitle}>
      {name ? <h2>{name}</h2> : <h2>Unknown</h2>}
      <a href={`https://github.com/${login}`} target="_blank">{login}</a>
      <span>{joinedDate}</span>
    </div>
  );
};
