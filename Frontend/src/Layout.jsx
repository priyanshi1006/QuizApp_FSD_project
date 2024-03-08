import React from 'react';
import { Outlet } from 'react-router-dom';
 import '/src/component/Header.jsx';
function Layout() {
    return (  <>
    <Header/>
    <Outlet/>
    
    </>);
}

export default Layout;