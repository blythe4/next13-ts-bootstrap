import { Pagination } from "react-bootstrap";

export default function CustomPagination(props: { data: PageInfo }) {
    const {
        data: { totalCount, numOfRows, pageNo },
    } = props;
    console.log(props);
    const totalPageNum = parseInt(totalCount) / parseInt(numOfRows);
    let items = [];
    for (let number = parseInt(pageNo); number <= totalPageNum; number++) {
        if (number < 10)
            items.push(
                <Pagination.Item key={number} active={number === parseInt(pageNo)}>
                    {number}
                </Pagination.Item>
            );
        else {
            items.push(<Pagination.Ellipsis />);
            break;
        }
    }
    return <Pagination className="p-3">{items}</Pagination>;
}
