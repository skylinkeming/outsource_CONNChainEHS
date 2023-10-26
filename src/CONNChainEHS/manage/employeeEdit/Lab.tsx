import React from "react";
import styled from "styled-components";

export default function Lab() {
    return (
        <div className="tab-pane fade active show" id="employee-tab-1">
            <StyledLab>
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
            </StyledLab>
        </div>
    );
}

const StyledLab = styled.div`

`