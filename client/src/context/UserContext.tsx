import { User } from '@/ts/types/User';
import { createContext } from 'react';

export const UserContext = createContext<User>({
  user_id: null,
  email: '',
  first_name: '',
  last_name: '',
});

export const SearchContext = createContext<string>('');
