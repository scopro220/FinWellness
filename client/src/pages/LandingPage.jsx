import React from "react";
import mainVideo from "../images/mainpage.mp4";
import PersonalFinance from "../components/PersonalFinance";
import Payments from "../components/Payments";
import DataReports from "../components/DataReports";
import CustomerReview from "../components/CustomerReview";

const LandingPage = () => {
  return (
    <div>
      <section className="lp-wrapper">
        <div className="main-video-wrapper">
          <video
            height="650"
            src={mainVideo}
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </div>
        <div className="main-message">
          <p className="main-message-title">
            FinWellness, the best way to manage your money
          </p>
          <p>
            When you want to rest your head without worrying about your money.
          </p>
          <p>
            Turn to FinWellness to keep track of where you are spending you
            money.
          </p>
          <p>
            Track how much income is coming in and set up savings goals all at
            your fingertips.
          </p>
        </div>
      </section>
      <section className="lp-message-bar">
        <div>Totally Free</div>
        <div>Easy to Use</div>
      </section>
      <section className="lp-svgs">
        <PersonalFinance />
        <Payments />
        <DataReports />
      </section>
      <section className="lp-customer-reviews">
        <CustomerReview reviewText="I have paid off all my student loans thanks to FinWellness!!!" />
        <CustomerReview reviewText="Such a simple and easy application." />
        <CustomerReview reviewText="I was able to see where all my income was going and cut my spending. Thanks FinWellness." />
        <CustomerReview reviewText="Thanks to FinWellness I was able to save for my vacation in just a few months!" />
      </section>
    </div>
  );
};

export default LandingPage;
