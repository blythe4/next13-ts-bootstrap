"use client";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";
import { Nodata } from "../util/styled";

export default function CustomLoading() {
    return (
        <Nodata>
            <Spinner animation="border" variant="primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Nodata>
    );
}
