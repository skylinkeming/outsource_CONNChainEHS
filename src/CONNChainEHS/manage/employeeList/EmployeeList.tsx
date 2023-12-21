import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import EmployeeRow, { EmployeeRowData } from './EmployeeRow';
import Footer from '../../layout/Footer';
import SortIcon from '../../common/SortIcon';
import { EmployeeAPI } from '../../../api/employeeAPI';
import useLoginUser from '../../hooks/useLoginUser';
import Success from '../../common/Success';
import Warning from '../../common/Warnning';
import Loader from '../../common/Loader';

function EmployeeList() {
  const loginUser = useLoginUser();
  const searchInput = useRef<HTMLInputElement>(null)
  const [condition, setCondition] = useState<{
    keyword: string;
    currentPage: number;
    pageSize: number;
  }>({
    keyword: "",
    currentPage: 1,
    pageSize: 50,
  })
  const [pageInfo, setPageInfo] = useState<{
    totalPages: number;
    totalRows: number;
  }>({
    totalPages: 0,
    totalRows: 0
  })
  const [employDataList, setEmployDataList] = useState<Array<EmployeeRowData>>([]);
  const [localSearchKey, setLocalSearchKey] = useState("");
  const [localSearchResult, setLocalSearchResult] = useState<Array<EmployeeRowData>>([]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!loginUser) {
      return;
    }
    fetchData();
  }, [loginUser, condition])

  useEffect(() => {
    if (localSearchKey) {
      // console.log(employDataList);
      let resultList = employDataList.filter((data: any) => {
        if (
          (data.userId && data.userId.includes(localSearchKey)) ||
          (data.auth && data.auth.includes(localSearchKey)) ||
          (data.dept && data.dept.includes(localSearchKey)) ||
          (data.name && data.name.includes(localSearchKey)) ||
          (data.extension && data.extension.includes(localSearchKey))) {
          return data;
        }
      })
      setLocalSearchResult(resultList);
    }

  }, [localSearchKey])

  const fetchData = () => {
    if (!loginUser) {
      return;
    }
    setLoading(true)
    EmployeeAPI.getEmployeeList({
      loginUserId: loginUser!.loginUserId,
      loginRoleId: parseInt(loginUser!.loginRoleId),
      loginRoleLevel: loginUser!.loginRoleLevel,
      langType: loginUser!.langType,
      queryOid: "",
      keyword: condition.keyword,
      queryLabId: "",
      currentPage: condition.currentPage,
      pageSize: condition.pageSize
    }).then(result => {
      setLoading(false)
      if (result.status === 'Success') {
        setPageInfo({
          totalPages: result.pageinfo.totalPages,
          totalRows: result.pageinfo.totalRows
        })
        let showList = result.results.filter((data: any) => data.userStatus === 1 || data.userStatus === 0);
        let resultList = showList.map((data: any) => {
          return {
            userId: data.userId,
            roleId: data.roleId,
            name: data.userName,
            auth: data.jobTitle,
            dept: data.orgName,
            extension: data.userExt,
            activated: data.userStatus === 1 ? true : false,
          }
        })

        setEmployDataList(resultList)
      } else {
        alert(result.message)
      }
    }).catch(err => {
      alert(err)
      setLoading(false)
    })
  }

  const getShowList = () => {
    if (!localSearchKey) {
      return employDataList;
    }
    return localSearchResult;
  }

  const getPageInfo = () => {
    let firstNumber = (condition.currentPage - 1) * condition.pageSize ? ((condition.currentPage - 1) * condition.pageSize + 1) : 1;
    let finalNumber = ((firstNumber + condition.pageSize - 1) > pageInfo.totalRows) ? pageInfo.totalRows : (firstNumber + condition.pageSize - 1);
    return `Showing ${firstNumber} to ${finalNumber} of ${pageInfo.totalRows} entries`
  }

  const renderPageBtns = () => {
    let isFirstPage = condition.currentPage === 1;
    let isLastPage = condition.currentPage === pageInfo.totalPages;

    return (
      <ul className="pagination">
        <li className={"paginate_button page-item previous" + (isFirstPage ? " disabled" : "")} id="data-table-default_previous" onClick={() => {
          if (isFirstPage) {
            return;
          }
          setCondition({
            ...condition, currentPage: condition.currentPage - 1
          })
        }}>
          <a href="#" aria-controls="data-table-default" data-dt-idx="0" className="page-link">
            Previous
          </a>
        </li>
        <li className="paginate_button page-item active">
          <a href="#" aria-controls="data-table-default" data-dt-idx="1" className="page-link">{condition.currentPage}</a>
        </li>
        <li className={"paginate_button page-item next" + (isLastPage ? " disabled" : "")} id="data-table-default_next" onClick={() => {
          if (isLastPage) {
            return;
          }
          setCondition({
            ...condition, currentPage: condition.currentPage + 1
          })
        }}>
          <a href="#" aria-controls="data-table-default" data-dt-idx="2" className="page-link">Next
          </a>
        </li>
      </ul>
    )
  }


  return (
    <StyledEmployeeList loading={loading}>
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
                  <h5><i className="fas fa-magnifying-glass"></i> 查詢</h5>
                  <div className="row">
                    <div className="col-xl-3 d-flex align-items-center">
                      <label htmlFor="" className="pe-3">單位分類</label>
                      <select name="" id="" className="form-select w-75">
                        <option value="">行政</option>
                        <option value="">教學</option>
                        <option value="">中心</option>
                      </select>
                    </div>
                    <div className="col-xl-3 d-flex align-items-center">
                      <label htmlFor="" className="pe-3">學院</label>
                      <select name="" id="" className="form-select w-75">
                        <option value="">理學院</option>
                        <option value="">醫學院</option>
                      </select>
                    </div>
                    <div className="col-xl-3 d-flex align-items-center">
                      <label htmlFor="" className="pe-3">系所</label>
                      <select name="" id="" className="form-select w-75">
                        <option value="">理學院</option>
                        <option value="">醫學院</option>
                      </select>
                    </div>
                    <div className="col-xl-3 d-flex align-items-center">
                      <label htmlFor="">{'關鍵字查詢{{ 工號、姓名}}'}</label>
                      <input type="text" className="form-control w-75" placeholder="請輸入關鍵字查詢" ref={searchInput} />
                    </div>
                    <div className="buttonPanel col-xl-3 d-flex align-items-center">
                      <button type="button" className="btn btn-warning"
                        onClick={() => {
                          setCondition({ ...condition, keyword: searchInput.current!.value, currentPage: 1 })
                        }}>
                        <i className="fas fa-magnifying-glass" ></i> 查詢</button>
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
                      <select
                        value={condition.pageSize}
                        onChange={(e) => {
                          setCondition({
                            ...condition,
                            pageSize: parseInt(e.target.value),
                            currentPage: 1
                          })
                        }}
                        name="data-table-default_length"
                        aria-controls="data-table-default"
                        className="form-select form-select-sm"
                      >
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
                      <input value={localSearchKey} onChange={(e) => {
                        setLocalSearchKey(e.target.value)
                      }} type="search" className="form-control form-control-sm" placeholder="" aria-controls="data-table-default" />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <table id="data-table-default" className={'table table-striped table-hover align-middle dt-responsive nowrap'}>
                    <thead className="fs-4 fw-bold">
                      <tr>
                        <th>{t('table.title.item')} </th>
                        <th>工號 <SortIcon dataList={getShowList()} dataField={"userId"} setFunction={setEmployDataList} /></th>
                        <th>{t('table.title.name')} <SortIcon dataList={employDataList} dataField={"name"} setFunction={setEmployDataList} /></th>
                        <th>權限 <SortIcon dataList={getShowList()} dataField={"auth"} setFunction={setEmployDataList} /></th>
                        <th>單位 <SortIcon dataList={getShowList()} dataField={"dept"} setFunction={setEmployDataList} /></th>
                        {/* <th>系所</th> */}
                        <th>分機 <SortIcon dataList={getShowList()} dataField={"extension"} setFunction={setEmployDataList} /></th>
                        <th data-orderable="false">啟用 <SortIcon dataList={employDataList} dataField={"activated"} setFunction={setEmployDataList} /></th>
                        <th data-orderable="false">管理</th>
                      </tr>
                    </thead>
                    <tbody className="text-center fs-5">
                      {loading && <Loader />}
                      {!loading && getShowList().map((data, idx) => {
                        return <EmployeeRow
                          key={data.userId + idx}
                          index={idx + 1}
                          data={data}
                          onChangeStatus={(activated) => {
                            EmployeeAPI.changeUserStatus({
                              ...loginUser!,
                              userId: data.userId,
                              userStatus: activated ? "1" : "0"
                            }).then(result => {
                              if (result.status === 'Success') {
                                Success("變更成功")
                                let cloneList = [...employDataList];
                                let updateData = cloneList.filter(updateData => updateData.userId === data.userId);
                                if (updateData.length) {
                                  updateData[0].activated = activated;
                                  setEmployDataList(cloneList);
                                }
                              } else {
                                Warning(result.message);
                              }
                            }).catch(err => {
                              Warning(err);
                            })

                          }}
                          onDelete={() => {
                            EmployeeAPI.deleteUser({
                              ...loginUser!,
                              userId: data.userId
                            }).then(result => {
                              console.log(result);
                              if (result.status === 'Success') {
                                let updateDataList = [...employDataList].filter((updateData, index) => index !== idx);
                                setEmployDataList(updateDataList);
                                Success("刪除成功")
                              } else {
                                Warning(result.message);
                              }
                            }).catch(err => {
                              Warning(err);
                            })

                          }}
                        />
                      })}
                    </tbody>
                  </table>
                  <div className="row bottomFunctionRow">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" role="status" aria-live="polite">{getPageInfo()}
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div className="dataTables_paginate paging_simple_numbers">
                        {renderPageBtns()}
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
        <Footer />
        {/* END #footer */}
      </div>
    </StyledEmployeeList>
  );
}


const StyledEmployeeList = styled.div<{ loading?: boolean }>`
  padding-bottom:150px;

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
  table {
    position:relative;
    min-height:${props => props.loading ? "200px" : "auto"};
    th {
      text-align: center;
      white-space:nowrap;
    }
    .fas {
      font-size: 1.2rem;
      padding: 0.5rem;
    }
    .fas.fa-trash-can{
      color: tomato;
    }
    tr:nth-of-type(2n+1){
      background:#e9ecef;
    }
    td {
      .form-check {
        justify-content:center;  
      }
    }
  }

  @media (max-width: 600px){
    label {
      width:200px;
    }
    .buttonPanel {
      margin-top:10px;
      display:flex;
      justify-content: flex-end;
    }
    table {
      thead {
        display:none;
      }
      tbody, td, tr {
        display:block;
        background: #fff !important;
        box-shadow: inset 0 0 0 9999px white;

      }
      tr {
        border: 1px solid #ccc;
        margin-bottom: 10px;
        background: #fff !important;
      }
      td {
        background: #fff!important;
        position:relative;
        padding-left: 100px;
        text-align:left;
        min-height:39.5px;
        .form-check {
          justify-content:start;  
        }
      }
      td::before {
          content: attr(data-title);
          position: absolute;
          top: 6px;
          left: 6px;
          width: 30%;
          padding-right: 10px;
          white-space: nowrap;
          text-align: left;
          font-weight: bold;
          color: #1a1a1a;
      }

    }
    
  }
`


export default EmployeeList;
