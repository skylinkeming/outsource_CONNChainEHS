import { useEffect, useState } from "react";
import styled from "styled-components";
import user from '../../../assets/img/user-3.jpg';
import { useTranslation } from "react-i18next";
import { EmployeeAPI } from "../../../api/employeeAPI";
import useLoginUser from "../../hooks/useLoginUser";
import Success from "../../common/Success";
import Warning from "../../common/Warnning";

export interface UserInfo {
    account: string;
    entryDate: string;
    userName: string;
    jobTitle: string;
    jobTitleId: number;
    roleName: string;
    roleId: string;
    userEmail: string;
    userEmail2: string;
    phone: string;
    userExt: string;
    orgName: string;
    userId: string;
    orgDepName: string;
    showBirthday: string;
    userGender: string;
    orgId: string;
    origUnit: string;
}


export default function BasicInfo(props: { userInfo: UserInfo, onChange: (data: any) => void }) {
    const { userInfo, onChange } = props;
    const [isEdit, setIsEdit] = useState(false);
    const [selectList, setSelectList] = useState({
        jobTitle: [],
        userRoleList: []
    })
    const { t } = useTranslation();
    const loginUser = useLoginUser();

    const editUser = () => {
        if (!loginUser) {
            alert("請先登入")
            return;
        }
        if (isEdit) {
            EmployeeAPI.editUserDetail({
                ...loginUser!,
                userId: userInfo.userId,
                userName: userInfo.userName,
                jobTitleId: userInfo.jobTitleId,
                jobTitle: userInfo.jobTitle,
                userEmail: userInfo.userEmail,
                userEmail2: userInfo.userEmail2,
                userExt: userInfo.userExt,
                userPhone: userInfo.phone,
                orgId: userInfo.orgId,
                userBirthday: userInfo.showBirthday,
                userGender: userInfo.userGender,
                origUnit: userInfo.origUnit,
                roleId: userInfo.roleId
            }).then(result => {
                if (result.status === 'Success') {
                    Success("編輯成功")
                } else {
                    Warning(result.message);
                }
                setIsEdit(false)
            }).catch(err => {
                Warning(err)
            })
        } else {
            setIsEdit(true)
            fetchSelectList();
        }
    }

    const fetchSelectList = async () => {
        Promise.all([
            EmployeeAPI.getUserRoleList({
                ...loginUser!,
                userId: userInfo.userId
            }),
            EmployeeAPI.getJobTitles({
                ...loginUser!
            })
        ]).then(([result1, result2]) => {
            setSelectList({
                ...selectList,
                userRoleList: result1.results.map((data: any) => {
                    return {
                        content: data.roleName,
                        value: data.roleId
                    }
                }),
                jobTitle: result2.results.map((data: any) => {
                    return {
                        content: data.label,
                        value: data.value
                    }
                })
            })
        }).catch(err => {
            Warning(err)
        })
    }
    return (
        <StyledBasicInformation>
            <div className="card py-3">
                <div className="card-body text-center" id="profile">
                    <form action="" method="" data-parsley-validate="true">
                        <img src={user} alt="頭像" className="rounded-circle" />
                        <div className="fs-3 my-3">{userInfo.account}</div>
                        <div className="fs-5 my-3">入學日： <b>{userInfo.entryDate}</b></div>
                        <hr className="mx-5" />
                        <div className="row text-start mb-3 mx-5 align-items-center">
                            <div className="col-md-3 mb-3">{t("table.title.name")}</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ? <span className="edit">{userInfo.userName}</span> :
                                    <input type="text" className="form-control" value={userInfo.userName} data-parsley-required="true" onChange={(e) => { onChange({ userName: e.target.value }) }} />}
                            </div>
                            <div className="col-md-3 mb-3">{t('table.title.job_title')}</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ?
                                    <span className="edit">{userInfo.jobTitle}</span> :
                                    <select value={userInfo.jobTitleId}
                                        name="" id="" className="form-select" data-parsley-required="true" onChange={(e) => { onChange({ jobTitleId: e.target.value }) }}>
                                        <option value="">無</option>
                                        {
                                            selectList.jobTitle.map((job: any) => <option key={job.value} value={job.value}>{job.content}</option>)
                                        }
                                    </select>}
                            </div>
                            <div className="col-md-3 mb-3">目前權限</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ? <span className="edit">{userInfo.roleName}</span> :
                                    <select name="" id="" className="form-select" data-parsley-required="true" value={userInfo.roleId} onChange={(e) => { onChange({ roleName: e.target.value }) }}>
                                        {
                                            selectList.userRoleList.map((role: any) => <option key={role.value} value={role.value}>{role.content}</option>)
                                        }
                                    </select>}
                            </div>
                            <div className="col-md-3 mb-3">{t("text.email")}</div>
                            <div className="col-md-9 fs-5 mb-3">
                                {!isEdit ? <span className="edit">{userInfo.userEmail}</span> :
                                    <input type="email" className="form-control" data-parsley-type="email" data-parsley-required="true" value={userInfo.userEmail} onChange={e => { onChange({ userEmail: e.target.value }) }} />}
                            </div>
                            <div className="col-md-3 mb-3">備用信箱</div>
                            <div className="col-md-9 fs-5 mb-3">
                                {!isEdit ? <span className="edit">{userInfo.userEmail2}</span> :
                                    <input type="email" className="form-control" value={userInfo.userEmail2} onChange={(e) => { onChange({ userEmail2: e.target.value }) }} data-parsley-type="email" data-parsley-required="true" />}
                            </div>
                            <div className="col-md-3 mb-3">{t('text.cellphone')}</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ? <span className="edit">{userInfo.phone}</span> :
                                    <input type="text" className="form-control" value={userInfo.phone} id="masked-input-phone" data-parsley-required="true" onChange={(e) => { onChange({ phone: e.target.value }) }} />}
                            </div>
                            <div className="col-md-3 mb-3">{t('table.title.ext')}</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ? <span className="edit">{userInfo.userExt}</span> :
                                    <input type="text" className="form-control" value={userInfo.userExt} data-parsley-required="true" onChange={(e) => { onChange({ userExt: e.target.value }) }} />}
                            </div>
                            <div className="col-md-3 mb-3">學院</div>
                            <div className="col-md-9 fs-5 mb-3">
                                {!isEdit ? <span className="edit">{userInfo.orgName}</span> :
                                    <select name="" id="" className="form-select" data-parsley-required="true" value={userInfo.orgName} onChange={(e) => { onChange({ orgName: e.target.value }) }}>
                                        <option value="01">電機資訊學院</option>
                                        <option value="02">理學院</option>
                                        <option value="03">工學院</option>
                                    </select>}
                            </div>
                            <div className="col-md-3 mb-3">系所</div>
                            <div className="col-md-9 fs-5 mb-3">
                                {!isEdit ? <span className="edit">{userInfo.orgDepName}</span> :
                                    <select name="" id="" className="form-select" value={userInfo.orgDepName} onChange={(e) => { onChange({ orgDepName: e.target.value }) }} data-parsley-required="true">
                                        <option value="01">電機資訊學院</option>
                                        <option value="02">理學院</option>
                                        <option value="03">工學院</option>
                                    </select>}
                            </div>
                            <div className="col-md-3 mb-3">{t('text.birthday')}</div>
                            <div className="col-md-9 fs-5 mb-3">
                                {!isEdit ? <span className="edit">{userInfo.showBirthday}</span> :
                                    <input type="text" className="form-control" id="datepicker-autoClose" value={userInfo.showBirthday} onChange={e => { onChange({ showBirthday: e.target.value }) }} />}
                            </div>
                            <div className="col-md-3 mb-3">{t('text.gender')}</div>
                            <div className="col-md-9 fs-5 mb-3">
                                {!isEdit ? <span className="edit">{userInfo.userGender}</span> :
                                    <select name="" id="" className="form-select" data-parsley-required="true" value={userInfo.userGender} onChange={e => { onChange({ userGender: e.target.value }) }}>
                                        <option value="01">男</option>
                                        <option value="02">女</option>
                                    </select>}
                            </div>
                            <div className="col-md-3 mb-3">原單位工號</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ? <span className="edit">{userInfo.orgId}</span> :
                                    <input type="text" className="form-control" value={userInfo.orgId} data-parsley-required="true" onChange={e => { onChange({ orgId: e.target.value }) }} />}
                            </div>
                            <div className="col-md-3 mb-3">{t('text.previous_unit')}</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ? <span className="edit">{userInfo.origUnit}</span> :
                                    <input type="text" className="form-control" value={userInfo.origUnit} onChange={e => { onChange({ origUnit: e.target.value }) }} data-parsley-required="true" />}
                            </div>
                        </div>
                        <div className="row me-5">
                            <div className="col-md-12 text-end">
                                <button type="button" className="btn btn-warning fs-5" title="修改個人資料" data-type="edit" id="changeInput" onClick={editUser}>
                                    <i className="fas fa-pen-to-square"></i> {isEdit ? "儲存個人資料" : "修改個人資料"}
                                </button>
                                {isEdit &&
                                    <button type="button" className="btn fs-5 m-3" title="修改個人資料" data-type="edit" id="changeInput" onClick={() => setIsEdit(false)}>
                                        取消
                                    </button>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </StyledBasicInformation>
    )
}

const StyledBasicInformation = styled.div`

`;