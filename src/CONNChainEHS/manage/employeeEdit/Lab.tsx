import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RoleAPI } from "../../../api/roleAPI";
import useLoginUser from "../../hooks/useLoginUser";
import { EmployeeAPI } from "../../../api/employeeAPI";
import Warning from "../../common/Warnning";
import Success from "../../common/Success";

interface LabData {
    unit: string;
    labNo: string;
    labName: string;
    labId: string;
    orgId: string;
}
interface LabData2 {
    auth: string;
    unit: string;
    labNo: string;
    labName: string;
}

export default function Lab() {
    const loginUser = useLoginUser()
    const [roleList, setRoleList] = useState<Array<any>>([]);
    const [keyword, setKeyword] = useState<string>("");
    const [selectedLabRole, setSelectedLabRole] = useState<string>("")
    const [labDataList, setLabDataList] = useState<Array<LabData>>([
    ])
    const [labDataList2, setLabDataList2] = useState<Array<LabData2>>([
        {
            auth: "實驗室負責人",
            unit: "環境保護及安全衛生中心",
            labNo: "B0041F104",
            labName: "測試雲集實驗室"
        },
        {
            auth: "實驗室負責人",
            unit: "環境保護及安全衛生中心",
            labNo: "B0041F105",
            labName: "測試雲集實驗室"
        },
        {
            auth: "實驗室負責人",
            unit: "環境保護及安全衛生中心",
            labNo: "B0041F106",
            labName: "測試雲集實驗室"
        },
    ])

    useEffect(() => {
        RoleAPI.getRoleList({
            ...loginUser!
        }).then(result => {
            if (result.status === 'Success') {
                setRoleList(result.results.map((data: any) => {
                    return {
                        roleName: data.roleName,
                        roleId: data.roleId
                    }
                }))
            } else {
                Warning(result.message);
            }
            fetchLabs();
        })
            .catch(err => {
                Warning(err);
            })
    }, [])

    useEffect(() => {
        if (!keyword) {
            fetchLabs()
        }
    }, [keyword])

    const fetchLabs = () => {
        EmployeeAPI.searchLab({
            ...loginUser!,
            keyword: keyword
        }).then(result => {
            if (result.status === 'Success') {
                if (keyword && result.results.length > 20) {
                    alert("數量過多，請縮小搜尋範圍")
                    return;
                }
                setLabDataList(result.results.map((data: any) => {
                    return {
                        unit: data.orgName,
                        labNo: data.labNo,
                        labName: data.labName,
                        orgId: data.orgId,
                        labId: data.labId
                    }
                }))
            } else {
                Warning(result.message);
            }
        }).catch(err => {
            alert(err);
        })
    }

    const joinLab = (labData: LabData) => {
        const url = new URL(window.location.href);
        const userId = url.searchParams.get("userId");
        EmployeeAPI.joinLab({
            ...loginUser!,
            labId: labData.labId,
            orgId: labData.orgId,
            userId: userId!,
            roleId: selectedLabRole!
        }).then(result => {
            console.log(result)
            if (result.status === 'Success') {
                Success(result.message);
            } else {
                Warning(result.message);
            }
        }).catch(err => {
            alert(err);
        })
    }

    return (
        <div className="tab-pane fade active show" id="employee-tab-1">
            <StyledLab>
                {/* 查詢實驗室 */}
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row align-items-end">
                            <div className="col-md-4">
                                <h5>實驗室權限</h5>
                                <select name="" id="" className="form-select" data-parsley-required="true" value={selectedLabRole} onChange={(e) => { setSelectedLabRole(e.target.value) }}>
                                    {roleList.map((data: any) => <option key={data.roleId} value={data.roleId}>{data.roleName}</option>)}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <h5>實驗室關鍵字查詢</h5>
                                <input value={keyword} type="text" className="form-control" onChange={e => setKeyword(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <button type="button" className="btn btn-gray fs-5 rounded-circle" title="查詢" onClick={fetchLabs}>
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
                                {labDataList.map(data => <Row1 key={data.labNo} lab={data} onClickJoin={() => {
                                    joinLab(data);
                                }} />)}
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
                        {labDataList2.map(data => <Row2 key={data.labNo} {...data} />)}
                        {/* <tr>
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
                        </tr> */}
                    </tbody>
                </table>
            </StyledLab>
        </div>
    );
}

const Row1 = (props: { lab: LabData, onClickJoin: () => void }) => {
    return (
        <tr>
            <td data-title="單位">{props.lab.unit}</td>
            <td data-title="實驗室編號">{props.lab.labNo}</td>
            <td data-title="實驗室名稱">{props.lab.labName}</td>
            <td data-title="管理">
                <button type="button" className="btn btn-warning btn-sm" title="加入至此實驗室" onClick={props.onClickJoin}>
                    加入至此實驗室
                </button>
            </td>
        </tr>
    );
}
const Row2 = (props: LabData2) => {
    return (
        <tr>
            <td data-title="權限">{props.auth}</td>
            <td data-title="單位">{props.unit}</td>
            <td data-title="實驗室名稱">{props.labName}</td>
            <td data-title="管理">
                <i className="fas fa-trash-can" />
            </td>
        </tr>
    );
}

const StyledLab = styled.div`

   @media (max-width: 600px){
        label {
            width:200px;
        }
        .buttonPanel {
            margin-top:10px;
            display:flex;
            justify-content: flex-end;
        }
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
`