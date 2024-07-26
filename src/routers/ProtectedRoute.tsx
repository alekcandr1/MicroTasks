// @flow
import * as React from 'react';
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
    children: ReactElement
};
export const ProtectedRoute = ( {children}: ProtectedRouteProps ): ReactElement | null=> {
    // const access = true
    const access = true
    return access ? children : <Navigate to={ '/login' } />
}