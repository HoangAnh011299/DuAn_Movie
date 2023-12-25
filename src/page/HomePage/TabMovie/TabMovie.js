import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";
import { Tabs, Tooltip } from "antd";
import ItemMovie from "./ItemMovie";

export default function TabMovie() {
  const [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
      .then((res) => {
        console.log(res);
        setHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onChange = (key) => {
    console.log(key);
  };
  const items = heThongRap.map((heThong, index) => {
    return {
      key: index,
      label: <img className="w-16" src={heThong.logo} alt="" />,
      children: (
        <Tabs
          style={{
            height: 600,
          }}
          tabPosition="left"
          
          items={heThong.lstCumRap.map((cumRap) => {
            return {
              key: cumRap.diaChi,
              label: (
                <div className="w-60 truncate text-left text-green-600">
                  <Tooltip  title={cumRap.diaChi}>
                    <p >{cumRap.tenCumRap}</p>
                  </Tooltip>
                </div>
              ),
              children:(
                <div
                style={{height:600}}
                className="space-x-5 overflow-y-scroll"
                >
                  <div>
                    {cumRap.danhSachPhim.map((phim)=>{
                      return <ItemMovie data = {phim} key={phim.maPhim}/>
                    })}
                  </div>
                </div>
              
              )
            }
          })}
        ></Tabs>
      ),
    };
  });
  return (
    <div className="container pb-96">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}
