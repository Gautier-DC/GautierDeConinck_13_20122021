import React from "react";
import styled from "styled-components";

const SrOnly = styled.h2`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
`;

const FeaturesContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeatureIicon = styled.img`
  width: 150px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

function Features() {
  const featuresItems = [
    {
      icon: "icon-chat.png",
      title: "You are our #1 priority",
      text: "Need to talk to a representative ? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
      icon: "icon-money.png",
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!"
    },
    {
      icon: "icon-security.png",
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe."
    },
  ];

  return (
    <FeaturesContainer>
      <SrOnly>Features</SrOnly>
      {featuresItems.map((featItem, index) => {
        return (
          <FeatureItem key={"fitem-" + index}>
            <FeatureIicon src={`./img/${featItem.icon}`} alt="Chat Icon" />
            <FeatureItemTitle>{featItem.title}</FeatureItemTitle>
            <p>{featItem.text}</p>
          </FeatureItem>
        );
      })}
    </FeaturesContainer>
  );
}

export default Features;
