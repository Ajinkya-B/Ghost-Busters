import React from "react";
import {NavBtn, NavBtnLinkRemove, NavBtnLinkSelect} from "./NavbarElements";

// The header of the table that lists the project names
const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Project Name</th>
            <th>Action</th>
            {/*<th>Remove</th>*/}
        </tr>
        </thead>
    );
}

// The body of the table
export default function TableBody(props) {
    const rows = props.projectData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.project_name}</td>
                <td>

                    <NavBtn>
                        {/*<Router>*/}
                        {/*<Route exact path= '/projects/:id' element = {<Project project_id = {row.project_id}/>} />*/}
                        {/*</Router>*/}
                        <NavBtnLinkSelect to={"/projects/" + row._id}>
                            Select
                        </NavBtnLinkSelect>
                        <NavBtnLinkRemove>
                            Remove
                        </NavBtnLinkRemove>
                    </NavBtn>

                </td>
                {/*<td>*/}
                {/*    <NavBtn>*/}
                {/*        <NavBtnLink3>*/}
                {/*            Remove*/}
                {/*        </NavBtnLink3>*/}
                {/*    </NavBtn>*/}
                {/*</td>*/}
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}
