import React from 'react';
import { Link, Navigate, NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { Adidas } from './components/pages/Adidas';
import { Puma } from './components/pages/Puma';
import { Abibas } from './components/pages/Abibas';
import styles from './components/Site.module.css';
import { S } from './components/pages/_styles';
import { Model } from './components/pages/Model';
import { Prices } from './components/pages/Prices';


const PATH = {
    PAGE1: 'adidas',
    PAGE2: 'puma',
    PAGE3: 'abibas',
    PAGE4: 'price',
    PROTECTED_PAGE: 'protected_page',
} as const;

function App() {
    const navigate = useNavigate()
    const navigateHandlerPrev = () => {
        navigate(-1)
    }
    const navigateHandlerNext = () => {
        navigate(1)
    }
    return (
        <div>
            <div className={ styles.header }><h1>HEADER</h1></div>
            <div className={ styles.body }>
                <div className={ styles.nav }>
                    <S.NavWrapper><NavLink to={ PATH.PAGE1 }>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={ PATH.PAGE2 }>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={ PATH.PAGE3 }>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={ PATH.PAGE4 }>Цены опт</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={ PATH.PROTECTED_PAGE }>Protected page</NavLink></S.NavWrapper>
                </div>

                <div className={ styles.content }>
                    <div className={ styles.HorizontalNavigation }>
                        <button className={ styles.ButtonLikeLink } onClick={ navigateHandlerPrev }>Prev</button>
                        <Link to={ '/' } className={ styles.LinkLikeButton }>Home</Link>
                        <button className={ styles.ButtonLikeLink } onClick={ navigateHandlerNext }>Next</button>
                    </div>
                    <Outlet />

                    {/*<Routes>*/ }
                    {/*    <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>*/ }

                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/ }
                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/ }
                    {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/ }
                    {/*    <Route path={PATH.PAGE4} element={<Prices/>}/>*/ }

                    {/*    <Route path={'/:manufacturer/:modelID'} element={<Model />}/>*/ }
                    {/*    <Route path={'/*'} element={<Error404/>}/>*/ }

                    {/*</Routes>*/ }
                </div>
            </div>
            <div className={ styles.footer }>abibas 2023</div>
        </div>
    );
}

export default App;

