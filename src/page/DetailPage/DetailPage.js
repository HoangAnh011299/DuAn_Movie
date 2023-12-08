import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { https } from '../../service/config';

export default function DetailPage() {
    const [detail, setDetail] = useState({});
    // useParams lấy tham số từ url
  let {idPhim} = useParams()
   console.log(" 😂 ~ DetailPage ~ idPhim:", idPhim)
   
  
   useEffect(() => {
    https
    .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`)
    .then((res) => {
        console.log(res)
        setDetail(res.data.content)
    }).catch((err) => {
        console.log(" 😂 ~ .then ~ err:", err)
    });
   }, []);
  return (
    <div className='container flex items-center'>
        <img src={detail.hinhAnh} className='w-96' alt="" />
        <div>{detail.tenPhim}</div>
    </div>
  )
}
