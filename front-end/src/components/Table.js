/**
 * This is the table displayed on the ManageProjects page.
 * INCOMPLETE.
 */

import React from 'react';

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

// const TableBody = props => {
//     const rows = props.characterData.map((row, index) => {
//         return (
//             <tr key={index}>
//                 <td>{row.project_name}</td>
//             </tr>
//         )
//     })
// }

const Table = (props) => {
    // const { characterData } = props;
        return (
            <table>
                <TableHeader />
                {/*<TableBody characterData={characterData} />*/}
            </table>
        );
}

export default Table;