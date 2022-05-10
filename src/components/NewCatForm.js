import React, { useState } from 'react'

function NewCatForm() {
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
    }

    return (
        <>
            <form onSubmit = {handleSubmit}>
            <input type="text" name="name"  value = {formState.name} onChange = {handleChange} />
            <input type="text" name="image" value = {formState.image} onChange = {handleChange} />
            <button type="submit"> Add Cat </button>
            </form>
        </>
  )
}

export default NewCatForm