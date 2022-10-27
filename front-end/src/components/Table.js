import React from 'react';
import { Link } from 'react-router-dom';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Project Name</th>
                <th>Select</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

// THIS CODE DOES NOT WORK; it only works with local storage.
// The idea is that when a project is added from the AddProject use case, it'll appear in this table.
// const TableBody = props => {
//     const rows = props.projectData.map((row, index) => {
//         return (
//             <tr key={index}>
//                 <td>{row.projectID}</td>
//                 {/* <td>{row.apiKey}</td> */}
//                 <td>
//                     {/* <button onClick={() => props.selectProject(index)}>Select</button> */}
//                     <button>
//                         <Link to='/Dashboard'>Select</Link>
//                     </button>
//                 </td>
//                 <td><button onClick={() => props.removeProject(index)}>Delete</button></td>
//             </tr>
//         );
//     });
//
//     return <tbody>{rows}</tbody>;
// }

const Table = (props) => {
    // const { projectData, selectProject, removeProject } = props;
        return (
            <table>
                <TableHeader />
                {/*<TableBody projectData={projectData} selectProject={selectProject} removeProject={removeProject} />*/}
            </table>
        );
}

export default Table;