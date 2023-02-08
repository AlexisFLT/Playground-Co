import background from "../../assets/logo/backgroundLogo.jpg";
import avatar from "../../assets/logo/photo.png";
import "./style.scss";

export default function Avatar() {
  return (
    <section className="avatarBody">
      <div className="avatar">
        <div className="personContainer">
          <img className="personCircle" src={background} alt="" />
          <img className="personAvatar" src={avatar} alt="Alexis" />
        </div>
      </div>
      <section className="myIdentity">
        <div className="divider" />
        <div className="myName">Alexis Foulont</div>
        <div className="myJob">Developer</div>
      </section>
    </section>
  );
}
