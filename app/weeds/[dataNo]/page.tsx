"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Carousel, Container, Row, Col, ListGroup } from "react-bootstrap";

export default function WeedsDetail(props: { params: { dataNo: string } }) {
    const {
        params: { dataNo },
    } = props;
    const [item, setItem] = useState<Weed>();
    useEffect(() => {
        const weedsDetailHandler = async () => {
            const response = await fetch(`/api/weeds/${dataNo}`);
            const data = await response.json();
            if (data.code !== "500" && data.data) {
                const fileNameArray = data.data.fileName.split(";");
                const imgArray = data.data.downUrl.split(";");
                setItem({
                    ...data.data,
                    downUrl: imgArray,
                    fileName: fileNameArray,
                });
            }
        };
        weedsDetailHandler();
    }, [dataNo]);
    return (
        <Container>
            <div className="d-flex justify-content-end">
                <Link href="/weeds" className="bg-primary py-2 px-3 rounded text-light">
                    목록
                </Link>
            </div>
            {item && (
                <Container>
                    <Row>
                        <Col>
                            <h1>{item.klangNm}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Carousel>
                                {item.downUrl &&
                                    item.downUrl.map((url, i) => (
                                        <Carousel.Item key={i}>
                                            <Image
                                                className="w-100 h-auto"
                                                width={250}
                                                height={250}
                                                src={url}
                                                alt={item.fileName[i]}
                                            />
                                        </Carousel.Item>
                                    ))}
                            </Carousel>
                        </Col>
                        <Col sm={8}>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li">
                                    과명:
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.wdFmlyNm,
                                        }}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item as="li">학명 : {item.scnm}</ListGroup.Item>
                                <ListGroup.Item as="li">
                                    학명-이명:
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.scnmTwnm,
                                        }}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    {item.klangNm} / {item.weedsEngNm} / {item.jpscNm}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    {item.inflwSpcsNm} / {item.orgplceNm}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">서식지: {item.hbttNm}</ListGroup.Item>
                                <ListGroup.Item as="li">
                                    생태:
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.eclgy,
                                        }}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    형태:{" "}
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.stle,
                                        }}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    문헌정보:{" "}
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.ltrtreSjDtl,
                                        }}
                                    />
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            )}
        </Container>
    );
}
