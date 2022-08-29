import React from "react"
import axios from "axios"
import Form from './Form'
import { Link, useHistory, useParams } from 'react-router-dom'

const NewAuthor = () => {
    const [author, setAuthor] = React.useState({
        name: ''
    })
    const [isCreated, setIsCreated] = React.useState(false)
    const [errors, setErrors] = React.useState([]);
    const history = useHistory()
    const { id } = useParams()
    const [isIdExist, setIsIdExist] = React.useState(true)

    React.useEffect(() => {

        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data.author))
            .catch(err => setIsIdExist(false))
    }, [])

    const handleChange = (e) => {
        setIsCreated(false)
        setAuthor({ ...author, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/update/${id}`, author)
            .then(res => {
                setIsCreated(true)
                history.push('/')
            })
            .catch(err => {
                const data = err.response.data;
                const errorMessages = [];
                if ("errors" in data) {
                    for (let field in data.errors) {
                        const validationError = data.errors[field];
                        errorMessages.push(validationError.message);
                    }
                }
                setErrors(errorMessages);
            })


    }
    return (
        <div>
            <Link className="m-3" to="/">Home</Link>
            {!isIdExist ?
                <div className="container mt-5">
                    <p>"We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
                    <Link to='/new'>Click here please</Link>
                </div> :
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="mt-5">Edit this author</h3>
                    {errors.map((errorMessage, index) => (
                        <div className="text-danger" key={index}>{errorMessage}</div>
                    ))}
                    <Form author={author} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
            }
        </div>
    )
}

export default NewAuthor