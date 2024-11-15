import React from 'react'
import Header from './header';
import Footer from './Footer';
import { Outlet } from 'react-router';
import { useContext } from 'react';
import { Theme } from '../context';

function Layout() {
    const {theme, setTheme} = useContext(Theme)

    return (
        <div id='root' style={{backgroundColor: theme ? "#212121" : "white"}}>
            <Header />

            <Outlet />
            
            <Footer />
        </div>
    )
}

export default Layout;