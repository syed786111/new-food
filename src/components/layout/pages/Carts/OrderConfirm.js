import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Order } from './Order'
import DatePicker from 'react-date-picker';
import Datetime from 'react-datetime';

import styles from '../OrderConfirm1.module.css'

import axios from 'axios'
export const OrderConfirm = () => {
    // const [odate,setOdate] =useState("");
    const navigate = useNavigate()
    const location = useLocation()
    const [Odate, setOdate] = useState("2022-12-28")
    const [orderMsg,setOrderMsg] = useState(false)
    console.log(Odate)
    const [OrderForm, setOrderForm] = useState({
        name: "",
       // Amount: location.state.Amount,
        daddress: "",
        contactNo: "",

      

    })

    const getDate = () => {
        var date = OrderForm.Odate.getDate().toLocaleString();
        // setOrderForm({...OrderForm,Odate:date})
        setOdate(date)

    }
   
    const HandleSubmit = (e) => {
        e.preventDefault()
       
        const formData = new FormData();
        formData.append('name', OrderForm.name)
         formData.append('Oid',location.state.maxOrderId+1 );
      
        formData.append('odate', Odate);
        formData.append('address', OrderForm.daddress);
        formData.append('contactNo', OrderForm.contactNo);
        for(let i=0;i<location.state.Pids.length;i++){
            const amount= location.state.prices[i] * location.state.Quantities[i]
            console.log("formDta",formData)
           if(i !== location.state.Pids.length - 1){
             
              formData.append('GrossAmount', 0);
           }else{
              formData.append('GrossAmount', location.state.GrossAmount);
           }
           formData.append("pid",location.state.Pids[i])
          // formData.append("names",Names[i])
         //  formData.append("prices",prices[i])
           formData.append("quantity", location.state.Quantities[i])
           formData.append("subTotal", amount)
           let url = "http://localhost/ReactApps/food-web/AddOrder1.php"
           axios.post(url, formData, {
           })
               .then(res => {
                   console.log(res.data);
               })
        }
        
        setOrderMsg(true)
       
    }
    const HandleChange = (e) => {
        setOrderForm({ ...OrderForm, [e.target.name]: e.target.value })
    }
    


    return (
        <div>

           
            <div className={`mt-4 mt-md-0  ${styles.main}`}>
            <div onClick={()=>setOrderMsg(!orderMsg)}  className={styles.orderConfirm}>
                {
                     orderMsg ? <div 
                     className={styles.confirmOrderMessage}
                     >Your Order placed successfully</div> :""
                }
            </div>
                <h4 className={`text-center mb-4 mt-3 ${styles.label}`}>Order Particulars</h4>
                <form onSubmit={(e) => HandleSubmit(e)}>
                    <table align='center'className={styles.table}>
                        <tr>
                            <td>
                                <label htmlFor='name'
                                className={styles.label}
                                >
                                    Customer Name
                                </label>
                            </td>
                            <td>
                                <input type="text" id="name" style={{width:"90%"}}
                                className={styles.addinput}
                                value={OrderForm.name} name="name" onChange={HandleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='address'
                                className={styles.label}
                                >
                                    Customer Address
                                </label>
                            </td>
                            <td>
                                <input type="text" id="address" style={{width:"90%"}}
                                 className={styles.addinput}
                                value={OrderForm.daddress} name="daddress" onChange={HandleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='cell'
                                className={styles.label}
                                >
                                    Customer Cell No
                                </label>

                            </td>
                            <td>
                                <input type="text" id="cell" style={{width:"90%"}}
                                 className={styles.addinput}
                                value={OrderForm.contactNo} name="contactNo" onChange={HandleChange} />
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                <label htmlFor='date'
                                className={styles.label}
                                >
                                    order Date
                                </label>

                            </td>
                            <td>
                                <input type="date" value={Odate} id="date" 
                                 className={styles.addinput}
                                
                                    onChange={(e) => setOdate(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                
                            </td>
                            <td>
                            <button type="submit" className={styles.btnadd}  >save</button>
                                <button onClick={() => navigate("/shopping1")}
                                 className={styles.btnCancel} >
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    </table>



                </form>



            </div>

        </div>
    )
}
