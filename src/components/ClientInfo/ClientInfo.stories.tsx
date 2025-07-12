import { Meta, StoryFn } from "@storybook/react";
import styled from "styled-components";
import ClientInfo, { IClientInfo } from ".";
import { mockClientInfoProps } from "./ClientInfo.mocks";

const meta: Meta<typeof ClientInfo> = {
  title: "Client Info",
  component: ClientInfo,
};

const StyledContainer = styled.div`
  width: 320px;
`;

const Template: StoryFn<IClientInfo> = (args) => (
  <StyledContainer>
    <ClientInfo {...args} />
  </StyledContainer>
);

export const Base: StoryFn<IClientInfo> = Template.bind({});

Base.args = {
  ...mockClientInfoProps.base,
} as IClientInfo;

export default meta;
