import React, { useEffect } from "react";
import Offer from "./Components/Offer";
import "./assets/css/aboutus.scss";
const AboutUs = () => {
  useEffect(() => {
    document.title = "Capital Shop | About Us";
  }, []);
  return (
    <>
      <section className="aboutus-section">
        <Offer />
        <section className="caregory-breadcrumb">
          <div className="box">
            <h3>About US</h3>
            <h6>
              <a href="/Capital_Shop/">home</a> | about US
            </h6>
          </div>
        </section>
        <div className="container">
          <div className="about-box">
            <div className="mission">
              <p className="title">our mission</p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                odit at recusandae neque quos ab quae magnam iste, voluptatum
                eaque amet perferendis exercitationem delectus nihil consectetur
                non totam dignissimos vel id maxime voluptatem reprehenderit
                cupiditate voluptate? Possimus recusandae ab harum officia, a
                voluptatem eligendi autem, blanditiis vel alias aspernatur?
                Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ratione sed facilis quisquam aliquid maxime nostrum unde
                tempore delectus quis, tempora ad iste quas laborum corporis
                necessitatibus, nobis eaque impedit quo minima nisi asperiores
                porro corrupti. Sequi, numquam qui? Modi minima placeat
                explicabo consequuntur? Labore, vitae esse quis porro sint
                officiis.
              </p>
            </div>
            <div className="vision">
              <p className="title">our vision</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto alias unde sint adipisci similique quibusdam quaerat
                tempora officiis ab numquam nisi temporibus dignissimos neque
                accusamus, sed eius modi laborum odio, sapiente aspernatur
                maxime fuga! Molestiae quae saepe perferendis voluptatum quas
                aspernatur dolores fuga, sint adipisci earum sunt, debitis, vel
                unde eos veniam? Quasi necessitatibus veniam obcaecati
                doloremque temporibus quidem similique autem totam consectetur,
                repudiandae, nobis, cum sed deleniti distinctio ipsam? At vel
                dolorum minima, eligendi reprehenderit enim nisi natus doloribus
                iure, voluptatum harum et quaerat neque architecto deleniti
                laudantium molestias est laborum. Officiis, incidunt eligendi
                natus necessitatibus officia obcaecati repellendus.
              </p>
            </div>
            <div className="purpose">
              <p className="title">our purpose</p>
              <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                veritatis eos enim, quas aut rem culpa blanditiis quibusdam ea
                eveniet dolor! Consequatur, tempora facilis. Molestiae, quae
                nulla exercitationem quasi soluta quos explicabo dolore nam,
                iste consequuntur fugit ratione quaerat possimus esse vel
                quibusdam ea libero? Dolorum adipisci eligendi impedit libero
                cumque placeat ex nihil voluptas dolores officiis delectus nam
                tempore at, deserunt quae temporibus porro voluptatem harum hic
                dignissimos exercitationem iure. Consequuntur sint officiis
                placeat tenetur ex a, rerum excepturi facilis, quisquam, harum
                beatae sunt. Nobis, distinctio, similique aliquid, nam inventore
                adipisci quis quas illo assumenda minus nemo! Et, repellat?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
