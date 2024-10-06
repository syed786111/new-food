import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-date-picker';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import styles from './OrderList.module.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { PaginateOrderList } from '../UI/PaginateOrderList';
import styles from "../UI/Paginate.module.css";
import { Footer } from '../UI/Footer';
export const OrderList1 = () => {
    const [data, setData] = useState([{}])
    const [limit, setLimit] = useState(5)
    const [FromDate, setFromDate] = useState("2022-12-06")
    const [ToDate, setToDate] = useState("2022-12-28")
    const [orders,setOrders] = useState([])
    console.log(FromDate)
    console.log(ToDate.getDate)
    console.log(orders)
    const FecthData = async () => {
        // setSkeleton(false)
        await axios.get('http://localhost/ReactApps/food-web/ListOrder1.php').then(res => {
            console.log(res.data)
            setData(res.data)
            //  setCurrentItems(res.data);
            //  setCurrentItems([...res.data.slice(pagination.start, pagination.end)])
            // e.preventDefault()


        })
    }
    useEffect(() => {

        setTimeout(() => {
            // console.log('Hello, World!')
            FecthData()
        }, 3000);

    }, [])
    
    



    const SearchOrder = async (e) => {
        e.preventDefault()
       
        var params = {
            date1: FromDate.toString(),
            date2: ToDate.toString()
        }
        const result1 = axios.get("http://localhost/ReactApps/food-web/SearchOrder1.php", { params }).then((data) => {
            console.log("data is", data)
            setData(data.data)
        }).catch((error) => { })
      

    }

    return (
        <>
        <div>
            <div className='d-flex  flex-column flex-md-row  justify-content-center
             align-items-center'
             style={{marginTop:"200px"}}
             >
                <div>
                <label><h4 className={styles.label}>From Date</h4></label>
            <input type="date" value={FromDate}

                onChange={(e) => setFromDate(e.target.value)}
                className={styles.input}
            />

                </div>
                <div className='mt-5 mt-md-0'>
                <label><h4 className={styles.label}>To Date</h4></label>
            <input type="date" value={ToDate}
                onChange={(e) => setToDate(e.target.value)}
                className={styles.input}
            />
            <button onClick={SearchOrder} className={styles.search}>
                <i class="fa fa-search " aria-hidden="true"></i>
            </button>

                </div>
            </div>
            
            




            <PaginateOrderList limit={limit} items={data}
                from={FromDate} to={ToDate}
            />




        </div>
       
        </>
        
    )
}
