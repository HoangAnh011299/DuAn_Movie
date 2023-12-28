import React, { useEffect, useState } from "react";

import { https } from "../../service/config";
import { useParams } from "react-router-dom";
import { Rate, Radio, Space, Tabs, Tooltip } from "antd";

export default function DetailPage() {
  const [detail, setDetail] = useState({});
  // useParams lấy tham số từ url
  let { idPhim } = useParams();
  console.log(" 😂 ~ DetailPage ~ idPhim:", idPhim);

  const [system, setSystem] = useState([]);

  const changeTabPosition = (e) => {
    console.log(" 😂 ~ changeTabPosition ~ changeTabPosition:", e);
  };

  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`)
      .then((res) => {
        console.log(res);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(" 😂 ~ .then ~ err:", err);
      });
  }, []);

  console.log("system", system);
  // book ticket
  useEffect(() => {
    https
      .get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idPhim}`)
      .then((res) => {
        setSystem(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const items = system.map((item, index) => {
  //   return {
  //     key: index,
  //     label: <img className="w-16" src={item.logo} alt="" />,
  //     // children: (
        
  //     // )
  //   };
  // });

  return (
    <div className="container flex items-center mt-40">
      <img src={detail.hinhAnh} className="w-96" alt="" />

      <div className="text-center space-y-10 flex-grow">
        <Rate
          style={{ fontSize: 40, color: "red" }}
          allowHalf
          count={10}
          value={detail.danhGia}
        />
        <h2 className="text-5xl text-white-600 font-bold animate-pulse">
          {detail.tenPhim}
        </h2>
        <p>{detail.ngayKhoiChieu}</p>

        <button className="btn-theme">
          <a href={detail.trailer}>Trailer</a>
        </button>
        <br />
        <br />
        <a href="#" className="Book_tickets">
          Đặt vé
        </a>
        <br />
      </div>
      {/* ----------------------------------- */}
      <div>
      <Tabs
        tabPosition="left"
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: <img className="w-16" src="" alt="" />,
            key: id,
            children: `Content of Tab ${id}`,
          };
        })}
      />
      </div>
    </div>
  );
}
