"use client";
import { Col, Card, Image } from "react-bootstrap";

type GardenListItemProps = {
    item: Gardens;
    dataNo: string;
    onGardenDetail: (id: string, name: string) => void;
};

export default function GardenListItem({ item, dataNo, onGardenDetail }: GardenListItemProps) {
    const thumbFile = item.rtnFileUrl.split("|")[0];
    const thumbFileNm = item.rtnImageDc.split("|")[0];
    return (
        <Col key={item.cntntsNo}>
            <Card
                className="h-100 link"
                bg={`${item.cntntsNo === dataNo && "danger"}`}
                text={`${item.cntntsNo === dataNo ? "white" : "dark"}`}
                onClick={() => onGardenDetail(item.cntntsNo, item.cntntsSj)}
            >
                <div>
                    <Image
                        className="w-100"
                        width={250}
                        height={155}
                        src={thumbFile || `https://dummyimage.com/250x200/ccc/fff`}
                        alt={thumbFileNm}
                    />
                </div>
                <Card.Body>
                    <Card.Title>{item.cntntsSj}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}
