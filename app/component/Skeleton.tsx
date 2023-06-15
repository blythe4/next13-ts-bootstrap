import { Skeleton } from "@mui/material";
import { Col, Card } from "react-bootstrap";
import styled from "styled-components";

const ListSkeleton = () => {
    return (
        <Col>
            <Card>
                <Skeleton variant="rectangular" height={200} />
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
