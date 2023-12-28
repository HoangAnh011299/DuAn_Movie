import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { https } from "../../service/config";
import { Rate, Tabs } from "antd";
import moment from "moment";

export default function DetailPage() {
  const [detail, setdetail] = useState({});
  //  useParams lấy tham số trên url
  let { idPhim } = useParams();
  console.log("😃 - file: DetailPage.js:10 - DetailPage - idPhim:", idPhim);

  //  gọi api lấy chi tiết phim
  useEffect(() => {
    https
      .get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idPhim}`)
      .then((res) => {
        console.log(res.data.content);
        setdetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onChange = (key) => {
    console.log(key);
  };

  const detailItems = detail.heThongRapChieu?.map((rapChieu, index) => {
    return {
      key: index,
      label: <div>
              <img className="w-16" src={rapChieu.logo} alt="" />
              <div>{rapChieu.tenHeThongRap}</div>
              
            </div>,
       children: (
         <div
         style={{
           height: 600,
          }}
          className="space-y-5 overflow-y-scroll"
          >
          {rapChieu.cumRapChieu.map((cumRap) => (
            <div key={cumRap.maCumRap} style={{color:"white", fontSize:30}}>
              
              <div className="flex">
              <img
                className="w-30"
                src={cumRap.hinhAnh}
                alt={cumRap.tenCumRap}
              />
              <div>
              <h4>{cumRap.tenCumRap}</h4>
              {cumRap.lichChieuPhim.map((lichChieu) => (
                <span key={lichChieu.maLichChieu}>
                  {/* Customize the content as needed */}
                  {moment(lichChieu.ngayChieuGioChieu).format("DD-MM-YYYY ~ hh:mm")}
                  <h1>{lichChieu.tenRap}</h1>
                </span>
              ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      ),
    };
  });

  return (
    <div className="container">
      <div className=" md:flex items-center">
        <img src={detail.hinhAnh} className="w-80 mb-5" alt="" />
        <div className="text-center  flex-grow ">
          <h2 className="md:text-5xl text-5xl text-blue-600 font-bold animate-pulse">
            {detail.tenPhim}
          </h2>

          <Rate
            className="space-y-5 text-base md:text-xl"
            style={{ fontSize: 40, color: "red" }}
            allowHalf
            count={5}
            value={detail.danhGia}
          />
          <br />

          <button className="btn-theme">
          <a
            className="text-2xl font-bold "
            target="_blank"
            href={detail.trailer}
          >
            Trailer
          </a>
          </button>
        
          <p className="md:px-16 my-5" style={{ textAlign: "left" }}>
            {detail.moTa}
          </p>
        </div>
      </div>
      <div>
        <Tabs
          className="border border-gray-300"
          tabPosition="left"
          defaultActiveKey="1"
          items={detailItems}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
