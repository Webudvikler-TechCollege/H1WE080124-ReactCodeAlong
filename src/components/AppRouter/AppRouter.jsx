import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage/HomePage'
import { AboutPage } from '../../pages/AboutPage/AboutPage'
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage'
import { PosterListPage } from '../../pages/PosterListPage/PosterListPage'

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posters" element={<PosterListPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>

    )
}