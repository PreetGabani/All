import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Record = () => {

    let [apidata, setApiData] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);

    axios.get('https://jsonplaceholder.typicode.com/posts').then(responce => setApiData(responce.data)).catch(error => console.log(error))

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = apidata.slice(indexOfFirstData, indexOfLastData);
    const totaldata = apidata.length;

    let pagenumber = [];

    for (let i = 1; i <= Math.ceil(totaldata / dataPerPage); i++) {
        pagenumber.push(i);
    }

    const paginate = (pagenumber) => {
        setCurrentPage(pagenumber);
    }

    return (
        <>
            <div className="Record">
                {
                    !apidata ? ("No data found") : (
                        <table className="table table-striped">
                            <thead>
                                <tr className="header">
                                    <th>userID</th>
                                    <th>id</th>
                                    <th>title</th>
                                    <th>body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentData.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.userId}</td>
                                            <td>{data.id}</td>
                                            <td>{data.title}</td>
                                            <td>{data.body}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }

                <nav>
                    <ul className="pagination">
                        {pagenumber.map(number => (
                            <li>
                                <Link to="#" className="page-link" onClick={() => { paginate(number) }}>{number}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            )
        </>
    )
}

export default Record
