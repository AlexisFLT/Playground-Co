import Avatar from "@components/Avatar/Avatar";
import IconOrbit from "@components/IconOrbit/IconOrbit";
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
      <section className="thirdSection">
        <div className="orbitBlock">
          <IconOrbit />
        </div>
      </section>
      <section className="fourthSection">
        <div>coucou</div>
      </section>
    </div>
  );
}
