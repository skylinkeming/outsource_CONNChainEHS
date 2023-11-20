
import { ReactElement } from "react";
import styled from "styled-components";

export default function Dialog(props: { content: ReactElement; show: boolean; }) {
    return (
        <StyledDialog show={props.show}>
            <div className="dialogContent">
                {props.content}
            </div>
        </StyledDialog>
    )
}


const StyledDialog = styled.div<{ show: boolean; }>`
    background: rgba(0,0,0,0.5);
    position:fixed;
    z-index: 9999;
    left:0;
    top:0;
    width:100%;
    height:100%;
    opacity:${props => props.show ? "1" : "0"};
    pointer-events:${props => props.show ? "initial" : "none"};
    display:flex;
    justify-content:center;
    align-items:center;
    transition:0.3s;
    .dialogContent{
        overflow:hidden;
        background:white;
        // animation: slide-up 1s ease-out forwards;
        // transform: translateY(100%);
        border-radius: 8px;
        min-width:300px;
        box-shadow: 0 4px 20px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    }
    @keyframes slide-up {
        from {
            transform: translateY(100%);
        }

        to {
            transform: translateY(0);
        }
    }
`