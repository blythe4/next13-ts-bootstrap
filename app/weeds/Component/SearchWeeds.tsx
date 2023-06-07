"use client";

import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

interface SearchWeedsProps {
    onSearch: (data: { searchKey: string }) => void;
}

export default function SearchWeeds({ onSearch }: SearchWeedsProps) {
    const [searchKey, setSearchKey] = useState("");
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const weedsListData = {
            searchKey: searchKey,
        };
        onSearch(weedsListData);
    };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKey(event.target.value);
    };
    return (
        <Form noValidate onSubmit={submitHandler}>
            <Row className="align-items-center mb-3">
                <Form.Label column="lg" sm="auto" htmlFor="sText">
                    검색어
                </Form.Label>
                <Col>
                    <Form.Control
                        type="text"
                        id="sText"
                        placeholder="검색어를 입력하세요."
                        value={searchKey}
                        onChange={onChange}
                    />
                </Col>
            </Row>
        </Form>
    );
}
