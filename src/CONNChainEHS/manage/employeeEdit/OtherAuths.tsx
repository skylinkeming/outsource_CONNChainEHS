import styled from "styled-components";
import React from "react";

export default function OtherAuths() {
    return (
        <div className="tab-pane fade" id="employee-tab-2">
            <StyledOtherAuths>
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
            </StyledOtherAuths>
        </div>
    );

}

const StyledOtherAuths = styled.div`

`