import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Project ID</th>
                <th>API Key</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.projectData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.projectID}</td>
                <td>{row.apiKey}</td>
                <td><button onClick={() => props.removeProject(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { projectData, removeProject } = props;
        return (
            <table>
                <TableHeader />
                <TableBody projectData={projectData} removeProject={removeProject} />
            </table>
        );
}

export default Table;