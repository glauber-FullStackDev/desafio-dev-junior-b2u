import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header'

export default function Main() {
  return (
    <div
        className='min-h-screen min-w-screen bg-slate-100 flex flex-col items-center'
    >
        <Header/>
        <div
            className='container flex justify-center flex-1 min-w-full p-3'
        >
            <Outlet/>
        </div>
    </div>
  )
}
