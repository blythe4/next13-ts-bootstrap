"use client";
import { Col, Card, Stack, Image } from "react-bootstrap";

export default function WeedsListItem(props: { item: Weeds; dataNo: string; onWeedsDetail: (id: string) => void }) {
    const { item, dataNo, onWeedsDetail } = props;
    return (
        <Col key={item.dataNo}>
            <Card
                className="h-100"
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
                    <Stack>
                        <strong>{item.weedsFmlNm}</strong>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: item.scnm,
                            }}
                        />
                    </Stack>
                </Card.Body>
            </Card>
        </Col>
    );
}
