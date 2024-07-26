import * as React from 'react';
import { createBrowserRouter, Navigate, Outlet, RouteObject } from 'react-router-dom';
import App from '../App';
import { Error404 } from '../components/pages/Error404';
import { Adidas } from '../components/pages/Adidas';
import { Puma } from '../components/pages/Puma';
import { Abibas } from '../components/pages/Abibas';
import { Prices } from '../components/pages/Prices';
import { Model } from '../components/pages/Model';
import { ProtectedPage } from '../components/pages/ProtectedPage';
import { ProtectedRoute } from './ProtectedRoute';
import { Login } from '../components/pages/Login';
import { ReactElement } from 'react';

const PATH = {
    ERROR: '/error',
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/price',
    MODEL: '/:manufacturer/:modelID',
    PROTECTED_PAGE: '/protected_page',
    LOGIN: '/login'
} as const;

const publicRoutes: RouteObject[] = [

    {
        path: PATH.ERROR,
        element: <Error404 />,
    },
    {
        path: PATH.ADIDAS,
        element: <Adidas />,
    },
    {
        path: PATH.PUMA,
        element: <Puma />,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas />,
    },
    {
        path: PATH.PRICES,
        element: <Prices />,
    },
    {
        path: PATH.MODEL,
        element: <Model />,
    },
    {
        path: PATH.LOGIN,
        element: <Login />,
    },
]
const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED_PAGE,
        element: <ProtectedPage />,
    },
]


export const PrivateRoute = (): ReactElement | null => {
    const isAuth = true
    return isAuth ? <Outlet /> : <Navigate to={ '/login' } />
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Navigate to={ 'error' } />,
        children: [
            ...publicRoutes,
            {
                element: <PrivateRoute />,
                children: [...privateRoutes]
            }
        ]
    }
])