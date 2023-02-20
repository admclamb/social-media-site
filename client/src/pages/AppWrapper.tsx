import { UserApi } from '@/api/UserApi';
import { SearchContext, UserContext } from '@/context/UserContext';
import { User } from '@/ts/types/User';
import React, { useEffect, useState } from 'react';
import { storage } from '../utils/Storage';
type Props = {
  children: React.ReactNode;
};

const AppWrapper = ({ children }: Props) => {
  const [user, setUser] = useState<User>({
    user_id: null,
    email: '',
    first_name: '',
    last_name: '',
    password: '',
  });
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    const foundRefreshToken = storage.local.get('refreshToken');
    if (foundRefreshToken) {
      (async () => {
        try {
          const response = await UserApi.loginWithToken(foundRefreshToken);
          if (response.data) {
            storage.local.set('refreshToken', response.data.refreshToken);
            delete response.data.refreshToken;
            setUser(response.data);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SearchContext.Provider value={{ search, setSearch }}>
        {children}
      </SearchContext.Provider>
    </UserContext.Provider>
  );
};

export default AppWrapper;
