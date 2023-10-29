import React, { useState } from "react"
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

export default function EmployeeRow(props: {
  index: number;
  data: EmployeeRowData;
  onChangeStatus: (activated: boolean) => void;
  onDelete: () => void;
}) {
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
      <td>
        <div className="form-check form-switch d-flex justify-content-center align-items-center">
          <input
            className="form-check-input"
            type="checkbox"
            checked={activated}
            onChange={(e) => {
              props.onChangeStatus(e.target.checked)
            }}
          />
        </div>
      </td>
      <td>
        <NavLink to='/manage/employeeEdit'><i className="fas fa-user"></i></NavLink>
        <a href="#" className="deleteAlert" onClick={e => { props.onDelete() }}><i className="fas fa-trash-can"></i></a>
      </td>
    </tr>
  )
}