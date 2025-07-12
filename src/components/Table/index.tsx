import React, { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

import Colors from '../../app/theme/Colors';

export interface ITable {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  minWidth?: string;
}

const StyledTable = styled.table<{ $minWidth?: string }>`
  min-width: ${(props) => props.$minWidth ?? '320px'};
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  table-layout: auto;
  border-collapse: collapse;
  border-spacing: 0;
  box-sizing: border-box;
  tbody tr {
    width: 100%;
    position: relative;
    transition: background-color 500ms linear;
    &:hover {
      background-color: ${Colors['neutral-200']};
    }
  }
  td {
    color: ${Colors['neutral-600']};
    padding: 16px 24px 16px 24px;
    text-align: start;
    font-size: 14px;
    border-top: 1px solid ${Colors['neutral-200']};
  }
  th {
    background-color: white;
    color: ${Colors['neutral-700']};
    font-weight: 500;
    font-size: 12px;
    padding: 16px 24px 16px 24px;
    text-align: start;
  }
  tbody tr:nth-child(odd) {
    background-color: ${Colors['neutral-50']};
  }
  tbody tr:nth-child(even) {
    background-color: white;
  }
  tbody tr:nth-child(odd),
  tr:nth-child(even) {
    &:hover {
      background-color: ${Colors['neutral-200']};
    }
  }
`;

const Table: React.FC<ITable> = (props) => {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: props.minWidth ?? '320px',
        overflowX: 'auto',
      }}
    >
      <StyledTable $minWidth={props.minWidth} onClick={props.onClick} className={props.className} style={props.style}>
        {props.children}
      </StyledTable>
    </div>
  );
};

export default Table;
