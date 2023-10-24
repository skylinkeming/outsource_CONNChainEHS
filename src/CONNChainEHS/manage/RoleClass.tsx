import React from 'react';
import { useNavigate } from "react-router-dom";

function RoleClass() {
    const navigate = useNavigate();

  const clickEdit = ()=>{
    navigate("/system/roleEdit")
  }

  return (
    <div className="d-flex flex-column p-0" id="content">
      {/* BEGIN scrollbar */}
      <div className="app-content-padding flex-grow-1">
        {/* BEGIN breadcrumb */}
        <ol className="breadcrumb float-xl-end">
          <li className="breadcrumb-item"><a href="../index.html">首頁</a></li>
          <li className="breadcrumb-item active">系統管理與設定</li>
          <li className="breadcrumb-item active">角色階層管理</li>
        </ol>
        {/* END breadcrumb */}
        {/* BEGIN page-header */}
        <h1 className="page-header">角色階層管理</h1>
        {/* END page-header */}

        {/* BEGIN row */}
        {/* 新增單位階層 button */}
        <button type="button" data-bs-target="#addRole" data-bs-toggle="modal" className="btn btn-purple fs-5">
          <i className="fas fa-user-plus"></i> 新增角色
        </button>

        <div className="card mt-3">
          <div className="card-body">
            <table className="table text-center table-hover align-middle">
              <thead className="fs-4 fw-bold">
                <tr>
                  <th>順序</th>
                  <th>階層</th>
                  <th>角色名稱</th>
                  <th>說明</th>
                  <th>功能</th>
                </tr>
              </thead>
              <tbody className="fs-4">
                <tr>
                  <td>1</td>
                  <td>階級一</td>
                  <td>總管理者</td>
                  <td></td>
                  <td>
                    <button type="button" className="btn btn-gray me-3 fs-5 goDetail" title="編輯">
                      <i className="fas fa-file-lines"></i> 明細
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>階級二</td>
                  <td>環安人員</td>
                  <td></td>
                  <td>
                    <button type="button" className="btn btn-warning me-3 fs-5 goDetail" title="編輯" onClick={clickEdit}>
                      <i className="fas fa-pen"></i>  編輯
                    </button>
                    <a href="#" className="deleteAlert" title="刪除">
                      <i className="fas fa-trash-can fa-lg"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>階級三</td>
                  <td>單位管理人</td>
                  <td></td>
                  <td>
                    <button type="button" className="btn btn-warning me-3 fs-5 goDetail" title="編輯">
                      <i className="fas fa-pen"></i>  編輯
                    </button>
                    <a href="#" className="deleteAlert" title="刪除">
                      <i className="fas fa-trash-can fa-lg"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>階級四</td>
                  <td>實驗室負責人</td>
                  <td></td>
                  <td>
                    <button type="button" className="btn btn-warning me-3 fs-5 goDetail" title="編輯">
                      <i className="fas fa-pen"></i>  編輯
                    </button>
                    <a href="#" className="deleteAlert" title="刪除">
                      <i className="fas fa-trash-can fa-lg"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>階級四</td>
                  <td>實驗室管理人</td>
                  <td></td>
                  <td>
                    <button type="button" className="btn btn-warning me-3 fs-5" title="編輯">
                      <i className="fas fa-pen"></i>  編輯
                    </button>
                    <a href="#" className="deleteAlert" title="刪除">
                      <i className="fas fa-trash-can fa-lg"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
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
  );
}

export default RoleClass;
