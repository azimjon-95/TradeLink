import React from "react";
import Section from "../../components/passport/section/Section";
import CommmantCenter from "../../components/passport/commandCenter/CommmantCenter";
import Solving from "../../components/passport/solving/Solving";
import OurMission from "../../components/passport/ourMission/OurMission";
import Ads from "../../components/passport/ads/Ads";
import Faq from "../../components/passport/faq/Faq";

const Passport = () => {
  let style = {
    width: "100%",
  };
  return (
    <div style={style} className="passport">
      <Section />
      <CommmantCenter />
      <Solving />
      <OurMission />
      <Ads
        extra_class="ads_1"
        ads_title="Hear What the Community is Saying About TradeLink Passport"
        ads_text="We value your feedback; it helps us improve."
        ads_button={"Review us on Trustpilot"}
      />
      <Ads
        extra_class="ads_2"
        ads_title="Grow Your Funds on TradeLink Marketplace"
        ads_text="Connect with investors, expand your reach, and earn commissions on profits - with no hidden fees."
        ads_button={"Learn more"}
      />
      <Faq />

      <Ads
        extra_class="ads_3"
        ads_title="Build Your Crypto Trading Reputation on TradeLink Passport"
        ads_text="Showcase your verified performance and connect with the world's leading investors."
        ads_button={"Get Started For FREE"}
      />
    </div>
  );
};

export default Passport;
