import {createBrowserRouter} from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Main from './pages/main/Main'
import Menu from './pages/menu/Menu'
import Reservation from './pages/reservation/Reservation'
import Soup from './pages/soup/Soup'
import Starter from './pages/starter/Starter'
import Cart from './components/Cart/Cart'
import CommentForm from './pages/commentform/CommentForm'
import SignIn from './components/sigin/SignIn'

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
                path: 'CartPage',
                element: <Cart/>
            },
             {
                path: 'signinPage',
                element: <SignIn/>
            },
            {
                path: 'commentformPage',
                element: <CommentForm/>
            },
            {
                path: 'aboutPage',
                element: <About/>
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