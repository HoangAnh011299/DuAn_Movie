import React, { useEffect } from 'react'
import { https } from '../../../service/config'

export default function TabMovie() {
    useEffect(()=>{
        https
        .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
        .then((res) => {
                console.log(res)
        }).catch((err) => {
            console.log(err)
        });
    },[])
  return (
    <div>TabMovie</div>
  )
}
