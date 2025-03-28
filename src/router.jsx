import {createBrowserRouter} from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Main from './pages/main/Main'
import Menu from './pages/menu/Menu'
import Reservation from './pages/reservation/Reservation'
import Soup from './pages/soup/Soup'
import Starter from './pages/starter/Starter'
import Portfolio from './pages/portfolio/Portfolio'

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'portfolioPage',
                element: <Portfolio/>
            },
            {
                path: 'aboutPage',
                element: <About/>
            },
            {
                path: 'blogPage',
                element: <Blog/>
            },
            {
                path: 'contactPage',
                element: <Contact/>
            },
            {
                path: 'mainPage',
                element: <Main/>
            },
            {
                path: 'menuPage',
                element: <Menu/>
            },
            {
                path: 'reservationPage',
                element: <Reservation/>
            },
            {
                path: 'soupPage',
                element: <Soup/>
            },
            {
                path: 'starterPage',
                element: <Starter/>
            },
        ]
    }
])