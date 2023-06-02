"use client";

import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function SearchWeeds(props: { onSearch: (data: { searchKey: string }) => void }) {
    const [searchKey, setSearchKey] = useState("");
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const weedsListData = {
            searchKey: searchKey,
        };
        props.onSearch(weedsListData);
    };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = event;
        setSearchKey(value);
    };
    return (
        <Form noValidate onSubmit={submitHandler}>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="1" htmlFor="sText">
                    검색어
                </Form.Label>
                <Col sm="11">
                    <Form.Control
                        type="text"
                        id="sText"
                        placeholder="검색어를 입력하세요."
                        value={searchKey}
                        onChange={onChange}
                    />
                </Col>
            </Form.Group>
        </Form>
    );
}
