import { useEffect, useState } from "react"
import styled from "styled-components"
import { RoleAPI } from "../../../api/roleAPI"
import { useTranslation } from "react-i18next";

interface RoleLevelData {
    description: string;
    label: string;
    selected: boolean;
    value: string;
}


export default function AddRole(props: { clickCloseBtn: () => void; onAddSuccess: () => void }) {
    const [loginUser, setLoginUser] = useState<any>(null);
    const [roleList, setRoleList] = useState<Array<RoleLevelData>>([]);
    const { i18n } = useTranslation();
    const [editValues, setEditValues] = useState({
        roleLevelValue: "",
        roleName: "",
        roleDesc: ""
    });


    useEffect(() => {
        if (localStorage.getItem("loginUser")) {
            const user = JSON.parse(localStorage.getItem("loginUser")!)
            setLoginUser(user)
            RoleAPI.getRoleLevelSelectList({
                loginRoleId: user.loginRoleId,
                loginRoleLevel: user.loginRoleLevel,
                loginUserId: user.loginUserId,
                langType: i18n.language
            }).then(result => {
                console.log(result);
                if (result) {
                    setRoleList(result.results);
                }
            }).catch(err => {
                alert(err);
            })

        }
    }, [])

    const addRole = () => {
        if (!loginUser) {
            return;
        }
        if (!editValues.roleName) {
            alert("請輸入角色名稱");
            return;
        }
        if (!editValues.roleLevelValue) {
            alert("請選擇角色階層");
            return;
        }
        RoleAPI.addRole({
            loginRoleId: loginUser.loginRoleId,
            loginRoleLevel: loginUser.loginRoleLevel,
            loginUserId: loginUser.loginUserId,
            langType: i18n.language,
            roleName: editValues.roleName,
            roleDescription: editValues.roleDesc,
            roleLevel: parseInt(editValues.roleLevelValue)
        }).then(result => {
            if (result.status !== 'Success') {
                alert(result.message)
            } else {
                props.onAddSuccess()
            }
        }).catch(err => {
            debugger;
            alert(err)
        })

    }

    return (
        <StyledAddRole>
            <div className="addRole">
                <form action="" method="" data-parsley-validate="true">
                    <div className="addRole-header">
                        <h4 className="modal-title">新增角色</h4>
                        <button type="button" className="btn-close" aria-hidden="true" onClick={props.clickCloseBtn}></button>
                    </div>
                    <div className="addRole-body">
                        <div className="row mb-4 justify-content-center">
                            <div className="col-md-10">
                                <label htmlFor="" className="fw-bold mb-1">請選擇角色階層：
                                    <span className="text-danger">*</span>
                                </label>
                                <select value={editValues.roleLevelValue} name="" id="" className="form-select form-select-lg" data-parsley-required="true" onChange={(e) => {
                                    setEditValues({
                                        ...editValues,
                                        roleLevelValue: e.target.value
                                    });
                                }}>
                                    <option value="">請選擇</option>
                                    {roleList.length > 0 && roleList.map(role => {
                                        return <option value={role.value}>{role.label}</option>
                                    })

                                    }
                                </select>
                            </div>
                        </div>
                        <div className="row mb-4 justify-content-center">
                            <div className="col-md-10">
                                <label htmlFor="" className="fw-bold mb-1">請輸入角色名稱：
                                    <span className="text-danger">*</span>
                                </label>
                                <input value={editValues.roleName} type="text" className="form-control form-control-lg" data-parsley-required="true"
                                    placeholder="請輸入角色名稱" onChange={(e) => {
                                        setEditValues({
                                            ...editValues,
                                            roleName: e.target.value
                                        });
                                    }} />
                            </div>
                        </div>
                        <div className="row mb-4 justify-content-center">
                            <div className="col-md-10">
                                <label htmlFor="" className="fw-bold mb-1">請輸入角色說明：</label>
                                <input value={editValues.roleDesc} type="text" className="form-control form-control-lg" placeholder="請輸入角色說明"
                                    onChange={(e) => {
                                        setEditValues({
                                            ...editValues,
                                            roleDesc: e.target.value
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="addRole-footer">
                        <div className="btn btn-white" aria-hidden="true" onClick={props.clickCloseBtn}>關閉</div>
                        <div className="btn btn-purple" onClick={addRole}>
                            <i className="fas fa-cubes" /> 新增角色
                        </div>
                    </div>
                </form>
            </div>
        </StyledAddRole>
    )
}


const StyledAddRole = styled.div`
    background: white;
    // padding: 10px;
    width:500px;
    .addRole-header {
        padding:15px;
        display:flex;
        justify-content:space-between;
        border-bottom: 1px solid #ced4da;
    }
    .addRole-body {
        padding-top:15px;
    }
    .addRole-footer {
        border-top: 1px solid #ced4da;
        padding:15px;
        display:flex;
        justify-content:end;
        .btn.btn-purple {
            margin-left:10px;
        }
    }
`