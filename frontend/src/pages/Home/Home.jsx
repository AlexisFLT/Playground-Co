import Avatar from "@components/Avatar/Avatar";
import Nav1 from "@components/Nav1/Nav1";
import "./style.scss";

export default function Home() {
  return (
    <div className="IntegrationPage">
      <section className="firstSection">
        <Avatar />
      </section>
      <section className="secondSection">
        <div className="Nav1 slide">
          <Nav1 />
        </div>
      </section>
    </div>
  );
}
