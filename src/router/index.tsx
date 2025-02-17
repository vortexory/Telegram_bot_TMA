import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Claim from '@/pages/Claim'
import Home from '@/pages/Home'
import Play from '@/pages/Play'
import Shop from '@/pages/Shop'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/claim" element={<Claim />} />
            <Route path="/play" element={<Play />} />
            <Route path="/shop" element={<Shop />} />
        </Routes>
    )
}

export default Router