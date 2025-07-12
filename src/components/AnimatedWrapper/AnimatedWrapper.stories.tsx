import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { Animation } from "../../types";
import Button from "../Button";
import AnimatedWrapper, { IAnimatedWrapper } from "./index";
import Colors from "../../app/theme/Colors";
import styled from "styled-components";

const Container = styled.div`
  max-width: 500px;
  padding: 32px 24px;
  margin-top: 20px;
  box-sizing: border-box;
  border: 1px solid ${Colors["neutral-200"]};
  border-radius: 12px;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
`;
const Header = styled.div`
  color: ${Colors["primary-700"]};
  font-size: 48px;
  font-weight: 600;
  line-height: 40px;
  padding-bottom: 12px;
`;
const SubHeader = styled.div`
  color: ${Colors["neutral-900"]};
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  padding-bottom: 8px;
`;
const Content = styled.div`
  color: ${Colors["neutral-700"]};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  i {
    font-size: 14px;
  }
  ul {
    margin: 0 0 0 8px;
    padding: 0 0 0 8px;
  }
`;

const meta: Meta<typeof AnimatedWrapper> = {
  title: "Decor/Animated Wrapper",
  component: AnimatedWrapper,
};

const Template: StoryFn<IAnimatedWrapper> = () => {
  const [firstPage, setFirstPage] = useState<boolean>(true);
  const [animation, setAnimation] = useState<Animation>(null);

  return (
    <>
      <Button
        onClick={() => {
          setAnimation(firstPage ? "slideLeft" : "slideRight");
          setFirstPage(!firstPage);
        }}
      >
        Toggle Card
      </Button>
      <AnimatedWrapper animation={animation}>
        {firstPage && (
          <Container>
            <Header>1st</Header>
            <SubHeader>Quarterly Synergy Yield</SubHeader>
            <Content>
              Through proactive monetization of data silos and predictive
              scaling of stakeholder matrices, we've achieved a fourth-cycle
              uplift in synergy capitalization across distributed cloud
              verticals.
            </Content>
          </Container>
        )}
        {!firstPage && (
          <Container>
            <Header>2nd</Header>
            <SubHeader>Average Deal Velocity</SubHeader>
            <Content>
              Accelerated deal closures were made possible by:
              <ul>
                <li>Pre-calibrated pitch modularity</li>
                <li>Contractual auto-approval loops</li>
                <li>Cross-channel stakeholder syncing</li>
              </ul>
            </Content>
          </Container>
        )}
      </AnimatedWrapper>
    </>
  );
};

export const Base = Template.bind({});

export default meta;
