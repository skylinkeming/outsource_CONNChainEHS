import { useEffect, useState } from "react";
import styled from "styled-components";
import user from '../../../assets/img/user-3.jpg';
import { useTranslation } from "react-i18next";

export interface UserInfo {
    account: string;
    enteredDate: string;
    name: string;
    jobTitle: string;
    auth: string;
    email: string;
    backupEmail: string;
    phone: string;
    extension: string;
    school: string;
    dept: string;
    birthday: string;
    gender: string;
    previousUserId: string;
    originalUnit: string;
}


export default function BasicInfo(props: { userInfo: UserInfo, onChange: (data: any) => void }) {
    const { userInfo, onChange } = props;
    const [isEdit, setIsEdit] = useState(false);
    const { t } = useTranslation();

    return (
        <StyledBasicInformation>
            <div className="card py-3">
                <div className="card-body text-center" id="profile">
                    <form action="" method="" data-parsley-validate="true">
                        <img src={user} alt="頭像" className="rounded-circle" />
                        <div className="fs-3 my-3">{userInfo.account}</div>
                        <div className="fs-5 my-3">入學日： <b>{userInfo.enteredDate}</b></div>
                        <hr className="mx-5" />
                        <div className="row text-start mb-3 mx-5 align-items-center">
                            <div className="col-md-3 mb-3">{t("table.title.name")}</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ? <span className="edit">{userInfo.name}</span> :
                                    <input type="text" className="form-control" value={userInfo.name} data-parsley-required="true" onChange={(e) => { onChange({ name: e.target.value }) }} />}
                            </div>
                            <div className="col-md-3 mb-3">{t('table.title.job_title')}</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ? <span className="edit">{userInfo.jobTitle}</span> :
                                    <select name="" id="" className="form-select" data-parsley-required="true" onChange={(e) => { onChange({ jobTitle: e.target.value }) }}>
                                        <option value="01">專案組員</option>
                                        <option value="02">環安中心人員</option>
                                        <option value="03">實驗室負責人</option>
                                    </select>}
                            </div>
                            <div className="col-md-3 mb-3">目前權限</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ? <span className="edit">{userInfo.auth}</span> :
                                    <select name="" id="" className="form-select" data-parsley-required="true" value={userInfo.auth} onChange={(e) => { onChange({ auth: e.target.value }) }}>
                                        <option value="01">管理者</option>
                                        <option value="02">環安中心人員</option>
                                        <option value="03">實驗室負責人</option>
                                    </select>}
                            </div>
                            <div className="col-md-3 mb-3">{t("text.email")}</div>
                            <div className="col-md-9 fs-5 mb-3">
                                {!isEdit ? <span className="edit">{userInfo.email}</span> :
                                    <input type="email" className="form-control" data-parsley-type="email" data-parsley-required="true" value={userInfo.email} onChange={e => { onChange({ email: e.target.value }) }} />}
                            </div>
                            <div className="col-md-3 mb-3">備用信箱</div>
                            <div className="col-md-9 fs-5 mb-3">
                                {!isEdit ? <span className="edit">{userInfo.backupEmail}</span> :
                                    <input type="email" className="form-control" value={userInfo.backupEmail} onChange={(e) => { onChange({ backupEmail: e.target.value }) }} data-parsley-type="email" data-parsley-required="true" />}
                            </div>
                            <div className="col-md-3 mb-3">{t('text.cellphone')}</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ? <span className="edit">{userInfo.phone}</span> :
                                    <input type="text" className="form-control" value={userInfo.phone} id="masked-input-phone" data-parsley-required="true" onChange={(e) => { onChange({ phone: e.target.value }) }} />}
                            </div>
                            <div className="col-md-3 mb-3">{t('table.title.ext')}</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ? <span className="edit">{userInfo.extension}</span> :
                                    <input type="text" className="form-control" value={userInfo.extension} data-parsley-required="true" onChange={(e) => { onChange({ extension: e.target.value }) }} />}
                            </div>
                            <div className="col-md-3 mb-3">學院</div>
                            <div className="col-md-9 fs-5 mb-3">
                                {!isEdit ? <span className="edit">{userInfo.school}</span> :
                                    <select name="" id="" className="form-select" data-parsley-required="true" value={userInfo.school} onChange={(e) => { onChange({ school: e.target.value }) }}>
                                        <option value="01">電機資訊學院</option>
                                        <option value="02">理學院</option>
                                        <option value="03">工學院</option>
                                    </select>}
                            </div>
                            <div className="col-md-3 mb-3">系所</div>
                            <div className="col-md-9 fs-5 mb-3">
                                {!isEdit ? <span className="edit">{userInfo.dept}</span> :
                                    <select name="" id="" className="form-select" value={userInfo.dept} onChange={(e) => { onChange({ dept: e.target.value }) }} data-parsley-required="true">
                                        <option value="01">電機資訊學院</option>
                                        <option value="02">理學院</option>
                                        <option value="03">工學院</option>
                                    </select>}
                            </div>
                            <div className="col-md-3 mb-3">{t('text.birthday')}</div>
                            <div className="col-md-9 fs-5 mb-3">
                                {!isEdit ? <span className="edit">{userInfo.birthday}</span> :
                                    <input type="text" className="form-control" id="datepicker-autoClose" value={userInfo.birthday} onChange={e => { onChange({ birthday: e.target.value }) }} />}
                            </div>
                            <div className="col-md-3 mb-3">{t('text.gender')}</div>
                            <div className="col-md-9 fs-5 mb-3">
                                {!isEdit ? <span className="edit">{userInfo.gender}</span> :
                                    <select name="" id="" className="form-select" data-parsley-required="true" value={userInfo.gender} onChange={e => { onChange({ gender: e.target.value }) }}>
                                        <option value="01">男</option>
                                        <option value="02">女</option>
                                    </select>}
                            </div>
                            <div className="col-md-3 mb-3">原單位工號</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ? <span className="edit">{userInfo.previousUserId}</span> :
                                    <input type="text" className="form-control" value={userInfo.previousUserId} data-parsley-required="true" onChange={e => { onChange({ previousUserId: e.target.value }) }} />}
                            </div>
                            <div className="col-md-3 mb-3">{t('text.previous_unit')}</div>
                            <div className="col-md-9 mb-3 fs-5">
                                {!isEdit ? <span className="edit">{userInfo.originalUnit}</span> :
                                    <input type="text" className="form-control" value={userInfo.originalUnit} onChange={e => { onChange({ originalUnit: e.target.value }) }} data-parsley-required="true" />}
                            </div>
                        </div>
                        <div className="row me-5">
                            <div className="col-md-12 text-end">
                                <button type="button" className="btn btn-warning fs-5" title="修改個人資料" data-type="edit" id="changeInput" onClick={() => { setIsEdit(!isEdit) }}>
                                    <i className="fas fa-pen-to-square"></i> {isEdit ? "儲存個人資料" : "修改個人資料"}
                                </button>
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