import { useState } from "react";
import styled from "styled-components";

interface EducationData {
    date: string;
    trainingName: string;
    trainingType: string;
    trainingNum: string;
    licenseDays: number;
    licenseDueDate: string;
    grade: number
}


export default function EduRecords() {
    const [dataList, setDataList] = useState<Array<EducationData>>([
        {
            date: "2023/02/06",
            trainingName: "實驗場所一般安全衛生教育訓練",
            trainingType: "一般安全衛生",
            trainingNum: "100A10008051664",
            licenseDays: 999,
            licenseDueDate: "2024-10-31",
            grade: 88
        },
        {
            date: "2023/02/06",
            trainingName: "實驗場所一般安全衛生教育訓練",
            trainingType: "一般安全衛生",
            trainingNum: "100A10008051665",
            licenseDays: 999,
            licenseDueDate: "2024-10-31",
            grade: 88
        },
        {
            date: "2023/02/06",
            trainingName: "實驗場所一般安全衛生教育訓練",
            trainingType: "一般安全衛生",
            trainingNum: "100A10008051666",
            licenseDays: 999,
            licenseDueDate: "2024-10-31",
            grade: 88
        },
    ])

    return (
        <div className="tab-pane fade" id="employee-tab-3">
            <StyledEduRecords>
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
                        {dataList.map(data => <Row key={data.trainingNum} {...data} />)}
                    </tbody>
                </table>
            </StyledEduRecords>
        </div>
    );
}


const StyledEduRecords = styled.div`
    overflow: auto;
    @media (max-width:560px){
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


const Row = (props: EducationData) => {
    return (
        <tr key={props.trainingNum}>
            <td data-title="受訓日期">{props.date}</td>
            <td data-title="受訓名稱">{props.trainingName}</td>
            <td data-title="訓練類型">{props.trainingType}</td>
            <td data-title="訓練證號">{props.trainingNum}</td>
            <td data-title="證照天數">{props.licenseDays}</td>
            <td data-title="證照到期日">{props.licenseDueDate}</td>
            <td data-title="成績">{props.grade}</td>
            <td data-title="管理"><i className="fas fa-trash-can"></i></td>
        </tr>
    )
}