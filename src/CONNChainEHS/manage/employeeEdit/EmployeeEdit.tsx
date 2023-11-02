import { useState } from 'react';
// import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import BasicInfo from './BasicInfo';
import Lab from './Lab';
import OtherAuths from './OtherAuths';
import EduRecords from './EduRecords';
import { UserInfo } from './BasicInfo';

function EmployeeEdit() {
  const [user, setUser] = useState<UserInfo>({
    account: "CloudT001",
    enteredDate: "2022-01-01",
    name: "雲集管理者",
    jobTitle: "專案組員",
    auth: "管理者",
    email: "CloudT001@cloudthink.com.tw",
    backupEmail: "CloudT001@cloudthink.com.tw",
    phone: "0900-123456",
    extension: "12345",
    school: "電機資訊學院",
    dept: "電機資訊學院",
    birthday: "2000/01/01",
    gender: "男",
    previousUserId: "AAA087087",
    originalUnit: "隔壁的大學",
  });

  const { t } = useTranslation();


  return (
    <div id="content" className="d-flex flex-column p-0">
      {/* BEGIN scrollbar */}
      <div className="app-content-padding flex-grow-1">
        {/* BEGIN breadcrumb */}
        <ol className="breadcrumb float-xl-end">
          <li className="breadcrumb-item">{t('breadcrumb.home')}</li>
          <li className="breadcrumb-item active">{t('breadcrumb.unit_user_manage')}</li>
          <li className="breadcrumb-item">{t('breadcrumb.user_manage')}</li>
          <li className="breadcrumb-item active">個人資料</li>
        </ol>
        {/* END breadcrumb */}
        {/* BEGIN page-header */}
        <h1 className="page-header">個人資料</h1>
        {/* END page-header */}

        {/* BEGIN row */}
        <button
          type="button"
          className="btn btn-default fs-5"
          onClick={() => {
            window.history.back()
          }}
          value="回上一頁"
        >
          <i className="fas fa-arrow-left"></i> {t('button.back')}
        </button>
        <div className="row mt-3">
          {/* 左邊基本資料 */}
          <div className="col-xl-4">
            <BasicInfo userInfo={user} onChange={(data) => { setUser({ ...user, ...data }) }} />
          </div>
          {/* 右邊分頁 */}
          <div className="col-xl-8">
            <ul className="nav nav-tabs fs-5">
              <li className="nav-item">
                <a href="#employee-tab-1" data-bs-toggle="tab" className="nav-link active"><i className="fas fa-house-user"></i> 所屬實驗室</a>
              </li>
              <li className="nav-item">
                <a href="#employee-tab-2" data-bs-toggle="tab" className="nav-link"><i className="fa-solid fa-user-shield"></i> 其他權限</a>
              </li>
              <li className="nav-item">
                <a href="#employee-tab-3" data-bs-toggle="tab" className="nav-link"><i className="fa-solid fa-graduation-cap"></i> 教育訓練紀錄</a>
              </li>
            </ul>
            <div className="tab-content panel p-3 rounded-0 rounded-bottom">
              {/* 所屬實驗室 */}
              <Lab />
              {/* 其他權限 */}
              <OtherAuths />
              {/* 教育訓練紀錄 */}
              <EduRecords />
            </div>
          </div>
        </div>
        {/* END row */}
      </div>
      {/* END scrollbar */}
    </div>
  );
}

export default EmployeeEdit;
