function Button({color, handlecolor}) {
   return(
    <div>
        <button
              onClick={()=> handlecolor(color)}
              className="outline-none w-full h-full text-white font-semibold rounded-md px-4 py-2"
              style={{
                backgroundColor: color,
                margin: 0,
              }}
            >
              {color}
            </button>
    </div>
   ) 
}
export default Button;