import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { Home,AboutMain,Contact, User,githubInfoLoader } from './components'
import Github from './components/Github/Github'
import AboutHitesh from './components/About/AboutHitesh'
import AboutHeader from './components/About/AboutHeader'
import AboutLayout from './components/About/AboutLayout'
import AboutAnshuGupta from './components/About/AboutAnshuGupta'
// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout/>,
//     children : [
//       {path: "",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='aboutmain' element={<AboutLayout/>}>
        <Route path='' element={<AboutMain/>}/>
       < Route path='hitesh' element={<AboutHitesh/>} />
       <Route path='anshu' element={<AboutAnshuGupta/>}/>
    </Route>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
    </Route>
   )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
