"use client";
import { useCallback, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import TherpyModal from "@/app/therpy/Component/TherpyModal";
import CommonSearch from "@/app/component/CommonSearch";
import TherpyListItem from "./TheypyListItem";
import { Nodata } from "@/app/util/styled";
import { ListSkeleton } from "@/app/component/Skeleton";

type Params = {
    numOfRows: string;
    pageNo: string;
    sText: string;
};

export default function TherpyListLayout() {
    const [items, setItems] = useState<Therpys[] | null>(null);
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
    }, []);

    const handleShow = useCallback(() => {
        setShow(true);
    }, []);

    const therpyDetailHandler = useCallback(
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
        const listItems = async (params: Params) => {
            const queryParams = new URLSearchParams(params).toString();
            const response = await fetch(`/api/therpy/list?${queryParams}`, {
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
            } else {
                setItems([]);
            }
        };
        listItems(params);
    }, [params]);

    return (
        <>
            <CommonSearch label="약초명" onSearch={onSearch} />
            {items ? (
                items.length <= 0 ? (
                    <Nodata>데이터 없음.</Nodata>
                ) : (
                    <>
                        <Row xs={2} sm={2} md={3} lg={4} xxl={6} className="g-3">
                            {items.map((item, idx) => (
                                <TherpyListItem
                                    key={idx}
                                    item={item}
                                    dataNo={dataNo}
                                    onTherpyDetail={therpyDetailHandler}
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
                        {dataNo && <TherpyModal show={show} onHide={handleClose} dataNo={dataNo} />}
                    </>
                )
            ) : (
                <Row xs={2} sm={2} md={3} lg={4} xxl={6} className="g-3">
                    {Array.from({ length: 18 }).map((v, i) => (
                        <ListSkeleton key={i} />
                    ))}
                </Row>
            )}
        </>
    );
}
