import React ,{useState} from 'react'

export default function Inputbox() {

    const [text, newText] = useState("");

    function uppercase() {
        console.log("clicked ");
        newText(text.toUpperCase());
    }

    function lowercase() {
        console.log("clicked ");
        newText(text.toLowerCase());
    }

    function clearText() {
        console.log("clicked ");
        newText("");
    }

    function handletextonchange(event) {
        console.log("chnage occured");
        newText(event.target.value);
    }

    return (
        <div className="container">
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your Text</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value= {text} onChange={handletextonchange} ></textarea>
                <button className='btn btn-primary my-4 mx-3' onClick={uppercase} >Convert to UpperCase</button>
                <button className='btn btn-primary my-4 mx-3' onClick={lowercase} >Convert to LowerCase</button>
                <button className='btn btn-primary my-4 mx-3' onClick={clearText} >Clear Text</button>

                <p>Total Words : {text.split(" ").length} Total Characters : {text.length}</p>

                <h4>Preview :</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}
