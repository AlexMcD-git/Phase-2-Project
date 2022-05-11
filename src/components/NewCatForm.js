import React, { useState } from 'react'

function NewCatForm({ addNewCat }) {
    const initialState = {
        name: '',
        image: ''
    }

    const [formState, setFormState] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState((prevState) => ({...prevState, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch ('http://localhost:3001/cats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        })
        .then ((resp) => resp.json())
        .then ((newCat) => {
            addNewCat(newCat)
            setFormState(initialState)
        })
    }

    return (
        <div>
            <form className = 'form' onSubmit = {handleSubmit}>
                <input type="text" id = 'input' name="name"  placeholder = "Cat's name" value = {formState.name} onChange = {handleChange} /><br />
                <input type="text" id = 'input' name="image" placeholder = "Image link" value = {formState.image} onChange = {handleChange} /><br />
                <button className = 'formBtn' type="submit"> Add Cat </button>
            </form>
        </div>
  )
}

export default NewCatForm