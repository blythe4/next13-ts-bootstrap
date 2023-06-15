"use client";

import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FormGroupCheckbox from "./GardenFormGroup";

interface GardenSearchProps {
    onSearch: (formData: SearchFormData) => void;
}

interface CheckboxOption {
    label: string;
    value: string;
}

const initialFormData: SearchFormData = {
    sText: "",
    lightChkVal: [],
    grwhstleChkVal: [],
    lefcolrChkVal: [],
    lefmrkChkVal: [],
    flclrChkVal: [],
    fmldecolrChkVal: [],
    ignSeasonChkVal: [],
    winterLwetChkVal: [],
    priceType: [],
    priceTypeSel: "",
    waterCycleSel: [],
};

//광도요구
const lightChkValOptions: CheckboxOption[] = [
    { label: "낮은 광도(300~800 Lux)", value: "055001" },
    { label: "중간 광도(800~1,500 Lux)", value: "055002" },
    { label: "높은 광도(1,500~10,000 Lux)", value: "055003" },
];
// 생육형태
const grwhstleChkValOptions: CheckboxOption[] = [
    { label: "직립형", value: "054001" },
    { label: "관목형", value: "054002" },
    { label: "덩굴성", value: "054003" },
    { label: "풀모양", value: "054004" },
    { label: "로제트형", value: "054005" },
    { label: "다육형", value: "054006" },
];
// 잎색
const lefcolrChkValOptions: CheckboxOption[] = [
    { label: "녹색,연두색", value: "069001" },
    { label: "금색,노란색", value: "069002" },
    { label: "흰색,크림색", value: "069003" },
    { label: "은색,회색", value: "069004" },
    { label: "빨강,분롱,자주색", value: "069005" },
    { label: "여러색 혼합", value: "069006" },
    { label: "기타", value: "069007" },
];
// 잎무늬
const lefmrkChkValOptions: CheckboxOption[] = [
    { label: "줄무늬", value: "070001" },
    { label: "점무늬", value: "070002" },
    { label: "입 가장자리 무늬", value: "070003" },
    { label: "기타(무늬없음 등)", value: "070004" },
];
// 꽃색
const flclrChkValOptions: CheckboxOption[] = [
    { label: "파랑색", value: "071001" },
    { label: "보라색", value: "071002" },
    { label: "분홍색", value: "071003" },
    { label: "빨강색", value: "071004" },
    { label: "오렌지색", value: "071005" },
    { label: "노랑색", value: "071006" },
    { label: "흰색", value: "071007" },
    { label: "혼합색", value: "071008" },
    { label: "기타", value: "071009" },
];
// 열매색
const fmldecolrChkValOptions: CheckboxOption[] = [
    { label: "파랑색", value: "081001" },
    { label: "보라색", value: "081002" },
    { label: "검정색", value: "081003" },
    { label: "빨강색", value: "081004" },
    { label: "오렌지색", value: "081005" },
    { label: "노랑색", value: "081006" },
    { label: "흰색", value: "081007" },
    { label: "혼합색", value: "081008" },
    { label: "기타", value: "081009" },
];
// 꽃피는 계절
const ignSeasonChkValOptions: CheckboxOption[] = [
    { label: "봄", value: "073001" },
    { label: "여름", value: "073002" },
    { label: "가을", value: "073003" },
    { label: "겨울", value: "073004" },
];
// 겨울 최저온도
const winterLwetChkValOptions: CheckboxOption[] = [
    { label: "0℃ 이하", value: "057001" },
    { label: "5℃", value: "057002" },
    { label: "7℃", value: "057003" },
    { label: "10℃", value: "057004" },
    { label: "13℃ 이상", value: "057005" },
];
// 가격대
const priceTypeOptions: CheckboxOption[] = [
    { label: "대형", value: "big" },
    { label: "중형", value: "medium" },
    { label: "소형", value: "small" },
];

export default function GardenSearch({ onSearch }: GardenSearchProps) {
    const [formData, setFormData] = useState<SearchFormData>(initialFormData);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(formData);
    };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => {
            if (type === "checkbox") {
                const prevValue = prevFormData[name] as string[];
                if (checked) {
                    return {
                        ...prevFormData,
                        [name]: [...prevValue, value],
                    };
                } else {
                    return {
                        ...prevFormData,
                        [name]: prevValue.filter((val) => val !== value),
                    };
                }
            } else {
                return {
                    ...prevFormData,
                    [name]: value,
                };
            }
        });
    };
    return (
        <Form noValidate onSubmit={submitHandler} className="mb-3">
            <Row className="align-items-center">
                <Col sm="auto">
                    <Form.Label column="lg">식물명</Form.Label>
                </Col>
                <Col>
                    <Form.Control
                        type="text"
                        name="sText"
                        placeholder="식물명을 입력하세요."
                        value={formData.sText}
                        onChange={onChange}
                    />
                </Col>
                <Col sm="auto">
                    <Button variant="primary" type="submit">
                        조회
                    </Button>
                </Col>
            </Row>
            <FormGroupCheckbox
                type="checkbox"
                label="광도요구"
                name="lightChkVal"
                options={lightChkValOptions}
                onChange={onChange}
            />
            <FormGroupCheckbox
                type="checkbox"
                label="생육형태"
                name="grwhstleChkVal"
                options={grwhstleChkValOptions}
                onChange={onChange}
            />

            <FormGroupCheckbox
                type="checkbox"
                label="잎색"
                name="lefcolrChkVal"
                options={lefcolrChkValOptions}
                onChange={onChange}
            />

            <FormGroupCheckbox
                type="checkbox"
                label="잎무늬"
                name="lefmrkChkVal"
                options={lefmrkChkValOptions}
                onChange={onChange}
            />

            <FormGroupCheckbox
                type="checkbox"
                label="꽃색"
                name="flclrChkVal"
                options={flclrChkValOptions}
                onChange={onChange}
            />

            <FormGroupCheckbox
                type="checkbox"
                label="열매색"
                name="fmldecolrChkVal"
                options={fmldecolrChkValOptions}
                onChange={onChange}
            />

            <FormGroupCheckbox
                type="checkbox"
                label="꽃피는 계절"
                name="ignSeasonChkVal"
                options={ignSeasonChkValOptions}
                onChange={onChange}
            />

            <FormGroupCheckbox
                type="checkbox"
                label="겨울 최저온도"
                name="winterLwetChkVal"
                options={winterLwetChkValOptions}
                onChange={onChange}
            />
            {/* <Row xs="auto" className="align-items-center">
                <Form.Label column="lg" sm="auto">
                    가격대
                </Form.Label>
                {priceTypeOptions.map((option) => (
                    <Col key={option.value}>
                        <Form.Check
                            type="radio"
                            name="priceType"
                            id={option.value}
                            label={option.label}
                            value={option.value}
                            onChange={onChange}
                        />
                    </Col>
                ))} 
                <Col>
                    <Form.Select name="priceTypeSel">
                        <option>선택하세요.</option>
                        <option value="068001">5천원 미만</option>
                        <option value="068002">5천원-1만원</option>
                        <option value="068003">1-3만원</option>
                        <option value="068004">3-5만원</option>
                        <option value="068005">5-10만원</option>
                        <option value="068006">10만원 이상</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row xs="auto" className="align-items-center">
                <Form.Label column="lg" sm="auto">
                    물주기
                </Form.Label>
                <Col>
                    <Form.Select name="waterCycleSel">
                        <option>선택하세요.</option>
                        <option value="053001">항상 흙을 축축하게 유지함(물에 잠김)</option>
                        <option value="053002">흙을 촉촉하게 유지함(물에 잠기지 않도록 주의)</option>
                        <option value="053003">토양 표면이 말랐을때 충분히 관수함</option>
                        <option value="053004">화분 흙 대부분 말랐을때 충분히 관수함</option>
                    </Form.Select>
                </Col>
            </Row> */}
        </Form>
    );
}
