import { ThemeSwitcher } from '../ThemeSwitcher';
import styles from './Header.module.scss';

interface HeaderProps { }

export const Header = ({ }: HeaderProps) => (
  <header className={styles.header}>
    <h1 className={styles.logo}>GithubFinder</h1>
    <ThemeSwitcher/>
  </header>
);
