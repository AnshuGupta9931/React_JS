import { useState } from 'react';
import Button from './Button';

function App() {
  const [color, setColor] = useState("olive");
  const colorchange = (newcolor)=>{
    setColor(newcolor)
  }
  const arr = ["red","green","yellow","pink","lavender","blue","orange","brown","black","olive"]
  return (
    <>
      <div className="w-full h-screen duration-1000" style={{ backgroundColor: color }}>
        <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
          <div className="shadow-lg flex bg-white rounded-xl gap-3 px-3 py-2">
            {
              arr. map((item)=>{
                <Button color = {item} handlecolor={colorchange}/>
              })
            }
            <Button color="red" handlecolor={colorchange} />
            <Button color="green" handlecolor = {colorchange}/>
            <Button color="yellow" handlecolor={colorchange} />
            <Button color="pink" handlecolor = {colorchange}/>
            <Button color="lavender" handlecolor={colorchange} />
            <Button color="blue" handlecolor = {colorchange}/>
            <Button color="orange" handlecolor={colorchange} />
            <Button color="brown" handlecolor = {colorchange}/>
            <Button color="black" handlecolor={colorchange} />
            <Button color="olive" handlecolor = {colorchange}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
