import { SearchContext, UserContext } from '@/context/UserContext';
import { User } from '@/ts/types/User';
import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const AppWrapper = ({ children }: Props) => {
  const [user, setUser] = useState<User>({
    user_id: null,
    email: '',
    first_name: '',
    last_name: '',
  });
  const [search, setSearch] = useState<string>('');
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SearchContext.Provider value={{ search, setSearch }}>
        {children}
      </SearchContext.Provider>
    </UserContext.Provider>
  );
};

export default AppWrapper;
