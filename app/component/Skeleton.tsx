import { Skeleton } from "@mui/material";
import { Col, Card } from "react-bootstrap";

const ListSkeleton = () => {
    return (
        <Col>
            <Card>
                <Skeleton variant="rectangular" height={155} />
                <Card.Body>
                    <Card.Title>
                        <Skeleton variant="rectangular" height={40} />
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export { ListSkeleton };
