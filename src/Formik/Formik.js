import React from 'react'
import { useFormik } from 'formik'
// import * as Yup from 'yup'

const initialValues = {
    title: '',
    body: '',
}

const onSubmit = values => {
    console.log(values)
}

const validate = values => {
    let errors = {}

    if (!values.title) {
        errors.title = 'Required'
    } else if (values.title.length > 20) {
        errors.title = 'Title length Must be 20 or Less'
    }

    if (!values.body) {
        errors.body = 'Required'
    } else if (values.body.length < 100) {
        errors.body = 'Body length Must be 100 or More'
    }
    return errors
}

// const validationSchema = Yup.object({
//     title:Yup.string().required("Required"),
//     body: Yup.string().required("Required")
// })

const Formik = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
        // validationSchema
    })

    // console.log(formik.errors)

    return (
        <>
            <div className="container">
                <h1 className="text-center mt-5">Formik Validation</h1>
                <div className="row mt-5">
                    <div className="col-md-4 shadow-lg mx-auto p-4">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label className="control-label " for="title">Title:</label>
                                <input type="text" className="form-control mt-2" id="title" placeholder="Enter Title Here" name="title"
                                    onChange={formik.handleChange} value={formik.values.name}
                                />
                                {formik.errors.title ? <div className="error">{formik.errors.title}</div> : null}
                            </div>

                            <div className="form-group">
                                <label className="control-label mt-3" for="body">Body:</label>
                                <textarea type="text" row="5" className="form-control mt-2" id="body" placeholder="Enter Body Here" name="body"
                                    onChange={formik.handleChange} value={formik.values.name}
                                />
                                {formik.errors.body ? <div className="error">{formik.errors.body}</div> : null}
                            </div>

                            <div className="form-group mt-3 d-grid">
                                <button type="submit" className="btn btn-outline-dark">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Formik
