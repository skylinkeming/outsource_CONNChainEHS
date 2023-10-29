import styled from "styled-components"

export default function Footer() {
    return (
        <StyledFooter>
            <div className="row justify-content-center">
                <div className="col-xl-4 fs-5 text-center">
                    <div>TEL：03-5718846</div>
                    <div>mail：service@cloudthink.com.tw</div>
                    <div>Copyright © 2023 雲集科技行銷有限公司 All Right Reserved</div>
                </div>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    padding: 0.9375rem 30px;
    margin: 0;
    border-top: 1px solid var(--bs-component-border-color);
    font-weight: 600;
    color: #6c757d;
    width: calc(100% - 220px);
    position: fixed;
    left: 220px;
    background: #dee2e6;
    z-index: 22;
    bottom: 0;
    @media (max-width:767px){
        position:static;
        width:100vw;
        margin-left: -20px;
    }
`