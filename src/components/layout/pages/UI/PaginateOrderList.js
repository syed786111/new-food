import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
//import { Container } from './Container'
import axios from "axios";
// import { Items } from './Items/Items';
//import Carts from './Carts/Carts';
//import styles from './Items/Items.module.css'
import styles from "./Paginate.module.css";

import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
function Items1({ items, TotalSal }) {
  const navigate = useNavigate();
  const [data, setData] = useState([...items]);
  const [skeleton, setSkeleton] = useState(true);

  const [currentItems, setCurrentItems] = useState([...items]);

  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [counter, setCouter] = useState(0);
  console.log("currentPage", currentPage);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const [forcePage, setForcePage] = useState(0);
  //const [data,setData]= useState([...items])
  console.log(data);
  const [list, setList] = useState([]);
  const [limit, setLimit] = useState(5);
  const [itemsPerPage, setItemsPerPage] = useState(limit);
  //let itemsPerPage= limit;

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, 3000);
  }, []);

  const handleLimit = (e) => {
    e.preventDefault();
    setLimit(e.target.value);
    setItemOffset(0);

    setItemsPerPage(e.target.value);
    setForcePage(0);
    setCurrentPage(0);
  };

  const handlePageClick = (event) => {
    let selected = event && event.selected;
    console.log(event.selected);
    console.log(selected);
    //    setCouter(selected)
    //  setCurrentPage(parseInt(event&& event.selected))

    setForcePage(selected);

    const newOffset = parseInt(selected) * limit;

    console.log("newOffset", newOffset);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);

    navigate({
      pathname: "/orderlist1",
      search:
        "?" +
        new URLSearchParams({ limit: limit }).toString() +
        "&&" +
        new URLSearchParams({ offset: newOffset }).toString(),
    });
  };
  useEffect(() => {
    changeUrl();
  }, [limit]);
  // useEffect(()=>{
  //   navigate("list/?limit=10&&offset=0");

  // },[])
  const changeUrl = () => {
    navigate({
      pathname: "/orderlist1",
      search:
        "?" +
        new URLSearchParams({ limit: limit }).toString() +
        "&&" +
        new URLSearchParams({ offset: itemOffset }).toString(),
    });
  };

  useEffect(
    (e) => {
      // Fetch items from another resources.
      const endOffset = parseInt(itemOffset) + parseInt(itemsPerPage);
      console.log(endOffset);
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      const current = items;
      console.log(current);
      console.log(items.slice(itemOffset, endOffset));

      setCurrentItems(items.slice(itemOffset, endOffset));
      //setCurrentItems(items.slice(5, 10));
      setPageCount(Math.ceil(items.length / limit));
    },
    [itemOffset, limit, currentItems, itemsPerPage]
  );

  useEffect(() => {
    setItemOffset(0);
    setForcePage(0);
  }, [items]);

  return (
    <>
      {skeleton ? (
        <>
          <div>
            <div className={styles.listBox}>
              <div className={styles.listWrapper}>
                <div className={styles.OrderList}>
                  <table
                    border="5px"
                    align=""
                    width="700"
                    // style={{ width: "100%" }}
                    className={styles.customtable}
                  >
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <tr style={{ backgroundColor: "gray", fontSize: "20px" }}>
                      <th>Id</th>
                    <th> Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>S.T</th>
                    <th>O/D</th>
                    <th>G/T</th>
                     
                        
                      </tr>
                      <tr>
                      <td>
                          <Skeleton count={limit} />
                        </td>
                        <td>
                          <Skeleton count={limit} />
                        </td>
                        <td>
                          <Skeleton count={limit} />
                        </td>
                        <td>
                          <Skeleton count={limit} />
                        </td>
                        <td>
                          <Skeleton count={limit} />
                        </td>
                        <td>
                          <Skeleton count={limit} />
                        </td>
                        <td>
                          <Skeleton count={limit} />
                        </td>
                      </tr>
                    </SkeletonTheme>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.listBox}>
            <div className={styles.listWrapper}>
              <div className={styles.OrderList}>
                <table
                  border="5px"
                  align="center"
                  
                  className={styles.customtable}
                >
                  <tr style={{ backgroundColor: "gray", fontSize: "20px" }}>
                  <th>Id</th>
                    <th> Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>S.T</th>
                    <th>O/D</th>
                    <th>G/T</th>
                  
                   
                  </tr>

                  {currentItems?.map((order) => {
                    return (
                      <>
                        <tr key={order.orderId}>
                          <td>{order.orderId}</td>
                          <td>{order.name}</td>
                          <td>{order.price}</td>
                          <td>{order.quantity}</td>
                          <td>{order.subTotal}</td>
                          <td>{order.orderDate}</td>
                          <td>{order.GrossTotal}</td>
                        </tr>
                      </>
                    );
                  })}
                  <tr>
                    <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                      Total sal: <span>{TotalSal}</span>
                    </div>
                  </tr>
                </table>

                <ul className="d-flex justify-content-center flex-wrap w-100  "  >
                  <li>
                    <select
                      style={{ height: "50px" }}
                      //  value={limit}
                      name="limit"
                      //  placeholder={placeholder}
                      onChange={(e) => handleLimit(e)}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                    </select>
                  </li>
                  <li className="d-flex  flex-wrap ps-0 ps-md-5 ">
                    <ReactPaginate
                   // className="d-flex flex-wrap"
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      breakClassName="page-item"
                      breakLabel="....."
                      nextLabel=">"
                      itemsPerPage={itemsPerPage}
                      onPageChange={(event) => handlePageClick(event)}
                      pageRangeDisplayed={null}
                      forcePage={forcePage}
                      pageCount={pageCount}
                      previousLabel="<"
                      renderOnZeroPageCount={null}
                      breakLinkClassName="page-link"
                      containerClassName="pagination"
                      activeClassName="active"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
export const PaginateOrderList = ({ initialPage, items, from, to }) => {
  console.log(items);
  console.log(initialPage);
  const a = items.map((el) => el.GrossTotal);
  console.log("gross totals are ", a);
  const TotalSal = a.reduce((ack, val) => ack + +val, 0);

  return (
    <div>
      <Items1
        TotalSal={TotalSal}
        //currentItems={currentItems}
        items={items}
        initialPage={initialPage}
        from={from}
        to={to}
      />
    </div>
  );
};
