import { BiLoaderCircle } from "react-icons/bi";
import {
  BsFillChatLeftDotsFill,
  BsFillPaletteFill,
  BsFillShieldFill,
  BsDoorOpenFill,
} from "react-icons/bs";
import { Gi3DMeeple, GiBeech } from "react-icons/gi";
import { HiFingerPrint, HiUser } from "react-icons/hi";
import "./style.scss";

export default function IconOrbit() {
  return (
    <div className="bodyOrbit">
      <div className="orbit">
        <div className="centerIcon">
          <BiLoaderCircle className="reactIconsCenter rotate" />
        </div>
        <ul className="iconsList">
          <li className="icon1 allIcons">
            <div>
              <BsFillChatLeftDotsFill className="reactIcons" />
            </div>
            <p className="innerText innerText1">Chatting</p>
          </li>
          <li className="icon2 allIcons">
            <BsFillPaletteFill className="reactIcons" />
            <p className="innerText innerText2">Painting</p>
          </li>
          <li className="icon3 allIcons">
            <BsFillShieldFill className="reactIcons" />
            <p className="innerText innerText3">Shield</p>
          </li>
          <li className="icon4 allIcons">
            <Gi3DMeeple className="reactIcons" />
            <p className="innerText innerText4">Board gaming</p>
          </li>
          <li className="icon5 allIcons">
            <GiBeech className="reactIcons" />
            <p className="innerText innerText5">Tree</p>
          </li>
          <li className="icon6 allIcons">
            <HiFingerPrint className="reactIcons" />
            <p className="innerText innerText6">Technos</p>
          </li>
          <li className="icon7 allIcons">
            <HiUser className="reactIcons" />
            <p className="innerText innerText7">About me</p>
          </li>
          <li className="icon8 allIcons">
            <BsDoorOpenFill className="reactIcons" />
            <p className="innerText innerText8">Close</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
