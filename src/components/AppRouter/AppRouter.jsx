import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage/HomePage'
import { AboutPage } from '../../pages/AboutPage/AboutPage'
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage'


export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>

    )
}