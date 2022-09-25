import React from "react";


function Meme() {
    return (
        <div className="main">
            <form className="form">
                <input 
                    className="inputs"
                    type="text" 
                    placeholder=" top text"
                />
                <input 
                    className="inputs"
                    type="text" 
                    placeholder=" Bottom text"
                />
                <button className="button">Get a new meme Image</button>
            </form>
        </div>
    );
  }
  
  export default Meme;