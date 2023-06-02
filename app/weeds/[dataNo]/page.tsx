"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NotFound from "../not-found";
import { Carousel, Container, Row, Col } from "react-bootstrap";

export default function WeedsDetail(props: { params: { dataNo: string } }) {
    const {
        params: { dataNo },
    } = props;
    const [item, setItem] = useState<Weed>();
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
    useEffect(() => {
        weedsDetailHandler();
    }, [dataNo]);
    return (
        <div>
            <section>
                {!item ? (
                    <NotFound />
                ) : (
                    <>
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
                                    <div>
                                        과명:
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: item.weedsFmlNm,
                                            }}
                                        />
                                    </div>
                                    <p>학명 : {item.scnm}</p>
                                    <div>
                                        학명-이명:
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: item.scnmTwnm,
                                            }}
                                        />
                                    </div>
                                    <p>
                                        {item.klangNm} / {item.weedsEngNm} / {item.jpscNm}
                                    </p>
                                    <p>
                                        {item.inflwSpcsNm} / {item.orgplceNm}
                                    </p>
                                    <p>서식지: {item.hbttNm}</p>
                                    <div>
                                        생태:
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: item.eclgy,
                                            }}
                                        />
                                    </div>
                                    <div>
                                        형태:{" "}
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: item.stle,
                                            }}
                                        />
                                    </div>
                                    <div>
                                        문헌정보:{" "}
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: item.ltrtreSjDtl,
                                            }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </>
                )}
            </section>
            <div className="d-flex justify-content-end">
                <Link href="/weeds" className="bg-primary py-2 px-3 rounded text-light">
                    목록
                </Link>
            </div>
        </div>
    );
}
