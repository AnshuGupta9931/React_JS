import React from "react";
function Card({username,btntext = "visit me"}){
    console.log(username)
    return(
        <>
        <div className="flex flex-col rounded-xl  p-4 mb-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">{username}
            <h1 className="font-RubikBold "> {btntext}</h1>
            <h1 className="font-bold font-RubikBold">{username}</h1>
          </div>
          <div className="flex  justify-between font-mono">
          </div>
        </div>
      </div>
        </>
    )
}
export default Card