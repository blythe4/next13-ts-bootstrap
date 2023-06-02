"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchWeeds from "./SearchWeeds";
import { Row, Col, Card, Stack } from "react-bootstrap";
import CustomPagination from "../component/CustomPagination";

export default function WeedsList(props: any) {
    const [items, setItems] = useState<Weeds[]>([]);
    const [info, setInfo] = useState<PageInfo>();
    let query = "numOfRows=20";
    const weedsList = async (query: string) => {
        const response = await fetch(`/api/weeds/list?${query}`, {
            cache: "force-cache",
            next: { revalidate: 60 },
        });
        const data = await response.json();
        if (data.code !== "500") {
            setItems(data.data.item);
            setInfo({
                numOfRows: data.data.numOfRows,
                totalCount: data.data.totalCount,
                pageNo: data.data.pageNo,
            });
        }
    };

    const onSearch = (data: { searchKey: string }) => {
        query += `&sText=${data.searchKey}`;
        weedsList(query);
    };
    useEffect(() => {
        weedsList(query);
    }, [query]);
    return (
        <div>
            <h1>Weeds</h1>
            <SearchWeeds onSearch={onSearch} />
            {items && (
                <>
                    <Row xs={1} md={3} lg={5} xl={7} xxl={9} className="g-3">
                        {items.map((item, idx) => (
                            <Col key={idx}>
                                <Card>
                                    <Link href={`/weeds/${item.dataNo}`}>
                                        <Image
                                            className="w-100"
                                            width={250}
                                            height={200}
                                            src={item.imgUrl}
                                            alt={item.klangNm}
                                        />
                                        <Card.Body>
                                            <Card.Title>{item.klangNm}</Card.Title>
                                            <Card.Text>
                                                <Stack>
                                                    <strong>{item.weedsFmlNm}</strong>
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.scnm,
                                                        }}
                                                    />
                                                </Stack>
                                            </Card.Text>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {info && (
                        <div className="d-flex justify-content-center">
                            <CustomPagination data={info} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
