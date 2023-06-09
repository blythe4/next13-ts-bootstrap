"use client";

import { useEffect, useState } from "react";
import { Modal, Carousel, ListGroup, Image, Row, Col, Tabs, Tab } from "react-bootstrap";
import styled from "styled-components";

type GardenModalProps = {
    show: boolean;
    onHide: () => void;
    dataNo: string;
    dataName: string;
};

export default function GardenModal({ show, onHide, dataNo, dataName }: GardenModalProps) {
    const [item, setItem] = useState<Garden | null>(null);
    const [image, setImage] = useState<GardenFile[] | null>(null);
    const detailHandler = async (dataNo: string) => {
        const response = await fetch(`/api/garden/${dataNo}`, {
            cache: "force-cache",
            next: { revalidate: 60 },
        });
        const data = await response.json();
        if (data.code !== "500" && data.data) {
            setItem(data.data);
        }
    };
    const detailImageHandler = async (dataNo: string) => {
        const response = await fetch(`/api/garden/image/${dataNo}`, {
            cache: "force-cache",
            next: { revalidate: 60 },
        });
        const data = await response.json();
        if (data.code !== "500" && data.data) {
            setImage(data.data.item);
        }
    };

    useEffect(() => {
        detailHandler(dataNo);
        detailImageHandler(dataNo);
    }, [dataNo]);

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{dataName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {item && (
                    <>
                        <div className="d-flex gap-3">
                            <ImageBox className="flex-shrink-0">
                                <Carousel>
                                    {image &&
                                        image.map((img, index) => (
                                            <Carousel.Item key={index}>
                                                <Image
                                                    className="w-100"
                                                    width={200}
                                                    height={200}
                                                    src={
                                                        img.rtnThumbFileUrl || `https://dummyimage.com/800x400/ccc/fff`
                                                    }
                                                    alt={img.rtnImageDc}
                                                />
                                            </Carousel.Item>
                                        ))}
                                </Carousel>
                            </ImageBox>
                            <div className="w-100">
                                <ul>
                                    {item.plntbneNm && <li>학명: {item.plntbneNm}</li>}
                                    {item.plntzrNm && <li>영명: {item.plntzrNm}</li>}
                                    {item.distbNm && <li>유통명: {item.distbNm}</li>}
                                    {item.fmlCodeNm && <li>과명: {item.fmlCodeNm}</li>}
                                    {item.orgplceInfo && <li>원산지: {item.orgplceInfo}</li>}
                                    {item.adviseInfo && <li>TIP:{item.adviseInfo}</li>}
                                </ul>
                            </div>
                        </div>
                        <Tabs defaultActiveKey="info01" className="mt-3">
                            <Tab eventKey="info01" title="상세정보">
                                <ListGroup as="ul" className="py-3">
                                    <ListGroup.Item as="li">분류 : {item.clCodeNm}</ListGroup.Item>
                                    <ListGroup.Item as="li">생육형태 : {item.grwhstleCodeNm}</ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        성장 정보(높이 * 넓이) : {item.growthHgInfo} * {item.growthAraInfo}
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        실내정원구성 : {item.indoorpsncpacompositionCodeNm}
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">생태 : {item.eclgyCodeNm}</ListGroup.Item>
                                    <ListGroup.Item as="li">잎형태 : {item.lefStleInfo}</ListGroup.Item>
                                    <ListGroup.Item as="li">잎무늬 : {item.lefmrkCodeNm}</ListGroup.Item>
                                    <ListGroup.Item as="li">잎색 : {item.lefcolrCodeNm}</ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <Row>
                                            <Col>꽃피는 계절 : {item.ignSeasonCodeNm}</Col>
                                            <Col>꽃색 : {item.flclrCodeNm}</Col>
                                            <Col>열매맺는 계절 : {item.fmldeSeasonCodeNm}</Col>
                                            <Col>열매색 : {item.fmldecolrCodeNm}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">향기 : {item.smellCodeNm}</ListGroup.Item>
                                    <ListGroup.Item as="li">번식방법 : {item.prpgtmthCodeNm}</ListGroup.Item>
                                    <ListGroup.Item as="li">번식시기 : {item.prpgtEraInfo}</ListGroup.Item>
                                </ListGroup>
                            </Tab>
                            <Tab eventKey="info02" title="관리정보">
                                <ListGroup as="ul" className="py-3">
                                    <ListGroup.Item as="li">관리수준 : {item.managelevelCodeNm}</ListGroup.Item>
                                    <ListGroup.Item as="li">관리요구도 : {item.managedemanddoCodeNm}</ListGroup.Item>
                                    <ListGroup.Item as="li">광요구도 : {item.lighttdemanddoCodeNm}</ListGroup.Item>
                                    <ListGroup.Item as="li">배치장소 : {item.postngplaceCodeNm}</ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <Row>
                                            <Col>생장 속도 : {item.grwtveCodeNm}</Col>
                                            <Col>생육 온도 : {item.grwhTpCodeNm}</Col>
                                            <Col>겨울최저온도 : {item.winterLwetTpCodeNm}</Col>
                                            <Col>습도 : {item.hdCodeNm}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">비료 : {item.frtlzrInfo}</ListGroup.Item>
                                    <ListGroup.Item as="li">토양 : {item.soilInfo}</ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        물주기
                                        <p>봄 : {item.watercycleSprngCodeNm}</p>
                                        <p>여름 : {item.watercycleSummerCodeNm}</p>
                                        <p>가을 : {item.watercycleAutumnCodeNm}</p>
                                        <p>겨울 : {item.watercycleWinterCodeNm}</p>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">병해충 : {item.dlthtsCodeNm}</ListGroup.Item>
                                </ListGroup>
                            </Tab>

                            <Tab eventKey="info03" title="기능성정보">
                                <ListGroup as="ul" className="py-3">
                                    <ListGroup.Item as="li">{item.fncltyInfo}</ListGroup.Item>
                                </ListGroup>
                            </Tab>
                        </Tabs>
                    </>
                )}
            </Modal.Body>
        </Modal>
    );
}

const ImageBox = styled.div`
    width: 200px;
`;
