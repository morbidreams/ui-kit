import React from "react";
import styled from "styled-components";
import Colors from "../../app/theme/Colors";
import { ISlider } from "./index";

const Container = styled.div`
  min-width: 286px;
  padding: 32px 24px;
  box-sizing: border-box;
`;
const MetricsHeader = styled.div`
  color: ${Colors["primary-700"]};
  font-size: 48px;
  font-weight: 600;
  line-height: 40px;
  padding-bottom: 12px;
`;
const MetricsSubHeader = styled.div`
  color: ${Colors["neutral-900"]};
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  padding-bottom: 8px;
`;
const MetricsContent = styled.div`
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
const baseStyles: ISlider = {
  children: [
    <Container key={1}>
      <MetricsHeader>$14.7M</MetricsHeader>
      <MetricsSubHeader>Quarterly Synergy Yield</MetricsSubHeader>
      <MetricsContent>
        Through proactive monetization of data silos and predictive scaling of
        stakeholder matrices, we've achieved a fourth-cycle uplift in synergy
        capitalization across distributed cloud verticals.
      </MetricsContent>
    </Container>,

    <Container key={2}>
      <MetricsHeader>4.6 Days</MetricsHeader>
      <MetricsSubHeader>Average Deal Velocity</MetricsSubHeader>
      <MetricsContent>
        Accelerated deal closures were made possible by:
        <ul>
          <li>Pre-calibrated pitch modularity</li>
          <li>Contractual auto-approval loops</li>
          <li>Cross-channel stakeholder syncing</li>
        </ul>
      </MetricsContent>
    </Container>,

    <Container key={3}>
      <MetricsHeader>17 Nodes</MetricsHeader>
      <MetricsSubHeader>Microservice Throughput Hubs</MetricsSubHeader>
      <MetricsContent>
        <div style={{ paddingBottom: "16px" }}>
          Our architecture now supports modularized task clusters via 17
          dedicated nodes, each designed to handle dual-injected I/O patterns.
          This ensures hyperspeed deployments without load compromise across
          mission-critical layers.
        </div>
        <i>*Only applies to locals.</i>
      </MetricsContent>
    </Container>,
    <Container key={4}>
      <MetricsHeader>92%</MetricsHeader>
      <MetricsSubHeader>Retention Uplift Metric</MetricsSubHeader>
      <MetricsContent>
        Post-implementation analytics reveal that user stickiness soared
        following the rollout of tier-aware personalization layers and
        context-sensitive feedback loops within the engagement funnel.
      </MetricsContent>
    </Container>,
    <Container key={5}>
      <MetricsHeader>$302K</MetricsHeader>
      <MetricsSubHeader>Monthly Burn Rate Delta</MetricsSubHeader>
      <MetricsContent>
        Operational outlays have been smart-reduced by deploying latency-aware
        budget clusters, allowing us to abstract capex into micro-quadrants
        while sustaining ROI-positive throughput.
      </MetricsContent>
    </Container>,
  ],
  slideSeparator: "sur",
  bgImgSrc: "https://i.imgur.com/fvcwruC.jpeg",
  togglePaginationDots: true,
  toggleNavigation: true,
};

export const mockSliderProps = {
  baseStyles,
};
