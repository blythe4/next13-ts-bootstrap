"use client";
import { useCallback, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import CommonSearch from "@/app/component/CommonSearch";
import WeedsListItem from "./WeedsListItem";
import WeedsDetailModal from "./WeedsDetailModal";

type Params = {
    numOfRows: string;
    pageNo: string;
    sText: string;
};

export default function WeedsListLayout() {
    const [items, setItems] = useState<Weeds[] | null>(null);
    const [info, setInfo] = useState<PageInfo>();
    const [show, setShow] = useState(false);
    const [dataNo, setDataNo] = useState<string>("");
    const [params, setParams] = useState<Params>({
        numOfRows: "18",
        pageNo: "1",
        sText: "",
    });

    const handleClose = useCallback(() => {
        setShow(false);
        setDataNo("");
    }, []);

    const handleShow = useCallback(() => {
        setShow(true);
    }, []);

    const weedsDetailHandler = useCallback(
        (id: string) => {
            setDataNo(id);
            handleShow();
        },
        [handleShow]
    );

    const onPaging = useCallback((event: React.ChangeEvent<unknown>, pageNo: number) => {
        setParams((prevParams) => ({
            ...prevParams,
            pageNo: pageNo.toString(),
        }));
    }, []);

    const onSearch = useCallback((data: { searchKey: string }) => {
        setParams((prevParams) => ({
            ...prevParams,
            pageNo: "1",
            sText: data.searchKey,
        }));
    }, []);

    useEffect(() => {
        const weedsList = async (params: Params) => {
            const queryParams = new URLSearchParams(params).toString();
            const response = await fetch(`/api/weeds/list?${queryParams}`, {
                cache: "force-cache",
                next: { revalidate: 60 },
            });
            const data = await response.json();
            if (data.code !== "500") {
                const { item, numOfRows, totalCount, pageNo } = data.data;
                setItems(item ? item : []);
                setInfo({
                    numOfRows,
                    totalCount,
                    pageNo,
                });
            }
        };
        weedsList(params);
    }, [params]);

    return (
        <>
            <CommonSearch onSearch={onSearch} />
            {items &&
                (items.length <= 0 ? (
                    <p>데이터 없음.</p>
                ) : (
                    <>
                        <Row xs={2} sm={2} md={3} lg={4} xxl={6} className="g-3">
                            {items.map((item, idx) => (
                                <WeedsListItem
                                    key={idx}
                                    item={item}
                                    dataNo={dataNo}
                                    onWeedsDetail={weedsDetailHandler}
                                />
                            ))}
                        </Row>
                        {info && (
                            <div className="d-flex justify-content-center py-4">
                                <Pagination
                                    count={Math.ceil(parseInt(info.totalCount) / parseInt(info.numOfRows))}
                                    page={parseInt(info.pageNo)}
                                    shape="rounded"
                                    onChange={onPaging}
                                />
                            </div>
                        )}
                        {dataNo && <WeedsDetailModal show={show} onHide={handleClose} dataNo={dataNo} />}
                    </>
                ))}
        </>
    );
}
