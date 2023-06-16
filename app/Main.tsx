"use client";
import styled from "styled-components";

const Main = ({ float }: { float: string }) => {
    return (
        <Wrap float={float}>
            <Pot />
            <Cactus>
                <i>.</i>
                <i>.</i>
                <i>.</i>
                <i>.</i>
                <i>.</i>
                <i>.</i>
                <i>.</i>
            </Cactus>
        </Wrap>
    );
};
export default Main;

const Wrap = styled.div<{ float: string }>`
    float: ${(props) => props.float};
    shape-outside: ellipse(160px 200px at 45% 50%);
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 300px;
    height: 330px;
    padding-bottom: 30px;
`;

const Pot = styled.div`
    width: 200px;
    height: 0;
    border-radius: 5px 5px 0;
    border-top: 130px solid #a5762a;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
`;

const Cactus = styled.div`
    width: 130px;
    height: 140px;
    background-color: #0e900e;
    border-radius: 50px 50px 0 0;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 55px;
        height: 140px;
        border-top-right-radius: 55px;
        background-color: #0a780a;
    }
    i {
        position: absolute;
        color: white;
        &:nth-child(1) {
            top: 50%;
            left: 55%;
        }
        &:nth-child(2) {
            top: 30%;
            left: 10%;
        }
        &:nth-child(2) {
            top: 15%;
            left: 15%;
        }
        &:nth-child(3) {
            top: 10%;
            left: 70%;
        }
        &:nth-child(4) {
            top: 30%;
            left: 40%;
        }
        &:nth-child(5) {
            top: 73%;
            left: 19%;
        }
        &:nth-child(6) {
            top: 85%;
            left: 60%;
        }
        &:nth-child(7) {
            top: 60%;
            left: 80%;
        }
    }
`;
