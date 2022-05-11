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
        <>
            <form onSubmit = {handleSubmit}>
                <label> Name: </label>
                <input type="text" name="name"  value = {formState.name} onChange = {handleChange} />
                <label> Image: </label>
                <input type="text" name="image" value = {formState.image} onChange = {handleChange} />
                <button type="submit"> Add Cat </button>
            </form>
        </>
  )
}

export default NewCatForm