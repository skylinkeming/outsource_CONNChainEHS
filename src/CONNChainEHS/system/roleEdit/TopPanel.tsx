import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RoleAPI } from "../../../api/roleAPI";
import useLoginUser from "../../hooks/useLoginUser";
import { RoleDetail } from "./RoleEdit";


export default function TopPanel(props: { roleDetail: RoleDetail | undefined, onEditSuccess:()=>void }) {
    const { roleDetail, onEditSuccess } = props;
    const { t } = useTranslation();
    const [editMode, setEditMode] = useState(false);
    const [editValues, setEditValues] = useState({
        roleLevelValue: "",
        roleName: "",
        roleDesc: ""
    });
    const [roleLevelList, setRoleLevelList] = useState<Array<any>>([]);
    const loginUser = useLoginUser();

    useEffect(() => {
        if (roleDetail) {
            setEditValues({
                roleLevelValue: roleDetail.roleLevel.toString(),
                roleDesc: roleDetail.roleDescription,
                roleName: roleDetail.roleName
            });
        }
    }, [roleDetail])


    const clickEditBtn = () => {
        setEditMode(true);

        if (roleLevelList.length === 0 && loginUser) {
            RoleAPI.getRoleLevelSelectList({
                loginRoleId: parseInt(loginUser.loginRoleId),
                loginRoleLevel: loginUser.loginRoleLevel,
                loginUserId: loginUser.loginUserId,
                langType: loginUser.langType
            }).then(result => {
                console.log(result);
                if (result) {
                    setRoleLevelList(result.results);
                }
            }).catch(err => {
                alert(err);
            })
        }


    }

    const clickSaveBtn = () => {
        setEditMode(false);
        if (!loginUser || !roleDetail) {
            return;
        }
        RoleAPI.editRole({
            loginUserId: loginUser.loginUserId,
            loginRoleId: parseInt(loginUser.loginRoleId),
            loginRoleLevel: loginUser.loginRoleLevel,
            langType: loginUser.langType,
            roleName: editValues.roleName,
            roleLevel: parseInt(editValues.roleLevelValue),
            roleDescription: editValues.roleDesc,
            roleId: roleDetail?.roleId
        }).then(result => {
            console.log(result)
            onEditSuccess();
        }).catch(err=>{
            alert(err)
        })
    }
    return (
        <div className="card mt-3">
            <div className="card-body row align-items-center fw-bold fs-4 py-4">
                <div className="col-xl-1 text-end nowrap">{t("table.title.role.level") + "："}</div>
                <div className="col-xl-2">
                    {editMode ?
                        <select
                            value={editValues.roleLevelValue}
                            className="form-select form-select-lg"
                            data-parsley-required="true"
                            onChange={(e) => {
                                setEditValues({
                                    ...editValues,
                                    roleLevelValue: e.target.value
                                });
                            }}
                        >
                            <option value="">請選擇</option>
                            {roleLevelList.length > 0 &&
                                roleLevelList.map(role => {
                                    return <option value={role.value}>{role.label}</option>
                                })
                            }
                        </select>
                        :
                        <span id="roleClass">{roleDetail?.roleLevelName}</span>
                    }
                </div>
                <div className="col-xl-1 text-end nowrap">{t('table.title.role.name') + "："}</div>
                <div className="col-xl-2">
                    {editMode ?
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            data-parsley-required="true"
                            placeholder="請輸入角色名稱"
                            value={editValues.roleName}
                            onChange={(e) => {
                                setEditValues({
                                    ...editValues,
                                    roleName: e.target.value
                                });
                            }}
                        /> :
                        <span className="roleName">{roleDetail?.roleName}</span>
                    }
                </div>
                <div className="col-xl-1 text-end">說明：</div>
                <div className="col-xl-2">
                    {editMode ?
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            data-parsley-required="true"
                            placeholder="請輸入角色說明"
                            value={editValues.roleDesc}
                            onChange={(e) => {
                                setEditValues({
                                    ...editValues,
                                    roleDesc: e.target.value
                                });
                            }}
                        /> :
                        <span className="roleDescript">{roleDetail?.roleDescription}</span>
                    }
                </div>
                <div className="col-xl-2 d-grid">
                    {editMode ?
                        <button type="button" className="btn me-3 fs-5 modify-btn btn-success" title="修改名稱與說明" onClick={clickSaveBtn}>儲存</button> :
                        <button type="button" className="btn btn-warning me-3 fs-5 modify-btn" title="修改名稱與說明" onClick={clickEditBtn}>修改名稱與說明</button>
                    }

                </div>
            </div>
        </div>
    )
}

