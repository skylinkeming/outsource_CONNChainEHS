import { useState, useEffect } from "react";

export default function SortIcon({ dataList, dataField, setFunction }) {
    const [direction, setDirection] = useState("up");

    useEffect(() => {
        if (!direction) {
            return;
        }
        let sortList = [...dataList].sort(sortComparer);
        setFunction(sortList);
    }, [direction]);

    const sortComparer = (a, b) => {
        let result;
        if (new Date(a[dataField]).toString() === "Invalid Date") {
            //照unicode排序
            result = a[dataField].localeCompare(b[dataField]);
        } else {
            //按日期大小排序
            result =
                new Date(a[dataField]).getTime() - new Date(b[dataField]).getTime();
        }
        return result * (direction === "up" ? 1 : -1);
    };

    const iconClass = () => {
        if (!direction || direction === "up") {
            return "fa-sort-up";
        } else {
            return "fa-sort-down";
        }
    };

    return (
        <i
            className={`fas fa-lg fa-fw me-15px ${iconClass()}`}
            style={{ cursor: "pointer" }}
            onClick={() => {
                setDirection(direction === "up" ? "down" : "up");
            }}
        />
    );
}