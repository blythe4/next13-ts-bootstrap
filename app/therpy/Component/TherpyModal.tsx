"use client";

import { useEffect, useState } from "react";
import { Modal, Carousel, ListGroup, Image } from "react-bootstrap";

type TherpyModalProps = {
    show: boolean;
    onHide: () => void;
    dataNo: string;
};

export default function TherpyModal({ show, onHide, dataNo }: TherpyModalProps) {
    const [item, setItem] = useState<Therpy | null>(null);
    const detailHandler = async (dataNo: string) => {
        const response = await fetch(`/api/therpy/${dataNo}`, {
            cache: "force-cache",
            next: { revalidate: 60 },
        });
        const data = await response.json();
        if (data.code !== "500" && data.data) {
            setItem(data.data);
        }
    };

    useEffect(() => {
        detailHandler(dataNo);
    }, [dataNo]);

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{item && item.cntntsSj}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {item && (
                    <>
                        <Carousel>
                            {[item.imgUrl1, item.imgUrl2, item.imgUrl3, item.imgUrl4, item.imgUrl5, item.imgUrl6]
                                .filter(Boolean)
                                .map((imgUrl, index) => (
                                    <Carousel.Item key={index}>
                                        <Image
                                            className="w-100"
                                            width={400}
                                            height={400}
                                            src={imgUrl || `https://dummyimage.com/800x400/ccc/fff`}
                                            alt={item.cntntsSj}
                                        />
                                    </Carousel.Item>
                                ))}
                        </Carousel>
                        <ListGroup as="ul" className="py-3">
                            <ListGroup.Item as="li">
                                {item.cntntsSj} / {item.bneNm} / {item.hbdcNm}
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                이용부위: <p>{item.useeRegn}</p>
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
                                민간요법:{" "}
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: item.prvateTherpy,
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
