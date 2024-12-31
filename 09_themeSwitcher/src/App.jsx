import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  const [themeMode,setThemeMode] = useState("light");
  const darkTheme = ()=>{
    setThemeMode("dark");
  }
  const lightTheme = ()=>{
    setThemeMode("light");
  }
  //actual change in theme
  useEffect(()=>{
    const actualTheme = document.querySelector('html').classList
    actualTheme.remove("light","dark");
    actualTheme.add(themeMode)

  },[themeMode])
  return (
    <>
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
        </div>
    </div>
    </ThemeProvider>
    </>
  )
}

export default App
