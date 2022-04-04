import logo from "../../../statics/Logo.jpg";
import Menu from "./Menu";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Toggle } from "../../../Stores/Actions/ToggleAction";
import { IoClose } from "react-icons/io5";

function Nav() {
  const toggle = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(Toggle(!toggle));
  };

  return (
    <div className="bg-red-600  py-2">
      <div className="flex flex-wrap 2xl:container mx-auto justify-between text-white pr-5 2xl:pr-0">
        <div className="flex text-2xl font-bold items-center">
          <img src={logo} alt="Logo" className=" w-14" />
          <p className="word">SR Media</p>
        </div>
        <div
          onClick={handleMenu}
          className="flex cursor-pointer justify-center pr-3 items-center text-2xl visible lg:hidden"
        >
          {toggle ? <IoClose /> : <BiMenu />}
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Nav;
