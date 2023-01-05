import { AuthProvider, RequireAuth } from './containers/AuthenticatedGuard';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Routes, Route, Outlet } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import { Fragment } from 'react';
import { ConfigProvider } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#4fba69',
    fontFamily: 'Segoeui',
    fontSize: 13,
  },
};

function App() {
  return (
    <AuthProvider>
      <ConfigProvider theme={theme}>
        <Routes>
          <Route element={<Layout />} errorElement={<ErrorPage />}>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <HomePage />
                </RequireAuth>
              }
            />

            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </ConfigProvider>
    </AuthProvider>
  );
}

export default App;

function Layout() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

// function AuthStatus() {
//   const auth = useAuth();
//   const navigate = useNavigate();

//   if (!auth.user) {
//     return <p>You are not logged in.</p>;
//   }

//   return (
//     <p>
//       Welcome {auth.user}!{' '}
//       <button
//         onClick={() => {
//           auth.signout(() => navigate('/'));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   );
// }
