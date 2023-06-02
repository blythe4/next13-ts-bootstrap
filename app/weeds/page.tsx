"use client";

import { useEffect, useState } from "react";
import SearchWeeds from "./SearchWeeds";
import { Container, Row, Col, Card, Stack, Image } from "react-bootstrap";
import CustomPagination from "../component/CustomPagination";
import WeedsDetailModal from "./WeedsDetailModal";
import NotFound from "./not-found";

export default function WeedsList(props: any) {
    const [items, setItems] = useState<Weeds[]>([]);
    const [info, setInfo] = useState<PageInfo>();
    const [show, setShow] = useState(false);
    const [dataNo, setDataNo] = useState<string>("");
    let query = "numOfRows=18";

    const handleClose = () => {
        setShow(false);
        setDataNo("");
    };
    const handleShow = () => setShow(true);
    const weedsDetailHandler = (id: string) => {
        setDataNo(id);
        handleShow();
    };
    const onPaging = (pageNo: number) => {
        query += `&pageNo=${pageNo}`;
        weedsList(query);
    };
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
        <Container>
            <h1>Weeds</h1>
            <SearchWeeds onSearch={onSearch} />
            {items && items.length <= 0 ? (
                // <NotFound />
                <></>
            ) : (
                <>
                    <Row xs={2} sm={2} md={3} lg={4} xxl={6} className="g-3">
                        {items.map((item, idx) => (
                            <Col key={item.dataNo}>
                                <Card
                                    className="h-100"
                                    bg={`${item.dataNo === dataNo && "danger"}`}
                                    text={`${item.dataNo === dataNo ? "white" : "dark"}`}
                                    onClick={() => weedsDetailHandler(item.dataNo)}
                                >
                                    <div>
                                        <Image
                                            className="w-100"
                                            width={250}
                                            height={155}
                                            src={item.imgUrl || `https://dummyimage.com/250x200/ccc/fff`}
                                            alt={item.klangNm}
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{item.klangNm}</Card.Title>
                                        <Stack>
                                            <strong>{item.weedsFmlNm}</strong>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: item.scnm,
                                                }}
                                            />
                                        </Stack>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {info && (
                        <div className="d-flex justify-content-center">
                            <CustomPagination data={info} onPaging={onPaging} />
                        </div>
                    )}
                    {dataNo && <WeedsDetailModal show={show} onHide={handleClose} dataNo={dataNo} />}
                </>
            )}
        </Container>
    );
}
