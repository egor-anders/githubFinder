import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {}

export const ThemeSwitcher = ({}: ThemeSwitcherProps) => {
  const [isDark, setIsDark] = useState(false);

  const themeText = isDark ? 'dark' : 'light';
  const ThemeIcon = isDark ? MoonIcon : SunIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', themeText);
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
