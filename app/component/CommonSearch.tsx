"use client";

import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

interface CommonSearchProps {
    label: string;
    onSearch: (data: { searchKey: string }) => void;
}

export default function CommonSearch({ label, onSearch }: CommonSearchProps) {
    const [searchKey, setSearchKey] = useState("");
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const searchData = { searchKey };
        onSearch(searchData);
    };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKey(event.target.value);
    };
    return (
        <Form noValidate onSubmit={submitHandler}>
            <Row className="align-items-center mb-3">
                <Form.Label column="lg" xs="auto" htmlFor="sText">
                    {label}
                </Form.Label>
                <Col>
                    <Form.Control
                        type="text"
                        id="sText"
                        placeholder={`${label}을 입력하세요.`}
                        value={searchKey}
                        onChange={onChange}
                    />
                </Col>
            </Row>
        </Form>
    );
}
