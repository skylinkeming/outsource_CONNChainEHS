import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import EmployeeRow, { EmployeeRowData } from './EmployeeRow';

function EmployeeList() {
  const [employDataList, setEmployDataList] = useState<Array<EmployeeRowData>>([
    {
      userId: "AAA001",
      name: "王大明",
      auth: "系安管",
      dept: "XX中心",
      extension: "12345",
      activated: false,
    },
    {
      userId: "AAA002",
      name: "王大明",
      auth: "系安管",
      dept: "理學院",
      extension: "12345",
      activated: false,
    },
    {
      userId: "AAA003",
      name: "王大明",
      auth: "系安管",
      dept: "理學院",
      extension: "12345",
      activated: false,
    },
    {
      userId: "BBB121",
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
      userId: "BBB124",
      name: "陳雅婷",
      auth: "助理教授",
      dept: "電機資訊學院",
      extension: "12345",
      activated: true,
    },
    {
      userId: "BBB125",
      name: "陳雅婷",
      auth: "實習生",
      dept: "電機資訊學院理學工程系",
      extension: "89898",
      activated: true,
    },
    {
      userId: "BBB126",
      name: "陳雅婷",
      auth: "教授",
      dept: "電機資訊學院理學工程系",
      extension: "89898",
      activated: true,
    },
  ]);
  const { t } = useTranslation();


  return (
    <StyledEmployeeList>
      <div className="d-flex flex-column p-0" id="content">
        {/* BEGIN scrollbar */}
        <div className="app-content-padding flex-grow-1">
          {/* BEGIN breadcrumb */}
          <ol className="breadcrumb float-xl-end">
            <li className="breadcrumb-item"><a href="../index.html">{t('breadcrumb.home')}</a></li>
            <li className="breadcrumb-item active">{t('breadcrumb.unit_user_manage')}</li>
            <li className="breadcrumb-item active">{t('breadcrumb.user_manage')}</li>
          </ol>
          {/* END breadcrumb */}
          {/* BEGIN page-header */}
          <h1 className="page-header">{t('breadcrumb.user_manage')}</h1>
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
                      <label htmlFor="" className="w-25">{"關鍵字查詢{{工號、姓名}}"}</label>
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
                <div className="row topFunctionRow">
                  <div className="col-sm-12 col-md-6 left">
                    <div className="dataTables_length d-flex align-items-center">
                      Show
                      <select name="data-table-default_length" aria-controls="data-table-default" className="form-select form-select-sm">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      entries
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 right">
                    <div className="dataTables_filter d-flex">
                      Search:
                      <input type="search" className="form-control form-control-sm" placeholder="" aria-controls="data-table-default" />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <table id="data-table-default" className="table table-hover table-striped align-middle dt-responsive nowrap">
                    <thead className="fs-4 fw-bold">
                      <tr>
                        <th>{t('table.title.item')}</th>
                        <th>工號</th>
                        <th>{t('table.title.name')}</th>
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
                        return <EmployeeRow
                          index={idx + 1}
                          data={data}
                          onChangeStatus={(activated) => {
                            let cloneList = [...employDataList];
                            let updateData = cloneList.filter(updateData => updateData.userId === data.userId);
                            if (updateData.length) {
                              updateData[0].activated = activated;
                              setEmployDataList(cloneList);
                            }
                          }}
                          onDelete={() => {
                            let updateDataList = [...employDataList].filter((updateData, index) => index !== idx);
                            setEmployDataList(updateDataList);
                          }}
                        />
                      })}
                    </tbody>
                  </table>
                  <div className="row bottomFunctionRow">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" role="status" aria-live="polite">Showing 1 to 9 of 9 entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div className="dataTables_paginate paging_simple_numbers">
                        <ul className="pagination">
                          <li className="paginate_button page-item previous disabled" id="data-table-default_previous">
                            <a href="#" aria-controls="data-table-default" data-dt-idx="0" className="page-link">
                              Previous
                            </a>
                          </li>
                          <li className="paginate_button page-item active">
                            <a href="#" aria-controls="data-table-default" data-dt-idx="1" className="page-link">1</a>
                          </li>
                          <li className="paginate_button page-item next disabled" id="data-table-default_next">
                            <a href="#" aria-controls="data-table-default" data-dt-idx="2" className="page-link">Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
  .card-body {
    overflow-x:auto;
    font-size: 14px;
  }
  .topFunctionRow{
    padding:0 15px;
    .left {
      select {
        width:80px;
        margin:0 10px;
      }
    }
    .right {
      .dataTables_filter{
        justify-content: right;
        align-items: center;
        @media (max-width:767px){
          justify-content:left;
          margin-top:10px;
        }
        input {
          width:200px;
          margin-left:10px;
        }
      }
    }
  }
  .bottomFunctionRow {
    .pagination {
      justify-content:right;
    }
  }
  th {
    text-align: center;
    white-space:nowrap;
  }
  table {
    .fas {
      font-size: 1.2rem;
      padding: 0.5rem;
    }
    .fas.fa-trash-can{
      color: tomato;
    }
  }
`


export default EmployeeList;
