import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { RoleAPI } from "../../../api/roleAPI";
import useLoginUser from "../../hooks/useLoginUser";
import Warning from "../../common/Warnning";

interface OtherAuthData {
    authType: string;
    unit: string;
}

export default function OtherAuths() {
    const loginUser = useLoginUser();
    const [roleList, setRoleList] = useState<Array<any>>([]);

    const [dataList, setDataList] = useState<Array<OtherAuthData>>([
        {
            authType: "實驗室負責人",
            unit: "奈微與材料科技中心"
        },
        {
            authType: "管理者",
            unit: "半導體中心"
        },
    ]);

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

            }
        }).catch(err => {
            Warning(err)
        })
    }, [])


    return (
        <div className="tab-pane fade" id="employee-tab-2">
            <StyledOtherAuths>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <h5>實驗室權限</h5>
                                <select name="" id="" className="form-select" data-parsley-required="true">
                                    {roleList.map((data: any) => <option key={data.roleId} value={data.roleId}>{data.roleName}</option>)}
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
                        {dataList.map(data => <Row key={data.unit} {...data} />)}

                    </tbody>
                </table>
            </StyledOtherAuths>
        </div>
    );

}


const Row = (props: OtherAuthData) => {
    return (<tr>
        <td data-title="權限">{props.authType}</td>
        <td data-title="單位">{props.unit}</td>
        <td data-title="管理"><i className="fas fa-trash-can"></i></td>
    </tr>)
}

const StyledOtherAuths = styled.div`
    .fas.fa-trash-can{
        cursor:pointer;
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