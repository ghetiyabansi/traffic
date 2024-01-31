import React, { useState } from 'react'
import './Form.css'


const Form = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
            <div className='parent'>
                <div className='child'>
                    <h1 className="title">Form Title</h1>
                    <form>
                        <div className='form'>
                            <label>Name:</label>
                            <input type="text" name="name" /> <br /><br />
                            <label>Contact:</label>
                            <input type="text" name="contact" /><br /><br />
                            <label>Email:</label>
                            <input type="text" name="email" /><br /><br />
                            <label>Address:</label>
                            <input type="text" name="address" /><br /><br />
                            <label>Pincode:</label>
                            <input type="text" name="pincode" /><br /><br />
                            <input type="submit" value="Submit" className="submit-button" />
                        </div>
                        <div className="image">
                            <input type="file" onChange={handleChange} />
                            <img src={file} className='image_resize' />
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Form