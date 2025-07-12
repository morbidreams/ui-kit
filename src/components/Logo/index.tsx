import React from "react";
import styled from "styled-components";
import Colors from "../../app/theme/Colors";
import Radius from "../../app/theme/Radius";

const LogoImage = styled.img<{ $size: number }>`
  height: ${({ $size }) => `${$size}`}px;
  width: ${({ $size }) => `${$size}`}px;
  border-radius: ${Radius["full"]};
  border: 1px solid ${Colors["neutral-300"]};
  object-fit: cover;
`;

export interface ILogo extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  size?: number;
}

const Logo: React.FC<ILogo> = ({
  src = "https://via.placeholder.com/48x48",
  size = 48,
  className = "",
  ...rest
}) => <LogoImage src={src} $size={size} className={className} {...rest} />;

export default Logo;
