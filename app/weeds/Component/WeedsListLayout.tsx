"use client";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import WeedsListItem from "./WeedsListItem";
import WeedsDetailModal from "./WeedsDetailModal";
import SearchWeeds from "./SearchWeeds";

export default function WeedsListLayout() {
    const [items, setItems] = useState<Weeds[]>([]);
    const [info, setInfo] = useState<PageInfo>();
    const [show, setShow] = useState(false);
    const [dataNo, setDataNo] = useState<string>("");
    const [params, setParams] = useState<string>("numOfRows=18");
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
    const onPaging = (event: React.ChangeEvent<unknown>, pageNo: number) => {
        query += `&pageNo=${pageNo}`;
        setParams(query);
    };

    const onSearch = (data: { searchKey: string }) => {
        query += `&sText=${data.searchKey}`;
        setParams(query);
    };

    useEffect(() => {
        const weedsList = async (query: string) => {
            const response = await fetch(`/api/weeds/list?${query}`, {
                cache: "force-cache",
                next: { revalidate: 60 },
            });
            const data = await response.json();
            if (data.code !== "500") {
                data.data.item ? setItems(data.data.item) : setItems([]);
                setInfo({
                    numOfRows: data.data.numOfRows,
                    totalCount: data.data.totalCount,
                    pageNo: data.data.pageNo,
                });
            }
        };
        weedsList(params);
    }, [params]);

    return (
        <>
            <SearchWeeds onSearch={onSearch} />
            {items && items.length <= 0 ? (
                <p>데이터 없음.</p>
            ) : (
                <>
                    <Row xs={2} sm={2} md={3} lg={4} xxl={6} className="g-3">
                        {items.map((item, idx) => (
                            <WeedsListItem key={idx} item={item} dataNo={dataNo} onWeedsDetail={weedsDetailHandler} />
                        ))}
                    </Row>
                    {info && (
                        <div className="d-flex justify-content-center py-4">
                            <Pagination
                                count={Math.ceil(parseInt(info.totalCount) / parseInt(info.numOfRows))}
                                defaultPage={parseInt(info.pageNo)}
                                shape="rounded"
                                onChange={onPaging}
                            />
                        </div>
                    )}
                    {dataNo && <WeedsDetailModal show={show} onHide={handleClose} dataNo={dataNo} />}
                </>
            )}
        </>
    );
}
