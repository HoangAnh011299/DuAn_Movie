import React from "react";

export default function News() {
  return (
    <div className="news_container">
      <div className="title">
        <h1 style={{fontSize: 50, fontWeight: 500}}>Ứng dụng tiện lợi dành <br /> cho người yêu điện ảnh</h1>
        <br />
        <p>
          Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi
          quà hấp dẫn.
        </p>
        <br />
        <button className="btn-theme-app">
          <a href="">App miễn phí tải về ngay</a>
        </button>
        <br />
        <br />
        <p>TIX có hai phiên bảnIOS&Android</p>
      </div>

      <div>
        <img style={{width: 300}} src="/img_slider/tải xuống.png" alt="" />
      </div>
    </div>
  );
}

