import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  //useNavigate dung de dieu huong trang, khong gay reload
  let navigate = useNavigate();
  //lấy dữ liệu từ redux về
  //useSelector ~ maoStateToProps
  let user = useSelector((state) => state.userReducer.user);
  let renderMenu = () => {
    if (user) {
      return (
        <>
         <span>{user.hoTen}</span>
          <button
          className="btn-theme"
            onClick={() => {
              window.location.href = "/login";
              // clear data user localStorage
              localStorage.removeItem("USER_INFO");
            }}
          >
            Logout
          </button>
          
        </>
      );
    } else {
      <button
      className="btn-theme"
        onClick={() => {
          // navigate("/login")
          window.location.href = "/login";
          //windown => reload lai trang => du lieu redux se mat
        }}
      >
        Login
      </button>;
    }
  };
  return (
    <div className="header">
      <div className="container flex justify-between ">
        <span
          onClick={() => {
            navigate("/");
          }}
          className="text-red-500 text-3xl animate-bounce"
        >
          CyberFlix
        </span>
        <div className="pages">
          <a href="#">Lịch chiếu</a>
          <a href="#">Cụm Rạp</a>
          <a href="#">Tin Tức</a>
          <a href="#">Ứng dụng</a>
        </div>
        <div className="space-x-5">{renderMenu()}</div>
      </div>
    </div>
  );
}
