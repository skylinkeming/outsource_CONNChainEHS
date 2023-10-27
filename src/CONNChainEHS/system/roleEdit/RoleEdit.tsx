import React from 'react';
import styled from 'styled-components';
import "rc-tree/assets/index.css"
import { useTranslation } from 'react-i18next';



import RCTree from './RCTree';
import { SystemData, functionGropData } from './data';

function RoleEdit() {
  const { t } = useTranslation();

  return (
    <RoleEditWrap>
      <div className="d-flex flex-column p-0" id="content">
        {/* BEGIN scrollbar */}
        <div className="app-content-padding flex-grow-1">
          {/* BEGIN breadcrumb */}
          <ol className="breadcrumb float-xl-end">
            <li className="breadcrumb-item"><a href="../index.html">{t("breadcrumb.home")}</a></li>
            <li className="breadcrumb-item active">{t("breadcrumb.system_manage_setting")}</li>
            <li className="breadcrumb-item"><a href="./roleClass.html">{t("breadcrumb.role_level_manage")}</a></li>
            <li className="breadcrumb-item active">角色編輯</li>
          </ol>
          {/* END breadcrumb */}
          {/* BEGIN page-header */}
          <h1 className="page-header">角色編輯</h1>
          {/* END page-header */}

          {/* BEGIN row */}
          <button type="button" className="btn btn-default fs-5 goBack" value="回上一頁">
            <i className="fas fa-arrow-left"></i> {t("button.back")}
          </button>

          {/* 階層名稱說明 */}
          <div className="card mt-3">
            <div className="card-body row align-items-center fw-bold fs-4 py-4">
              <div className="col-xl-1 text-end">{t("table.title.role.level") + "："}</div>
              <div className="col-xl-1"><span id="roleClass">階級二</span></div>
              <div className="col-xl-1 text-end">{t('table.title.role.name') + "："}</div>
              <div className="col-xl-2">
                <span className="roleName">總管理者</span>
              </div>
              <div className="col-xl-1 text-end">說明：</div>
              <div className="col-xl-4">
                <span className="roleDescript">總管理者</span>
              </div>
              <div className="col-xl-2 d-grid">
                <button type="button" className="btn btn-warning me-3 fs-5 modify-btn" title="修改名稱與說明">修改名稱與說明</button>
              </div>
            </div>
          </div>
          {/* 綁定功能 */}
          <div className="card mt-3">
            <div className="card-body align-items-center p-4">
              <h3 className="d-inline me-3">請選擇此角色要綁定的功能</h3>
              <button type="button" className="btn btn-success fs-5"><i className="fas fa-floppy-disk"></i> 儲存角色功能設定</button>
              <div className="row justify-content-around mt-5">
                <div className="col-lg-4">
                  <div className="panel">
                    <h4 className="panel-heading bg-orange-700 text-white justify-content-center">功能群組</h4>
                    <div className="panel-body">
                      {/* <div className="jstree-checkable fs-5">
                      <ul>
                        <li>全部</li>
                        <li>環安人員</li>
                        <li>實驗室負責人</li>
                      </ul>
                    </div> */}
                      <RCTree treeData={functionGropData} />

                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="panel">
                    <h4 className="panel-heading bg-orange-700 text-white justify-content-center">系統功能</h4>
                    <div className="panel-body">
                      <RCTree treeData={SystemData} />

                      {/* <div className="jstree-checkable fs-5">
                      <ul>
                        <li data-jstree='{"opened":true}'>
                          系統管理與設定
                          <ul>
                            <li data-jstree='{"opened":true}'>單位階層管理
                              <ul>
                                <li>新增</li>
                                <li>刪除</li>
                                <li>修改</li>
                              </ul>
                            </li>
                            <li>角色階層管理</li>
                            <li>功能群組管理</li>
                            <li>系統功能查詢</li>
                            <li>停止運作設定</li>
                          </ul>
                        </li>
                        <li data-jstree='{"opened":true}'>
                          單位與人員管理
                          <ul>
                            <li>單位管理</li>
                            <li>區域管理</li>
                            <li>建築物管理</li>
                            <li>實驗室管理</li>
                            <li>人員管理</li>
                          </ul>
                        </li>
                        <li data-jstree='{"opened":true}'>
                          簽核管理
                          <ul>
                            <li>化學品採購/異動</li>
                            <li>實驗室申請/異動</li>
                          </ul>
                        </li>
                        <li data-jstree='{"opened":true}'>
                          化學品管理
                          <ul>
                            <li>化學品基本資訊</li>
                            <li>化學品採購申請</li>
                          </ul>
                        </li>
                        <li data-jstree='{"opened":true, "disabled" : true}'>
                          職業安全衛生管理
                        </li>
                        <li data-jstree='{"opened":true, "disabled" : true}'>
                          教育訓練管理
                        </li>
                      </ul>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mb-3">
                <div className="col-md-3 d-grid">
                  <button type="button" className="btn btn-success fs-5">
                    <i className="fas fa-floppy-disk"></i> 儲存角色功能設定
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* END row */}
        </div>
        {/* END scrollbar */}
        {/* BEGIN #footer */}
        <div className="app-footer m-0 mt-5" id="footer">
          <div className="row justify-content-center">
            <div className="col-xl-4 fs-5 text-center">
              <div>TEL：03-5718846</div>
              <div>mail：service@cloudthink.com.tw</div>
              <div>Copyright © 2023 雲集科技行銷有限公司 All Right Reserved</div>
            </div>
          </div>
        </div>
        {/* END #footer */}
      </div>
    </RoleEditWrap>
  );
}

const RoleEditWrap = styled.div`
  .jstree .jstree-container-ul .jstree-node.jstree-open .jstree-anchor.jstree-clicked>.fa-folder:before {
    color: rgb(255, 123, 0);
  }

  .jstree .jstree-container-ul .jstree-node.jstree-open .jstree-anchor>.fa-folder:before {
    color: orange;
  }
`


export default RoleEdit;