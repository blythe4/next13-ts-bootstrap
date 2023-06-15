"use client";
import { Col, Card, Image } from "react-bootstrap";

type WeedsListItemProps = {
    item: Weeds;
    dataNo: string;
    onWeedsDetail: (id: string) => void;
};

export default function WeedsListItem({ item, dataNo, onWeedsDetail }: WeedsListItemProps) {
    return (
        <Col key={item.dataNo}>
            <Card
                className="h-100 link"
                bg={`${item.dataNo === dataNo && "danger"}`}
                text={`${item.dataNo === dataNo ? "white" : "dark"}`}
                onClick={() => onWeedsDetail(item.dataNo)}
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
                    <Card.Text>{item.weedsFmlNm}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}
