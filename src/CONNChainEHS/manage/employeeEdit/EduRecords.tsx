import styled from "styled-components";


export default function EduRecords() {
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
            </StyledEduRecords>
        </div>
    );
}


const StyledEduRecords = styled.div`
    overflow: auto;
`