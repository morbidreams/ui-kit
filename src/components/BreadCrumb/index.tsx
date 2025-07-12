import React from 'react';
import styled from 'styled-components';
import { BlogHomeIcon, RightVectorIcon } from '../Icons';
import Colors from '../../app/theme/Colors';

export interface IBreadCrumb {
  content: { title: string; href: string }[];
  style?: React.CSSProperties;
}

const BreadCrumbContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;

  & > svg {
    color: ${Colors['neutral-300']};
    margin-right: 12px;
    margin-left: 12px;
  }

  & > a {
    line-height: 0px;
  }
`;

const BreadCrumbLink = styled.a`
  color: ${Colors['neutral-500']};
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    color: ${Colors['neutral-900']};
  }

  svg {
    color: ${Colors['neutral-500']};
  }
`;

const BreadCrumb: React.FC<IBreadCrumb> = ({ content, style }) => {
  return (
    <BreadCrumbContainer style={style}>
      {content?.length > 0 && (
        <BreadCrumbLink href={content[0].href}>
          <BlogHomeIcon />
        </BreadCrumbLink>
      )}
      {content?.length > 1 &&
        content.slice(1).map((item) => (
          <React.Fragment key={item.href}>
            <RightVectorIcon />
            <BreadCrumbLink href={item.href}>{item.title}</BreadCrumbLink>
          </React.Fragment>
        ))}
    </BreadCrumbContainer>
  );
};

export default BreadCrumb;
