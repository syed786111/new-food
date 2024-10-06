import React, { useState, useEffect } from "react";
import styles from '../UI/Pagination.module.css'
export const Pagination = ({
  showPerPage,
  onPageChange,
  numberOfButtons1,
  total,
  limit,
}) => {
  const [counter, setCouter] = useState(0);

  console.log("total is", total);
  console.log("limit is", limit);
  console.log("show per page is ", showPerPage);
  const [numberOfButtons, setNumberOfButtons] = useState(0);
  console.log("unumber of buttons", numberOfButtons);
  useEffect(() => {
    console.log(counter);
    const value = showPerPage * counter;
    console.log(value);
    console.log("start value", value - showPerPage);
    console.log("end value", value);
    onPageChange(value - showPerPage, value);
  }, [counter, limit]);
  useEffect(() => {
    console.log("limit is", limit);
    // onPageChange(0,limit)
    setCouter(1);
  }, [limit]);

  const onButtonClick = (type) => {
    console.log(total);
    console.log(counter);
    if (type === "prev") {
      if (counter === 1) {
        setCouter(1);
      } else {
        setCouter(counter - 1);
      }
    } else if (type === "next") {
      // if(numberOfButtons === counter){

      if (Math.ceil(total / showPerPage) === counter) {
        console.log(counter);
        console.log(numberOfButtons);
        setCouter(counter);
        // setCouter(counter + 1)
      } else {
        // setCouter(counter)
        setCouter(counter + 1);
      }
    }
    // setCouter(counter+1)
  };
  return (
    <div>
      <nav aria-label="..." style={{marginTop:"5px !important"}}>
        <ul className="d-flex flex-row justify-content-between align-content-center flex-wrap">
          <li className={`page-item`}>
            <a className={`page-link ${styles.pagelink}`} onClick={() => onButtonClick("prev")}>
              prev
            </a>
          </li>
          <li class="page-item">
            <a className={`page-link ${styles.pagelink}`} onClick={() => onButtonClick("next")}>
              next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
