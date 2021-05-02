import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { list } from '../services/apiService';

const Courses = () => {
    const [id] = useState();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        list('courses', data => {
            setCourses(data);
        })
    }, []);

    return (
        <div className="container">
            <h1>Courses</h1>
            <table>
                <thead>
                    <tr>
                        <th>Course name</th>
                        <th>Course points</th>
                        <td>
                            <Link to="/courses/0">Add new</Link>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(c => (
                        <tr key={c._id}>
                            <td>{c.name}</td>
                            <td>{c.points}</td>
                            <td>
                                <Link to={`/courses/${c._id}`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Courses;
