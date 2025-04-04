import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router'

function App() {
  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  )
}

export default App




// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import SignInPage from './pages/SignInPage'; // Убедись, что этот путь правильный

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/menuPage" element={<MenuPage />} />
//         <Route path="/blogPage" element={<BlogPage />} />
//         <Route path="/aboutPage" element={<AboutPage />} />
//         <Route path="/feedbackPage" element={<FeedbackPage />} />
//         <Route path="/reservationPage" element={<ReservationPage />} />
//         <Route path="/signin" element={<SignInPage />} /> {/* Добавь этот маршрут */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
