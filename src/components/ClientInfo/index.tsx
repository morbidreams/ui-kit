import React from "react";
import styled from "styled-components";
import Spacing from "../../app/theme/Spacing";
import Logo from "../Logo";
import RatingInfo from "../RatingInfo";

const Container = styled.div<{ $size: number }>`
  display: flex;
  gap: ${Spacing["md"]};
  font-size: ${({ $size }) => $size}px;
  align-items: center;
`;

const CompanyLabel = styled.p<{ $size: number }>`
  font-size: ${({ $size }) => $size}px;
  font-weight: 600;
  line-height: 24px;
  margin-top: ${Spacing["none"]};
  margin-bottom: ${Spacing["xs"]};
`;

export interface IClientInfo {
  imageSrc: string;
  companyLabel: string;
  ratingLabel: string;
  reviewLabel: string;
  companyFontSize?: number;
  ratingInfoFontSize?: number;
  logoSize?: number;
}

const ClientInfo: React.FC<IClientInfo> = ({
  imageSrc = "images/user.png",
  companyLabel = "Placeholder Name",
  ratingLabel = "5.0",
  reviewLabel = "10 Reviews",
  companyFontSize = 16,
  ratingInfoFontSize = 14,
  logoSize = 48,
}: IClientInfo) => {
  return (
    <Container $size={ratingInfoFontSize}>
      <Logo src={imageSrc} size={logoSize} />
      <div>
        <CompanyLabel $size={companyFontSize} as="h5">
          {companyLabel}
        </CompanyLabel>
        <RatingInfo ratingLabel={ratingLabel} reviewLabel={reviewLabel} />
      </div>
    </Container>
  );
};

export default ClientInfo;
