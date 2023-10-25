import React from 'react';

function EmployeeEdit() {
  return (
    <div id="content" className="d-flex flex-column p-0">
      {/* BEGIN scrollbar */}
      <div className="app-content-padding flex-grow-1">
        {/* BEGIN breadcrumb */}
        <ol className="breadcrumb float-xl-end">
          <li className="breadcrumb-item">首頁</li>
          <li className="breadcrumb-item active">單位與人員管理</li>
          <li className="breadcrumb-item">人員管理</li>
          <li className="breadcrumb-item active">個人資料</li>
        </ol>
        {/* END breadcrumb */}
        {/* BEGIN page-header */}
        <h1 className="page-header">個人資料</h1>
        {/* END page-header */}

        {/* BEGIN row */}
        <button type="button" className="btn btn-default fs-5" onClick={() => { }} value="回上一頁">
          <i className="fas fa-arrow-left"></i> 回上一頁
        </button>
        <div className="row mt-3">
          {/* 左邊基本資料 */}
          <div className="col-xl-4">
            <div className="card py-3">
              <div className="card-body text-center" id="profile">
                <form action="" method="" data-parsley-validate="true">
                  <img src="../img/user-3.jpg" alt="頭像" className="rounded-circle" />
                  <div className="fs-3 my-3">CloudT001</div>
                  <div className="fs-5 my-3">入學日： <b>2022-01-01</b></div>
                  <hr className="mx-5" />
                  <div className="row text-start mb-3 mx-5 align-items-center">
                    <div className="col-md-3 mb-3">姓名</div>
                    <div className="col-md-9 mb-3 fs-5">
                      <span className="edit">雲集管理者</span>
                      <input type="text" className="form-control d-none" value="雲集管理者" data-parsley-required="true" />
                    </div>
                    <div className="col-md-3 mb-3">職稱</div>
                    <div className="col-md-9 mb-3 fs-5">
                      <span className="edit">專案組員</span>
                      <select name="" id="" className="form-select d-none" data-parsley-required="true">
                        <option value="01">專案組員</option>
                        <option value="02">環安中心人員</option>
                        <option value="03">實驗室負責人</option>
                      </select>
                    </div>
                    <div className="col-md-3 mb-3">目前權限</div>
                    <div className="col-md-9 mb-3 fs-5">
                      <span className="edit">管理者</span>
                      <select name="" id="" className="form-select d-none" data-parsley-required="true">
                        <option value="01">管理者</option>
                        <option value="02">環安中心人員</option>
                        <option value="03">實驗室負責人</option>
                      </select>
                    </div>
                    <div className="col-md-3 mb-3">信箱</div>
                    <div className="col-md-9 fs-5 mb-3">
                      <span className="edit">CloudT001@cloudthink.com.tw</span>
                      <input type="email" className="form-control d-none" value="CloudT001@cloudthink.com.tw" data-parsley-type="email" data-parsley-required="true" />
                    </div>
                    <div className="col-md-3 mb-3">備用信箱</div>
                    <div className="col-md-9 fs-5 mb-3">
                      <span className="edit">CloudT001@cloudthink.com.tw</span>
                      <input type="email" className="form-control d-none" value="CloudT001@cloudthink.com.tw" data-parsley-type="email" data-parsley-required="true" />
                    </div>
                    <div className="col-md-3 mb-3">手機</div>
                    <div className="col-md-9 mb-3 fs-5">
                      <span className="edit">0900-123456</span>
                      <input type="text" className="form-control d-none" value="0900-123456" id="masked-input-phone" data-parsley-required="true" />
                    </div>
                    <div className="col-md-3 mb-3">分機</div>
                    <div className="col-md-9 mb-3 fs-5">
                      <span className="edit">12345</span>
                      <input type="text" className="form-control d-none" value="12345" data-parsley-required="true" />
                    </div>
                    <div className="col-md-3 mb-3">學院</div>
                    <div className="col-md-9 fs-5 mb-3">
                      <span className="edit">電機資訊學院</span>
                      <select name="" id="" className="form-select d-none" data-parsley-required="true">
                        <option value="01">電機資訊學院</option>
                        <option value="02">理學院</option>
                        <option value="03">工學院</option>
                      </select>
                    </div>
                    <div className="col-md-3 mb-3">系所</div>
                    <div className="col-md-9 fs-5 mb-3">
                      <span className="edit">電機資訊學院</span>
                      <select name="" id="" className="form-select d-none" data-parsley-required="true">
                        <option value="01">電機資訊學院</option>
                        <option value="02">理學院</option>
                        <option value="03">工學院</option>
                      </select>
                    </div>
                    <div className="col-md-3 mb-3">生日</div>
                    <div className="col-md-9 fs-5 mb-3">
                      <span className="edit">2000/01/01</span>
                      <input type="text" className="form-control d-none" id="datepicker-autoClose" value="2000/01/01" />
                    </div>
                    <div className="col-md-3 mb-3">性別</div>
                    <div className="col-md-9 fs-5 mb-3">
                      <span className="edit">男</span>
                      <select name="" id="" className="form-select d-none" data-parsley-required="true">
                        <option value="01">男</option>
                        <option value="02">女</option>
                      </select>
                    </div>
                    <div className="col-md-3 mb-3">原單位工號</div>
                    <div className="col-md-9 mb-3 fs-5">
                      <span className="edit">AAA087087</span>
                      <input type="text" className="form-control d-none" value="AAA087087" data-parsley-required="true" />
                    </div>
                    <div className="col-md-3 mb-3">原屬單位</div>
                    <div className="col-md-9 mb-3 fs-5">
                      <span className="edit">隔壁的大學</span>
                      <input type="text" className="form-control d-none" value="隔壁的大學" data-parsley-required="true" />
                    </div>
                  </div>
                  <div className="row me-5">
                    <div className="col-md-12 text-end">
                      <button type="button" className="btn btn-warning fs-5" title="修改個人資料" data-type="edit" id="changeInput">
                        <i className="fas fa-pen-to-square"></i> 修改個人資料
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
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
              <div className="tab-pane fade active show" id="employee-tab-1">
                {/* 查詢實驗室 */}
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5>實驗室權限</h5>
                        <select name="" id="" className="form-select" data-parsley-required="true">
                          <option value="01">管理者</option>
                          <option value="02">環安中心人員</option>
                          <option value="03">實驗室負責人</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <h5>實驗室關鍵字查詢</h5>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-4">
                        <button type="button" className="btn btn-gray fs-5 rounded-circle" title="查詢">
                          <i className="fas fa-magnifying-glass"></i>
                        </button>
                      </div>
                    </div>
                    <hr />
                    {/* 按下查詢後出現表格 */}
                    <table className="table table-hover text-center align-middle">
                      <thead>
                        <tr>
                          <th>單位</th>
                          <th>實驗室編號</th>
                          <th>實驗室名稱</th>
                          <th>管理</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>環境保護暨安全衛生中心</td>
                          <td>B0041F104</td>
                          <td>測試雲集實驗室</td>
                          <td>
                            <button type="button" className="btn btn-warning btn-sm" title="加入至此實驗室">
                              加入至此實驗室
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>環環境保護暨安全衛生中心</td>
                          <td>B0041F104</td>
                          <td>測試雲集實驗室</td>
                          <td>
                            <button type="button" className="btn btn-warning btn-sm" title="加入至此實驗室">
                              加入至此實驗室
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>環環境保護暨安全衛生中心</td>
                          <td>B0041F104</td>
                          <td>測試雲集實驗室</td>
                          <td>
                            <button type="button" className="btn btn-warning btn-sm" title="加入至此實驗室">
                              加入至此實驗室
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* 所屬實驗室表格 */}
                <table className="table table-hover text-center align-middle">
                  <thead className="fs-4 fw-bold table-info table-bordered">
                    <tr>
                      <th>權限</th>
                      <th>單位</th>
                      <th>實驗室名稱</th>
                      <th>管理</th>
                    </tr>
                  </thead>
                  <tbody className="text-center fs-5">
                    <tr>
                      <td>實驗室負責人</td>
                      <td>奈微與材料科技中心</td>
                      <td>341350 奈材中心無塵室</td>
                      <td><a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a></td>
                    </tr>
                    <tr>
                      <td>實驗室負責人</td>
                      <td>奈微與材料科技中心</td>
                      <td>341350 奈材中心無塵室</td>
                      <td><a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a></td>
                    </tr>
                    <tr>
                      <td>實驗室負責人</td>
                      <td>奈微與材料科技中心</td>
                      <td>341350 奈材中心無塵室</td>
                      <td><a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* 其他權限 */}
              <div className="tab-pane fade" id="employee-tab-2">
                {/* 查詢實驗室 */}
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <h5>實驗室權限</h5>
                        <select name="" id="" className="form-select" data-parsley-required="true">
                          <option value="01">管理者</option>
                          <option value="02">環安中心人員</option>
                          <option value="03">實驗室負責人</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <h5>學院</h5>
                        <select name="" id="" className="form-select" data-parsley-required="true">
                          <option value="01">理學院</option>
                          <option value="02">工學院</option>
                          <option value="03">醫學院</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <h5>系所</h5>
                        <select name="" id="" className="form-select" data-parsley-required="true">
                          <option value="01">理學院</option>
                          <option value="02">工學院</option>
                          <option value="03">醫學院</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <button type="button" className="btn btn-gray fs-5" title="加入此權限">
                          <i className="fa-solid fa-user-plus"></i> 加入此權限
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 其他權限表格 */}
                <table className="table table-hover text-center align-middle">
                  <thead className="fs-4 fw-bold table-success table-bordered">
                    <tr>
                      <th>權限</th>
                      <th>單位</th>
                      <th>管理</th>
                    </tr>
                  </thead>
                  <tbody className="text-center fs-5">
                    <tr>
                      <td>實驗室負責人</td>
                      <td>奈微與材料科技中心</td>
                      <td><a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a></td>
                    </tr>
                    <tr>
                      <td>實驗室負責人</td>
                      <td>奈微與材料科技中心</td>
                      <td><a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a></td>
                    </tr>
                    <tr>
                      <td>實驗室負責人</td>
                      <td>奈微與材料科技中心</td>
                      <td><a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* 教育訓練紀錄 */}
              <div className="tab-pane fade" id="employee-tab-3">
                <table className="table table-hover text-center align-middle">
                  <thead className="fs-4 fw-bold table-warning table-bordered">
                    <tr>
                      <th>受訓日期</th>
                      <th>受訓名稱</th>
                      <th>訓練類型</th>
                      <th>訓練證號</th>
                      <th>證照天數</th>
                      <th>證照到期日</th>
                      <th>成績</th>
                      <th>管理</th>
                    </tr>
                  </thead>
                  <tbody className="text-center fs-5">
                    <tr>
                      <td>2023/02/06</td>
                      <td>實驗場所一般安全衛生教育訓練</td>
                      <td>一般安全衛生</td>
                      <td>100A10008051664</td>
                      <td>999</td>
                      <td>2024-10-31</td>
                      <td>88</td>
                      <td><a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a></td>
                    </tr>
                    <tr>
                      <td>2023/02/06</td>
                      <td>實驗場所一般安全衛生教育訓練</td>
                      <td>一般安全衛生</td>
                      <td>100A10008051664</td>
                      <td>999</td>
                      <td>2024-10-31</td>
                      <td>88</td>
                      <td><a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a></td>
                    </tr>
                    <tr>
                      <td>2023/02/06</td>
                      <td>實驗場所一般安全衛生教育訓練</td>
                      <td>一舷權益</td>
                      <td>100A10008051664</td>
                      <td>999</td>
                      <td>2024-10-31</td>
                      <td>88</td>
                      <td><a href="#" className="deleteAlert"><i className="fas fa-trash-can"></i></a></td>
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
    </div>
  );
}

export default EmployeeEdit;
