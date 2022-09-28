import React from "react";

function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    
    const [memesData, setMemesData] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemesData(data))
    },[])
    
    function getMemeImage(event) {
        event.preventDefault()
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))

    }

    return (
        <main>
            <div className="main">
                <form className="form">
                    <input 
                        className="inputs"
                        type="text" 
                        placeholder=" top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        className="inputs"
                        type="text" 
                        placeholder=" Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button className="button" onClick={getMemeImage}>Get a new meme Image</button>
                </form>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className="meme-image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
  }
  
  export default Meme;