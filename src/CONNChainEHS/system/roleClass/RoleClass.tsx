import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Dialog from '../../common/Dialog';
import AddRole from './AddRole';
import Footer from '../../layout/Footer';
import { RoleAPI } from '../../../api/roleAPI';

interface RoleData {
  editId: string;
  roleLevelName: string;
  roleName: string;
  roleDescription: string;
  permission: Permission;
}

enum Permission {
  CanView,
  CanEdit
}


function RoleClass() {
  const { t, i18n } = useTranslation();
  const [loginUser, setLoginUser] = useState<any>(null);
  const [showAddPopup, setShowAddPopup] = useState<boolean>(false);
  const [dataList, setDataList] = useState<Array<RoleData>>([]);

  useEffect(() => {
    if (!loginUser && localStorage.getItem("loginUser")) {
      const user = JSON.parse(localStorage.getItem("loginUser")!)
      console.log()
      setLoginUser(user)
    } else if (!!loginUser) {
      fetchData();
    }
  }, [loginUser])

  const fetchData = () => {
    RoleAPI.getRoleList({
      loginRoleId: 3,
      loginUserId: "CLOUDT001",
      loginRoleLevel: 2,
      langType: i18n.language
    }).then(result => {
      console.log(result.results);
      if (result) {
        result.results.forEach((roleData: any) => {
          if (roleData.roleLevel >= loginUser.loginRoleLevel) {
            roleData.permission = Permission.CanEdit;
          } else {
            roleData.permission = Permission.CanView;
          }
        })
        setDataList(result.results)
      }
    })
  }

  return (
    <StlyedRoleClass>
      <div className="d-flex flex-column p-0" id="content">
        <Dialog
          content={
            <AddRole
              clickCloseBtn={() => { setShowAddPopup(false) }}
              onAddSuccess={() => {
                setShowAddPopup(false)
                fetchData();
              }}
            />
          }
          show={showAddPopup}
        />
        {/* BEGIN scrollbar */}
        <div className="app-content-padding flex-grow-1">
          {/* BEGIN breadcrumb */}
          <ol className="breadcrumb float-xl-end">
            <li className="breadcrumb-item"><a href="../index.html">{t("breadcrumb.home")}</a></li>
            <li className="breadcrumb-item active">{t("breadcrumb.system_manage_setting")}</li>
            <li className="breadcrumb-item active">{t("breadcrumb.role_level_manage")}</li>
          </ol>
          {/* END breadcrumb */}
          {/* BEGIN page-header */}
          <h1 className="page-header">{t("breadcrumb.role_level_manage")}</h1>
          {/* END page-header */}

          {/* BEGIN row */}
          {/* 新增單位階層 button */}
          <button type="button" className="btn btn-purple fs-5"
            onClick={() => {
              setShowAddPopup(true);
            }}
          >
            <i className="fas fa-user-plus"></i> 新增角色
          </button>

          <div className="card mt-3">
            <div className="card-body">
              <table className="table text-center table-hover align-middle">
                <thead className="fs-4 fw-bold">
                  <tr>
                    <th>{t("table.title.sequence")}</th>
                    <th>{t("table.title.role.level")}</th>
                    <th>{t("table.title.role.name")}</th>
                    <th>說明</th>
                    <th>{t("table.title.action")}</th>
                  </tr>
                </thead>
                <tbody className="fs-4">
                  {dataList.map((data, idx) => <Row key={data.editId + idx} index={idx + 1} role={{ ...data }} />)}
                </tbody>
              </table>
            </div>
          </div>
          {/* END row */}
        </div>
        {/* END scrollbar */}
        {/* BEGIN #footer */}
        <Footer />
        {/* <div className="app-footer m-0 mt-5" id="footer">
        <div className="row justify-content-center">
          <div className="col-xl-4 fs-5 text-center">
            <div>TEL：03-5718846</div>
            <div>mail：service@cloudthink.com.tw</div>
            <div>Copyright © 2023 雲集科技行銷有限公司 All Right Reserved</div>
          </div>
        </div>
      </div> */}
        {/* END #footer */}
      </div>
    </StlyedRoleClass>
  );
}


const Row = (props: { index: number; role: RoleData }) => {
  const navigate = useNavigate();

  const clickEdit = () => {
    navigate("/system/roleEdit")
  }


  return (
    <tr>
      <td data-title="順序">{props.index}</td>
      <td data-title="階層">{props.role.roleLevelName}</td>
      <td data-title="角色名稱">{props.role.roleName}</td>
      <td data-title="說明">{props.role.roleDescription}</td>
      <td data-title="功能">
        {props.role.permission === Permission.CanEdit ?
          <>
            <button type="button" className="btn btn-warning me-3 fs-5" title="編輯" onClick={clickEdit}>
              <i className="fas fa-pen"></i>  編輯
            </button>
            <i className="fas fa-trash-can fa-lg"></i>
          </>
          :
          <button type="button" className="btn btn-gray me-3 fs-5 goDetail" title="編輯">
            <i className="fas fa-file-lines"></i> 明細
          </button>
        }
      </td>
    </tr>
  )
}

const StlyedRoleClass = styled.div`
  padding-bottom:150px;
  .fa-trash-can {
    color: tomato;
  }
  @media (max-width: 600px){
    label {
        width:200px;
    }
    .buttonPanel {
        margin-top:10px;
        display:flex;
        justify-content: flex-end;
    }
    thead {
        display:none;
    }
    tbody, td, tr {
        display:block;
        background: #fff !important;
        box-shadow: inset 0 0 0 9999px white;

    }
    tr {
        border: 1px solid #ccc;
        margin-bottom: 10px;
        background: #fff !important;
    }
    td {
        background: #fff!important;
        position:relative;
        padding-left: 100px;
        text-align:left;
        min-height: 44px;
    }
    td::before {
        content: attr(data-title);
        position: absolute;
        top: 6px;
        left: 6px;
        width: 30%;
        padding-right: 10px;
        white-space: nowrap;
        text-align: left;
        font-weight: bold;
        color: #1a1a1a;
    }

  }
`

export default RoleClass;