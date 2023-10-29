import styled from "styled-components"


export default function AddRole(props:{clickCloseBtn:()=>void}) {
    return (
        <StyledAddRole>
            <div className="addRole">
                <form action="" method="" data-parsley-validate="true">
                    <div className="addRole-header">
                        <h4 className="modal-title">新增角色</h4>
                        <button type="button" className="btn-close" aria-hidden="true" onClick={props.clickCloseBtn}></button>
                    </div>
                    <div className="addRole-body">
                        <div className="row mb-4 justify-content-center">
                            <div className="col-md-10">
                                <label htmlFor="" className="fw-bold mb-1">請選擇角色階層：
                                    <span className="text-danger">*</span>
                                </label>
                                <select name="" id="" className="form-select form-select-lg" data-parsley-required="true">
                                    <option value="">請選擇</option>
                                    <option value="01">階級二</option>
                                    <option value="02">階級三</option>
                                    <option value="03">階級四</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-4 justify-content-center">
                            <div className="col-md-10">
                                <label htmlFor="" className="fw-bold mb-1">請輸入角色名稱：
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control form-control-lg" data-parsley-required="true"
                                    placeholder="請輸入角色名稱" />
                            </div>
                        </div>
                        <div className="row mb-4 justify-content-center">
                            <div className="col-md-10">
                                <label htmlFor="" className="fw-bold mb-1">請輸入角色說明：</label>
                                <input type="text" className="form-control form-control-lg" placeholder="請輸入角色說明" />
                            </div>
                        </div>
                    </div>
                    <div className="addRole-footer">
                        <button className="btn btn-white" onClick={props.clickCloseBtn}>關閉</button>
                        <button type="submit" className="btn btn-purple" id="add-role-submit">
                            <i className="fas fa-cubes"></i> 新增角色
                        </button>
                    </div>
                </form>
            </div>
        </StyledAddRole>
    )
}


const StyledAddRole = styled.div`
    background: white;
    // padding: 10px;
    width:500px;
    .addRole-header {
        padding:15px;
        display:flex;
        justify-content:space-between;
        border-bottom: 1px solid #ced4da;
    }
    .addRole-body {
        padding-top:15px;
    }
    .addRole-footer {
        border-top: 1px solid #ced4da;
        padding:15px;
        display:flex;
        justify-content:end;
        .btn.btn-purple {
            margin-left:10px;
        }
    }
`