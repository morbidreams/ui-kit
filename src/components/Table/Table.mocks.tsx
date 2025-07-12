import { ITable } from './index';
import React from 'react';
import Colors from '../../app/theme/Colors';
import Badge from '../Badge';

const baseStyles: ITable = {
  minWidth: '800px',
  children: (
    <>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
      </tr>
      <tbody>
        <tr>
          <td>Column 1 data</td>
          <td>Column 2 data</td>
        </tr>
      </tbody>
    </>
  ),
};

const WithContentStyles: ITable = {
  minWidth: '800px',
  children: (
    <>
      <tr>
        <th>ID</th>
        <th style={{ maxWidth: '300px' }}>Description</th>
        <th>Service</th>
        <th>Date</th>
        <th>Status</th>
        <th />
        <th />
      </tr>
      <tbody>
        <tr>
          <td style={{ fontWeight: 600 }}>#321654</td>
          <td style={{ maxWidth: '300px' }}>
            Lorem ipsum dolor sit amet consectetur. Eget commodo magna arcu consequat amet faucibus vel. get commodo
            magna arcu consequat amet...
          </td>
          <td>Saas</td>
          <td>September 21, 2023</td>
          <td>
            <Badge color="neutral">New</Badge>
          </td>
          <td style={{ color: Colors['neutral-600'], fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Cancel</td>
          <td style={{ color: Colors['primary-600'], fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Manage</td>
        </tr>
        <tr>
          <td style={{ fontWeight: 600 }}>#321654</td>
          <td style={{ maxWidth: '300px' }}>
            Lorem ipsum dolor sit amet consectetur. Eget commodo magna arcu consequat amet faucibus vel. get commodo
            magna arcu consequat amet...
          </td>
          <td>App</td>
          <td>September 21, 2023</td>
          <td>
            <Badge color="primary">Searching</Badge>
          </td>
          <td style={{ color: Colors['neutral-600'], fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Cancel</td>
          <td style={{ color: Colors['primary-600'], fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Manage</td>
        </tr>
        <tr>
          <td style={{ fontWeight: 600 }}>#321654</td>
          <td style={{ maxWidth: '300px' }}>
            Lorem ipsum dolor sit amet consectetur. Eget commodo magna arcu consequat amet faucibus vel. get commodo
            magna arcu consequat amet...
          </td>
          <td>Cloud</td>
          <td>September 21, 2023</td>
          <td>
            <Badge color="error">Cancelled</Badge>
          </td>
          <td style={{ color: Colors['neutral-600'], fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Cancel</td>
          <td style={{ color: Colors['primary-600'], fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Manage</td>
        </tr>
      </tbody>
    </>
  ),
};

export const mockTableProps = {
  baseStyles,
  WithContentStyles,
};
