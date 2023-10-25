import React, { useState } from 'react';
import styled from 'styled-components';
import EmployeeRow, { EmployeeRowData } from './EmployeeRow.tsx';

function EmployeeList() {
  const [employDataList, setEmployDataList] = useState<Array<EmployeeRowData>>([
    {
      userId: "AAA000",
      name: "王大明",
      auth: "系安管",
      dept: "XX中心",
      extension: "12345",
      activated: false,
    },
    {
      userId: "AAA000",
      name: "王大明",
      auth: "系安管",
      dept: "理學院",
      extension: "12345",
      activated: false,
    },
    {
      userId: "AAA000",
      name: "王大明",
      auth: "系安管",
      dept: "理學院",
      extension: "12345",
      activated: false,
    },
    {
      userId: "BBB123",
      name: "李曉華",
      auth: "專員",
      dept: "工學院化學工程系",
      extension: "45678",
      activated: false,
    },
    {
      userId: "BBB123",
      name: "李曉華",
      auth: "專員",
      dept: "工學院",
      extension: "45678",
      activated: false,
    },
    {
      userId: "BBB123",
      name: "陳雅婷",
      auth: "助理教授",
      dept: "電機資訊學院",
      extension: "12345",
      activated: true,
    },
    {
      userId: "BBB123",
      name: "陳雅婷",
      auth: "實習生",
      dept: "電機資訊學院理學工程系",
      extension: "89898",
      activated: true,
    },
    {
      userId: "BBB123",
      name: "陳雅婷",
      auth: "教授",
      dept: "電機資訊學院理學工程系",
      extension: "89898",
      activated: true,
    },
  ]);


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
                      {employDataList.map((data, idx) => {
                        return <EmployeeRow index={idx + 1} data={data} />
                      })}
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
