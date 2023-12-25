 import React, { useEffect, useState } from 'react'
 import axios from 'axios'
 import { Card } from 'antd';
import { https } from '../../service/config';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TURN_OFF, TURN_ON } from '../../redux/constant/spinner';
 const { Meta } = Card;
 
 
 
 export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  // useDispatch ~ mapDispathToProps ~ đẩy data lên redux 
  let dispatch = useDispatch()
  //bật loading
  useEffect(()=>{
    dispatch({
      type: TURN_ON
    })
    // axios({
    //   url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09',
    //   method: 'GET',
    //   headers: {
    //     TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NCIsIkhldEhhblN0cmluZyI6IjE0LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTY0NDgwMDAwMCIsIm5iZiI6MTY4NzcxMjQwMCwiZXhwIjoxNzE1NzkyNDAwfQ.cy8EAM6hrKh2o6c9THZW5lrKeOEmQXIDgFVyIf7K_rU",
    //   }
    // })
    https.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09')
    .then((res)=>{
      console.log(res)
      setMovieArr(res.data.content)
      dispatch({
        type: TURN_OFF
      })
    })
    .catch((err)=>{
      console.log(err)
      dispatch({
        type: TURN_OFF
      })
    })
  },[])

   
  return  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 container'>
      {
        movieArr.map((item,index)=>{
          return (
            <Card
            key={index}
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={item.hinhAnh} />}
          >
            <Meta title={item.tenPhim} />
            <br />
            <NavLink to={`/detail/${item.maPhim}`} className="px-5 py-2 rounded border-2 border-red-500 ">Xem chi tiết</NavLink> 
          </Card>
          )
        })
      }
     </div>
   
 }
 