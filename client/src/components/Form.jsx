import { Link } from "react-router-dom"
const Form = (props) => {
    const { author, handleChange, handleSubmit, value } = props

    return (
        <form className="form container px-5" onSubmit={handleSubmit}>
            <div className="d-flex align-items-center px-5 mt-4">
                <label className="form-label">Name:</label>
                <input className="form-control" value={author.name} name="name" onChange={handleChange} />
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <input className="btn btn-light m-3" value={value} type="submit" />
                <Link className="btn btn-light " to="/">Cancel</Link>
            </div>
        </form>
    )
}

export default Form