"use client";
import { useCallback, useEffect, useState, useTransition } from "react";
import { Row } from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import GardenSearch from "./GardenSearch";
import GardenListItem from "./GardenListItem";
import GardenModal from "./GardenModal";
import CustomLoading from "@/app/component/CustomLoading";
import { Nodata } from "@/app/util/styled";

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
                } else {
                    setItems([]);
                }
            });
        };
        listItems(params);
    }, [params]);

    return (
        <>
            <GardenSearch onSearch={onSearch} />
            {pending && !items && <CustomLoading />}
            {items &&
                (items.length <= 0 ? (
                    <Nodata>데이터 없음.</Nodata>
                ) : (
                    <>
                        <Row xs={2} md={3} lg={5} xl={6} className="g-3">
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
