import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export interface EmployeeRowData {
  userId: string;
  roleId: string;
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
  const { userId, roleId, name, auth, dept, extension, activated } = props.data;
  return (
    <tr>
      <td data-title="項次">{props.index}</td>
      <td data-title="工號">{userId}</td>
      <td data-title="姓名">{name}</td>
      <td data-title="權限">{auth}</td>
      <td data-title="單位">{dept}</td>
      {/* <td></td> */}
      <td data-title="分機">{extension}</td>
      <td data-title="啟用">
        <div className="form-check form-switch d-flex align-items-center">
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
      <td data-title="管理">
        {userId && roleId && <NavLink to={`/manage/employeeEdit?userId=${userId}&roleId=${roleId}`}><i className="fas fa-user"></i></NavLink>}
        <i style={{ cursor: "pointer" }} className="fas fa-trash-can" onClick={e => { props.onDelete() }}></i>
      </td>
    </tr>
  )
}