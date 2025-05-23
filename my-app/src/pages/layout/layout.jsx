import React from 'react'
import { Footer, Heder } from '../lazy'
import { Outlet } from 'react-router'
import {Toaster } from 'sonner'

const Layout = () => {
    return (
        <div>
            <header><Heder /></header>
            <main className='max-w-[1600px] m-auto'><Outlet /></main>
            <Toaster  />
            <footer className='max-w-[1600px] m-auto '><Footer /></footer>
        </div>
    )
}

export default Layout
