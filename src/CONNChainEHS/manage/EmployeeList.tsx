import React from 'react';
import styled from 'styled-components';

function EmployeeList() {
  return (
    <StyledEmployeeList>
    <div className="d-flex flex-column p-0" id="content">
      {/* BEGIN scrollbar */}
      <div className="app-content-padding flex-grow-1">
        {/* BEGIN breadcrumb */}
        <ol className="breadcrumb float-xl-end">
          <li className="breadcrumb-item"><a href="../index.html">首頁</a></li>
          <li className="breadcrumb-item active">單位與人員管理</li>
          <li className="breadcrumb-item active">人員管理</li>
        </ol>
        {/* END breadcrumb */}
        {/* BEGIN page-header */}
        <h1 className="page-header">人員管理</h1>
        {/* END page-header */}

        {/* BEGIN row */}
        <div className="row">
          <div className="col-xl-12">
            {/* 查詢 */}
            <div className="card">
              <div className="card-body p-4">
                <h5><i className="fas fa-search"></i> 查詢</h5>
                <div className="column">
                  <div className="col-xl-3 d-flex align-items-center w-100 mt-3">
                    <label htmlFor="" className="pe-3 w-25">單位分類</label>
                    <select name="" id="" className="form-select w-75">
                      <option value="">行政</option>
                      <option value="">教學</option>
                      <option value="">中心</option>
                    </select>
                  </div>
                  <div className="col-xl-3 d-flex align-items-center w-100 mt-3">
                    <label htmlFor="" className="pe-3 w-25">學院</label>
                    <select name="" id="" className="form-select w-75">
                      <option value="">理學院</option>
                      <option value="">醫學院</option>
                    </select>
                  </div>
                  <div className="col-xl-3 d-flex align-items-center w-100 mt-3">
                    <label htmlFor="" className="pe-3 w-25">系所</label>
                    <select name="" id="" className="form-select w-75">
                      <option value="">理學院</option>
                      <option value="">醫學院</option>
                    </select>
                  </div>
                  <div className="col-xl-3 d-flex align-items-center w-100 mt-3">
                    <label htmlFor="" className="w-25">關鍵字查詢</label>
                    <input type="text" className="form-control w-75" placeholder="請輸入關鍵字查詢" />
                  </div>
                  <div className="buttonRow col-xl-3 d-flex align-items-center">
                    <button type="button" className="btn btn-warning">
                      <i className="fas fa-search"></i> 查詢
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* 列表 */}
            <div className="card py-3">
              <div className="card-body">
                <table id="data-table-default" className="table table-hover table-striped align-middle dt-responsive nowrap">
                  <thead className="fs-4 fw-bold">
                    <tr>
                      <th>項次</th>
                      <th>工號</th>
                      <th>姓名</th>
                      <th>權限</th>
                      <th>單位</th>
                      {/* <th>系所</th> */}
                      <th>分機</th>
                      <th data-orderable="false">啟用</th>
                      <th data-orderable="false">管理</th>
                    </tr>
                  </thead>
                  <tbody className="text-center fs-5">
                    <tr>
                      <td width="5%">1</td>
                      <td>AAA000</td>
                      <td>王大明</td>
                      <td>系安管</td>
                      <td>XX中心</td>
                      {/* <td></td> */}
                      <td>12345</td>
                      <td><input type="checkbox" className="switchery-area" checked /></td>
                      <td>
                        <a href="../manage/employeeEdit.html"><i className="fas fa-user"></i></a>
                        <a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">2</td>
                      <td>AAA000</td>
                      <td>王大明</td>
                      <td>系安管</td>
                      <td>理學院</td>
                      {/* <td></td> */}
                      <td>12345</td>
                      <td><input type="checkbox" className="switchery-area" checked /></td>
                      <td>
                        <a href="#"><i className="fas fa-user"></i></a>
                        <a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">3</td>
                      <td>AAA000</td>
                      <td>王大明</td>
                      <td>系安管</td>
                      <td>理學院</td>
                      {/* <td></td> */}
                      <td>12345</td>
                      <td><input type="checkbox" className="switchery-area" checked /></td>
                      <td>
                        <a href="#"><i className="fas fa-user"></i></a>
                        <a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">4</td>
                      <td>BBB123</td>
                      <td>李曉華</td>
                      <td>專員</td>
                      <td>工學院 <br />化學工程系</td>
                      {/* <td></td> */}
                      <td>45678</td>
                      <td><input type="checkbox" className="switchery-area" checked /></td>
                      <td>
                        <a href="#"><i className="fas fa-user"></i></a>
                        <a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">5</td>
                      <td>BBB123</td>
                      <td>李曉華</td>
                      <td>專員</td>
                      <td>工學院 <br />化學工程系</td>
                      {/* <td>化學工程系</td> */}
                      <td>45678</td>
                      <td><input type="checkbox" className="switchery-area" checked /></td>
                      <td>
                        <a href="#"><i className="fas fa-user"></i></a>
                        <a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">6</td>
                      <td>BBB123</td>
                      <td>李曉華</td>
                      <td>專員</td>
                      <td>工學院</td>
                      {/* <td>化學工程系</td> */}
                      <td>45678</td>
                      <td><input type="checkbox" className="switchery-area" checked /></td>
                      <td>
                        <a href="#"><i className="fas fa-user"></i></a>
                        <a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">7</td>
                      <td>BBB123</td>
                      <td>陳雅婷</td>
                      <td>助理教授</td>
                      <td>電機資訊學院</td>
                      {/* <td>化學工程系</td> */}
                      <td>12345</td>
                      <td><input type="checkbox" className="switchery-area" checked /></td>
                      <td>
                        <a href="#"><i className="fas fa-user"></i></a>
                        <a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">8</td>
                      <td>BBB123</td>
                      <td>陳雅婷</td>
                      <td>實習生</td>
                      <td>電機資訊學院    <br />理學工程系</td>
                      {/* <td>化學工程系</td> */}
                      <td>89898</td>
                      <td><input type="checkbox" className="switchery-area" checked /></td>
                      <td>
                        <a href="#"><i className="fas fa-user"></i></a>
                        <a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">9</td>
                      <td>BBB123</td>
                      <td>陳雅婷</td>
                      <td>教授</td>
                      <td>電機資訊學院    <br />理學工程系</td>
                      {/* <td>化學工程系</td> */}
                      <td>89898</td>
                      <td><input type="checkbox" className="switchery-area" checked /></td>
                      <td>
                        <a href="#"><i className="fas fa-user"></i></a>
                        <a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
    </StyledEmployeeList>
  );
}


const StyledEmployeeList = styled.div`
    .buttonRow {
        width:100%;
        margin-top:10px;
        display:flex;
        justify-content:right;
    }
`


export default EmployeeList;
