import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProvider'
function App() {
  

  return (
    <UserContextProvider>
     <h1>Chai aur hitesh sir</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
