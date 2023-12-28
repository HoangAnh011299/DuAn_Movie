import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";

export default function Footer() {
  const [cinemaArr, setCinemaArr] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinHeThongRap")
      .then((res) => {
        console.log(res);
        setCinemaArr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="footer">
      <div className="container">
        <div className="item pt-6">
          <div>
            <h1>TIX</h1>
            <br />
            <div className="text-xl">
              <p>FAQ</p>
              <p>Brand Guidelines</p>
              <p>Thỏa thuận sử dụng</p>
              <p>Chính sách bảo mật</p>
            </div>
          </div>
          <div>
            <h1>ĐỐI TÁC</h1>
          </div>
          <div>
            <h1>MOBILE APP</h1>
            <br />
            <div className="flex h-10">
              <img src="icon_footer/tải xuống (1).png" alt="" />
              <img src="icon_footer/tải xuống (2).png" alt="" />
            </div>
          </div>
          <div>
            <h1>SOCIAL</h1>
            <br />
            <div className="flex h-10">
              <img src="icon_footer/tải xuống (3).png" alt="" />
              <img src="icon_footer/tải xuống (4).png" alt="" />
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div className="item">
          <img className="h-20" src="icon_footer/tải xuống.jpeg" alt="" />
          <div className="text-left">
            <h1>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h1>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
            <p>
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
          </div>
          <img
            className="h-20"
            src="icon_footer/daThongBao-logo.cb85045e.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
