import React from 'react';
import { Route, Redirect } from 'react-router';
import { authControl } from '../../components/atom/admin/auth/Login';
import Cookies from 'js-cookie';

const UserRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            Cookies.get('usrCks') === 'User' ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/dang-nhap',
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);
export default UserRoute;
