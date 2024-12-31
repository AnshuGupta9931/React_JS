import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copystatus,setcopystatus] = useState("copy")
  const passwordGenerator = useCallback(
    ()=>{
      let password = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str += "0123456789"
      if(charAllowed) str += "*&^%$#@!?<>"
      for(let i = 0;i<length;i++){
        let char = Math.floor(Math.random()*str.length)
        password += str.charAt(char)
      }
      setPassword(password)
    }
    ,[length,numberAllowed,charAllowed,setPassword])
    useEffect(()=>{passwordGenerator()},[length,charAllowed,numberAllowed,passwordGenerator])
    const passwordref = useRef(null)
    const copytoClipboard = useCallback(()=>{
      passwordref.current?.select();
      passwordref.current?.setSelectionRange(0,100);
      window.navigator.clipboard.writeText(password)
      setcopystatus("copied")
      setTimeout(()=> setcopystatus("copy"),500)
    },[password])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
       <input type="text" value={password} placeholder='password' className='outline-none w-full px-3 py-1 rounded-md ' readOnly ref={passwordref}/>
       <button onClick={()=>copytoClipboard()} className='outline-none bg-blue-700 text-white px-2 py-1 shrink-0'>{copystatus}</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-2'>
        <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
        <label>length : {length}</label>
        <input type="checkbox" defaultChecked = {numberAllowed} onChange={()=>{setNumberAllowed((prev)=> !prev)}} />
        <label > Numbers</label>
        <input type="checkbox" defaultChecked = {charAllowed} onChange={()=>{setCharAllowed((prev)=> !prev)}} />
        <label >Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
