import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export interface EmployeeRowData {
  userId: string;
  name: string;
  auth: string;
  dept: string;
  extension: string;
  activated: boolean;
}

export default function EmployeeRow(props: { index: number; data: EmployeeRowData }) {
  const { userId, name, auth, dept, extension, activated } = props.data;


  return (
    <tr>
      <td width="5%">{props.index}</td>
      <td>{userId}</td>
      <td>{name}</td>
      <td>{auth}</td>
      <td>{dept}</td>
      {/* <td></td> */}
      <td>{extension}</td>
      <td><input type="checkbox" className="switchery-area" checked={activated} /></td>
      <td>
        <a href="../manage/employeeEdit.html"><NavLink to='/manage/employeeEdit'><i className="fas fa-user"></i></NavLink></a>
        <a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a>
      </td>
    </tr>
  )
}

const StyledRow = styled.tr`


`