import React, { useEffect, useState } from "react";
import ContactBanner from "../../components/banners/ContactBanner";
import { Row, Col, Container } from "reactstrap";
import cx from "classnames";
import { useHistory } from "react-router";
import { connect, useSelector } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-multi-lang";
import { Link } from "react-router-dom";
import leftLineArrow from "../../assets/images/icons/line-arrow-left.svg";
import { RaffleTicketCard } from "../../components/cards";
import { scrollToTopSmooth } from "../../util";

const ContactUs = (props) => {
  const t = useTranslation()

  return (
    <div>
      <ContactBanner
        linkPage={[{ type: "link", name: "Home", link: "/" }, { name: "ContactUs Shurooq" }]}
      />
      <section className="uploadSection">
        <div className="UploadCard" style={{ background: "#f9f9fa" }}>
          <div>
            <Container fluid>
            <iframe 
      id="JotFormIFrame-212271025930445"
      title="General Inquiry Contact Form"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allowfullscreen="true"
      allow="geolocation; microphone; camera"
      src="https://form.jotform.com/212271025930445"
      frameborder="0"
      style={{"min-width":"100%",height:"600px",border:"none"}}
      scrolling="no"
    
    >
    </iframe>
    <script src="/js/jotcontactform.js"></script>
            </Container>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = ({ user: { raffleDataByInvoice } }) => ({
  raffleDataByInvoice,
});

const mapDispatchToProps = {
  getRaffleByInvoice: userAction.getRaffleByInvoice,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactUs));
