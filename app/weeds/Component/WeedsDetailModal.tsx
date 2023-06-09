"use client";

import { useEffect, useState } from "react";
import { Modal, Carousel, ListGroup, Image } from "react-bootstrap";

type WeedsDetailModalProps = {
    show: boolean;
    onHide: () => void;
    dataNo: string;
};

export default function WeedsDetailModal({ show, onHide, dataNo }: WeedsDetailModalProps) {
    const [item, setItem] = useState<Weed | null>(null);
    const weedsDetailHandler = async (dataNo: string) => {
        const response = await fetch(`/api/weeds/${dataNo}`, {
            cache: "force-cache",
            next: { revalidate: 60 },
        });
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
        weedsDetailHandler(dataNo);
    }, [dataNo]);
    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{item && item.klangNm}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {item && (
                    <>
                        <Carousel>
                            {item.downUrl &&
                                item.downUrl.map((url, i) => (
                                    <Carousel.Item key={i}>
                                        <Image
                                            className="w-100"
                                            width={500}
                                            height={500}
                                            src={url || `https://dummyimage.com/800x400/ccc/fff`}
                                            alt={item.fileName[i]}
                                        />
                                    </Carousel.Item>
                                ))}
                        </Carousel>
                        <ListGroup as="ul" className="py-3">
                            <ListGroup.Item as="li">
                                {item.wdFmlyNm} / {item.klangNm} ({item.weedsEngNm} , {item.jpscNm})
                                <span>
                                    {item.inflwSpcsNm}({item.orgplceNm})
                                </span>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <p>서식지: {item.hbttNm}</p>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: item.eclgy,
                                    }}
                                />
                                <p
                                    className="mb-0"
                                    dangerouslySetInnerHTML={{
                                        __html: item.stle,
                                    }}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: item.scnm,
                                    }}
                                />
                                {item.scnmTwnm && (
                                    <p
                                        className="mb-0"
                                        dangerouslySetInnerHTML={{
                                            __html: item.scnmTwnm,
                                        }}
                                    />
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                문헌정보:{" "}
                                <p
                                    className="mb-0"
                                    dangerouslySetInnerHTML={{
                                        __html: item.ltrtreSjDtl,
                                    }}
                                />
                            </ListGroup.Item>
                        </ListGroup>
                    </>
                )}
            </Modal.Body>
        </Modal>
    );
}
