import React from "react";
import { Pagination } from "react-bootstrap";

export default function CustomPagination(props: { data: PageInfo; onPaging: (num: number) => void }) {
    const {
        data: { totalCount, numOfRows, pageNo },
        onPaging,
    } = props;
    const totalPageNum = parseInt(totalCount) / parseInt(numOfRows);
    let items = [];
    for (let number = 1; number <= totalPageNum; number++) {
        if (number < 10)
            items.push(
                <Pagination.Item key={number} active={number === parseInt(pageNo)} onClick={() => onPaging(number)}>
                    {number}
                </Pagination.Item>
            );
        else {
            items.push(<Pagination.Ellipsis key={number} />);
            break;
        }
    }
    return <Pagination className="p-3">{items}</Pagination>;
}
