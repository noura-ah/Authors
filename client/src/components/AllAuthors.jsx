import React from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import DeleteBtn from "./DeleteBtn"

const AllAuthors = () => {
    const [authors, setAuthors] = React.useState([])
    const [isDeleted, setIsDeleted] = React.useState(false)

    React.useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthors(res.data.authors))
            .catch(err => console.log(err))
    }, [isDeleted])
    console.log('here')
    const handleDelete = (id) => {
        setAuthors(authors.filter(a => a._id == id))
        setIsDeleted(true)
    }
    return (
        <div className="container p-5">
            <Link  to='/new'>Add an author</Link>
            <h6 className="mt-3">We have quotes by:</h6>
            <table className="table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(a =>
                        <tr key={a._id}>
                            <td>{a.name}</td>
                            <td>
                                <Link className="btn btn-dark mx-1" to={l => `/edit/${a._id}`}>Edit</Link>
                                <DeleteBtn id={a._id} handleDelete={() => handleDelete(a._id)} />
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors