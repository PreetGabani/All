import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShowMoreText from 'react-show-more-text';

const ProjectHome = () => {

    const data = useSelector((state) => state.addDataReducer.list);

    return (
        <>
            <div className="m-5 text-center">
                <Link to="/add" className="btn btn-outline-dark text-decoration-none">Add</Link>
            </div>
            <div className="row m-lg-5">
                {
                    data.map((item) => (
                        <div className="container card_align col mt-3">
                            <div className="card shadow-lg bg-black text-white">
                                <h5 className="card-title">Title: {item.title}</h5>
                                <div>Body:</div>
                                <ShowMoreText
                                    lines={3}
                                    more={<span className="link">Read More</span>}
                                    less={<span className="link">Read Less</span>}
                                    className="content-css"
                                    expanded={false}
                                    width={450}>
                                    <p className="card-text">{item.body}</p>
                                </ShowMoreText>
                            </div>
                        </div>
                    ))
                }
            </div>


        </>
    )
}

export default ProjectHome



