import { Search } from 'components/Search';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { UserCard } from './components/UserCard/UserCard';

import { defaultUser } from './mock/index';
import { useState } from 'react';
import { LocalGithubUser, GithubUser } from 'types';
import { GithubError } from './types/user';
import { isGithubUser } from 'utils/typeguards';
import { extractLocalUser } from 'utils/extract-local-user';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
