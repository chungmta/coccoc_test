import React from 'react';
import { AuthContext } from '../containers/AuthenticatedGuard';

export function useAuth() {
  return React.useContext(AuthContext);
}
