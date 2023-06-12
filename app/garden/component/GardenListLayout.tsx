"use client";
import { useCallback, useEffect, useState, useTransition } from "react";
import { Row, Spinner } from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import GardenSearch from "./GardenSearch";
import GardenListItem from "./GardenListItem";
import styled from "styled-components";
import GardenModal from "./GardenModal";

type Params = {
    numOfRows: string;
    pageNo: string;
    sText: string;
    lightChkVal: string;
    grwhstleChkVal: string;
    lefcolrChkVal: string;
    lefmrkChkVal: string;
    flclrChkVal: string;
    fmldecolrChkVal: string;
    ignSeasonChkVal: string;
    winterLwetChkVal: string;
    priceType: string;
    priceTypeSel: string;
    waterCycleSel: string;
};

export default function GardenListLayout() {
    let [pending, startTransition] = useTransition();
    const [items, setItems] = useState<Gardens[] | null>(null);
    const [info, setInfo] = useState<PageInfo>();
    const [show, setShow] = useState(false);
    const [dataNo, setDataNo] = useState<string>("");
    const [dataName, setDataNanme] = useState<string>("");
    const [params, setParams] = useState<Params>({
        numOfRows: "18",
        pageNo: "1",
        sText: "",
        lightChkVal: "",
        grwhstleChkVal: "",
        lefcolrChkVal: "",
        lefmrkChkVal: "",
        flclrChkVal: "",
        fmldecolrChkVal: "",
        ignSeasonChkVal: "",
        winterLwetChkVal: "",
        priceType: "",
        priceTypeSel: "",
        waterCycleSel: "",
    });

    const handleClose = useCallback(() => {
        setShow(false);
        setDataNo("");
    }, []);

    const handleShow = useCallback(() => {
        setShow(true);
    }, []);

    const gardenDetailHandler = useCallback(
        (id: string, name: string) => {
            setDataNo(id);
            setDataNanme(name);
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

    const onSearch = useCallback((formData: SearchFormData) => {
        setParams((prevParams) => ({
            ...prevParams,
            pageNo: "1",
            sText: formData.sText,
            lightChkVal: formData.lightChkVal.toString(),
            grwhstleChkVal: formData.grwhstleChkVal.toString(),
            lefcolrChkVal: formData.lefcolrChkVal.toString(),
            lefmrkChkVal: formData.lefmrkChkVal.toString(),
            flclrChkVal: formData.flclrChkVal.toString(),
            fmldecolrChkVal: formData.fmldecolrChkVal.toString(),
            ignSeasonChkVal: formData.ignSeasonChkVal.toString(),
            winterLwetChkVal: formData.winterLwetChkVal.toString(),
            priceType: formData.priceType.toString(),
            priceTypeSel: formData.priceTypeSel,
            waterCycleSel: formData.waterCycleSel.toString(),
        }));
    }, []);

    useEffect(() => {
        const listItems = async (params: Params) => {
            startTransition(async () => {
                const queryParams = new URLSearchParams(params).toString();
                const response = await fetch(`/api/garden/list?${queryParams}`, {
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
            });
        };
        listItems(params);
    }, [params]);

    return (
        <>
            <GardenSearch onSearch={onSearch} />
            {pending && !items && (
                <Nodata>
                    <Spinner animation="border" variant="primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Nodata>
            )}
            {items &&
                (items.length <= 0 ? (
                    <Nodata className="fs-1 py-5">데이터 없음.</Nodata>
                ) : (
                    <>
                        <Row xs={2} sm={2} md={3} lg={4} xxl={6} className="g-3">
                            {items.map((item, idx) => (
                                <GardenListItem
                                    key={idx}
                                    item={item}
                                    dataNo={dataNo}
                                    onGardenDetail={gardenDetailHandler}
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
                        {dataNo && <GardenModal show={show} onHide={handleClose} dataNo={dataNo} dataName={dataName} />}
                    </>
                ))}
        </>
    );
}

const Nodata = styled.div`
    text-align: center;
`;
