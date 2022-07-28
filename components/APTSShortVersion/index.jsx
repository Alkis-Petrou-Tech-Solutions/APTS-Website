import React from "react";
import "./APTSShortVersion.css";

function APTSShortVersion(props) {
  const {
    logo,
    overlapGroup,
    spanText1,
    spanText2,
    getInTouch,
    about,
    services,
    loremIpsumDolorSi,
    itConsultancy,
    infrastructureEngineering,
    softwareEngineering,
    x2022AlkisPetrou,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="apts-short-version screen">
        <div className="flex-col">
          <div className="flex-row">
            <img className="logo" src={logo} />
            <div className="contact-icons">
              <img className="icon" src="/img/github-icon@2x.svg" />
              <img className="icon-linkedin" src="/img/linkedin-icon@2x.svg" />
              <img
                className="icon-call"
                src="/img/clarity-phone-handset-solid@2x.svg"
              />
              <img className="icon" src="/img/clarity-email-solid@2x.svg" />
            </div>
          </div>
          <div
            className="overlap-group"
            style={{ backgroundImage: `url(${overlapGroup})` }}
          >
            <h1 className="software-services-an poppins-semi-bold-black-32px">
              <span className="poppins-semi-bold-black-32px">{spanText1}</span>
              <span className="poppins-semi-bold-black-32px">{spanText2}</span>
            </h1>
            <div className="get-in-touch-button">
              <a
                className="get-in-touch button-link"
                href={`mailto:alkis.petrou@aptechsolutions.uk?subject=${encodeURIComponent(
                  "Website enquiry"
                )}`}
              >
                {getInTouch}
              </a>
            </div>
          </div>
          <div className="flex-row-1 poppins-bold-black-22px">
            <div className="about">{about}</div>
            <div className="services">{services}</div>
          </div>
        </div>
        <div className="flex-row-2">
          <p className="lorem-ipsum-dolor-si">{loremIpsumDolorSi}</p>
          <div className="flex-col-1">
            <div className="it-consult-container">
              <img className="x-icon" src="/img/it-consultency-icon@2x.svg" />
              <div className="it-consultancy poppins-medium-black-20px">
                {itConsultancy}
              </div>
            </div>
            <div className="infrastructure-engineering-container">
              <img
                className="x-icon"
                src="/img/infrastructure-engineering-icon@2x.svg"
              />
              <div className="infrastructure-engineering poppins-medium-black-20px">
                {infrastructureEngineering}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col-2">
          <div className="software-engineering-container">
            <img
              className="x-icon"
              src="/img/software-engineering-icon@2x.svg"
            />
            <div className="software-engineering poppins-medium-black-20px">
              {softwareEngineering}
            </div>
          </div>
          <img
            className="technologies-icons"
            src="/img/technologies-icons@2x.svg"
          />
          <div className="footer">
            <p className="x2022-alkis-petrou">{x2022AlkisPetrou}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default APTSShortVersion;
