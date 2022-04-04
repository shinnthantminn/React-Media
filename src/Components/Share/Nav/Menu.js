import { FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useState } from "react";

function Menu() {
  const toggle = useSelector((state) => state.toggle);
  const [con, setCon] = useState(false);
  const handleSignIn = () => {
    setCon(!con);
  };
  return (
    <div className="menu">
      <ul
        className={
          toggle
            ? "innerMenu mt-8 pb-5 flex"
            : " innerMenu mt-0 pb-0 hidden lg:flex"
        }
      >
        <li>
          <a href="#">ပြည်တွင်</a>
        </li>
        <li>
          <a href="#">နိုင်ငံတကာ</a>
        </li>
        <li>
          <div className="relative">
            <FiUser className="cursor-pointer" onClick={handleSignIn} />
            <div
              className={
                con
                  ? "dropdown visible transform scale-y-1"
                  : "dropdown hidden transform scale-y-0"
              }
            >
              <ul className="space-y-3">
                <li>
                  <a href="#">LogIn</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">LogOut</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
