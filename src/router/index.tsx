import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Claim from '@/pages/Claim'
import Home from '@/pages/Home'
import Play from '@/pages/Play'
import Win from '@/pages/Win'
import Lose from '@/pages/Lose'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/claim" element={<Claim />} />
            <Route path="/play" element={<Play />} />
            <Route path="/win" element={<Win />} />
            <Route path="/lose" element={<Lose />} />
            
        </Routes>
    )
}

export default Router

{/* <Route path='/' element={<Navigate to={'/signin'} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/overview" element={<OverView />} />
            <Route path="/all-courses" element={<AllCourses />} />
            <Route path='/admin/*' element={<Admin />} /> */}