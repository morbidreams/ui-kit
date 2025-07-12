import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import Breakpoints from '../../app/theme/Breakpoints';
import Colors from '../../app/theme/Colors';
import { DownVector, UpVector } from '../Icons';
export interface TableOfContentsHeaderProps {
  isOpen: boolean;
  handleToggle: () => void;
  title?: string;
  readTime?: string;
  id: string;
}

const Header = styled.div`
  min-height: 56.08px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  column-gap: 8px;
  background-color: ${Colors['neutral-50']};
  border-bottom: 1px solid ${Colors['neutral-300']};
  border-radius: 16px 16px 0px 0px;
  line-height: 24px;
  box-sizing: border-box;
  @media screen and (max-width: ${Breakpoints['mobile-end']}) {
    border-bottom: 1px solid ${Colors['neutral-200']};
    cursor: pointer;
    padding: 0px 20px 0px 20px;
    justify-content: space-between;
    border-radius: 0px;
    background-color: white;
  }
`;
const HeaderContentWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
const HeaderTitle = styled.p`
  margin: 0px;
  padding: 16px 0px 16px 16px;
  font-weight: 600;
  color: ${Colors['neutral-900']};
  @media screen and (max-width: ${Breakpoints['mobile-end']}) {
    padding-left: 0px;
  }
`;

const MinRead = styled.p`
  color: ${Colors['neutral-700']};
  margin: 0px;
  padding: 16px 16px 16px 0px;
  @media screen and (max-width: ${Breakpoints['mobile-end']}) {
    padding-right: 0px;
  }
`;

const Divider = styled.div`
  background: ${Colors['neutral-300']};
  width: 1px;
  margin: 16px 0px 16px 0px;
  @media screen and (max-width: ${Breakpoints['mobile-end']}) {
    background: ${Colors['neutral-200']};
    margin: 0px;
    width: 1px;
    height: 24px;
  }
`;
const Icon = styled.div`
  margin: 16px 0;
`;
const HeaderContent: React.FC<{ title?: string; readTime?: string }> = ({ title, readTime }) => (
  <>
    <HeaderTitle>{title}</HeaderTitle>
    <Divider />
    <MinRead>{readTime}</MinRead>
  </>
);

const TableOfContentsHeader: React.FC<TableOfContentsHeaderProps> = ({ isOpen, handleToggle, title, readTime, id }) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${Breakpoints['mobile-end']})` });
  return (
    <Header onClick={isMobile ? handleToggle : undefined} id={id}>
      {isMobile ? (
        <>
          <HeaderContentWrapper>
            <HeaderContent title={title} readTime={readTime} />
          </HeaderContentWrapper>
          <Icon>{isOpen ? <UpVector /> : <DownVector />}</Icon>
        </>
      ) : (
        <HeaderContent title={title} readTime={readTime} />
      )}
    </Header>
  );
};

export default TableOfContentsHeader;
