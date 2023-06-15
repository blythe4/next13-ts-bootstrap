"use client";
import { Col, Card, Image } from "react-bootstrap";

type TherpyListItemProps = {
    item: Therpys;
    dataNo: string;
    onTherpyDetail: (id: string) => void;
};

export default function TherpyListItem({ item, dataNo, onTherpyDetail }: TherpyListItemProps) {
    return (
        <Col key={item.cntntsNo}>
            <Card
                className="h-100 link"
                bg={`${item.cntntsNo === dataNo && "danger"}`}
                text={`${item.cntntsNo === dataNo ? "white" : "dark"}`}
                onClick={() => onTherpyDetail(item.cntntsNo)}
            >
                <div>
                    <Image
                        className="w-100"
                        width={250}
                        height={155}
                        src={item.imgUrl || `https://dummyimage.com/250x200/ccc/fff`}
                        alt={item.cntntsSj}
                    />
                </div>
                <Card.Body>
                    <Card.Title>{item.cntntsSj}</Card.Title>
                    <Card.Text>{item.bneNm}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}
