import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { Button } from 'components/Button';
import { useRef } from 'react';

import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError = false, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const text = e.currentTarget.username.value;
    if (text) {
      onSubmit(e.currentTarget.username.value);
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.search} autoComplete="off">
      <label className={styles.label}>
        <SearchIcon />
      </label>
      <input
        type="text"
        id="search"
        className={styles.textField}
        name="username"
        placeholder="Search by github username..."
      />
      {hasError && <div className={styles.error}>No Result</div>}
      <Button>Search</Button>
    </form>
  );
};

// with ref

// export const Search = ({ hasError = false, onSubmit }: SearchProps) => {
//   const searchRef = useRef<HTMLInputElement | null>(null);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const text = searchRef.current ? searchRef.current.value : '';

//     if (text) {
//       onSubmit(text);
//       searchRef.current = null;
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={styles.search} autoComplete="off">
//       <label className={styles.label}>
//         <SearchIcon />
//       </label>
//       <input
//         type="text"
//         id="search"
//         className={styles.textField}
//         name="username"
//         ref={searchRef}
//         placeholder="Search by github username..."
//       />
//       {hasError && <div className={styles.error}>No Result</div>}
//       <Button>Search</Button>
//     </form>
//   );
// };
