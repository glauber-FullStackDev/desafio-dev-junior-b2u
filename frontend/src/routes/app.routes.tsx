import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Brands from '../pages/brands';
import Home from '../pages/home';
import Users from '../pages/users';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route index path="/brands" element={<Brands />} />
            </Routes>
        </BrowserRouter>
    );
}