// write your custom hook here to control your checkout form
import React, { useState } from 'react'



const useForm = (initValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values)
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    console.log(values)
    };

    return [ values, setValues, handleChanges, handleSubmit, showSuccessMessage]
}

export default useForm