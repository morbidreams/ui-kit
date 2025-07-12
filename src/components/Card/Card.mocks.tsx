import { ICard } from './index';
import React from 'react';
import Button from '../Button';
import Badge from '../Badge';
import CardHeader from '../CardHeader';
import Colors from '../../app/theme/Colors';
import { ListIcon } from '../Icons';
import Table from '../Table';

const baseStyles: ICard = {
  children: 'Example',
  hover: false,
};

const withContentStyles: ICard = {
  hover: false,
  children: (
    <>
      <CardHeader>
        <div style={{ display: 'flex' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2
                style={{
                  fontWeight: 600,
                  fontSize: '18px',
                  color: Colors['neutral-900'],
                  margin: 0,
                  display: 'inline-block',
                }}
              >
                List of Projects
              </h2>
              <Badge style={{ marginLeft: '12px' }}>3 projects</Badge>
            </div>
            <p style={{ fontSize: '14px', color: Colors['neutral-600'], marginTop: '4px', marginBottom: 0 }}>
              Here are the list of projects that you have submitted.
            </p>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex' }}>
            <Button color="neutral" outline style={{ marginRight: '8px' }}>
              <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
                <ListIcon />
              </span>
              <span>Show Filters</span>
            </Button>
            <Button color="neutral" outline>
              View all projects
            </Button>
          </div>
        </div>
      </CardHeader>
      <Table>
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
              Lorem ipsum dolor sit amet consectetur. Eget commodo magna arcu consequat amet faucibus vel.
            </td>
            <td>Saas</td>
            <td>September 21, 2023</td>
            <td>
              <Badge color="neutral">New</Badge>
            </td>
            <td style={{ color: Colors['neutral-600'], fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
              Cancel
            </td>
            <td style={{ color: Colors['primary-600'], fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
              Manage
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600 }}>#321654</td>
            <td style={{ maxWidth: '300px' }}>
              Lorem ipsum dolor sit amet consectetur. Eget commodo magna arcu consequat amet faucibus vel.
            </td>
            <td>App</td>
            <td>September 21, 2023</td>
            <td>
              <Badge color="primary">Searching</Badge>
            </td>
            <td style={{ color: Colors['neutral-600'], fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
              Cancel
            </td>
            <td style={{ color: Colors['primary-600'], fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
              Manage
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600 }}>#321654</td>
            <td style={{ maxWidth: '300px' }}>
              Lorem ipsum dolor sit amet consectetur. Eget commodo magna arcu consequat amet faucibus vel.
            </td>
            <td>Cloud</td>
            <td>September 21, 2023</td>
            <td>
              <Badge color="error">Cancelled</Badge>
            </td>
            <td style={{ color: Colors['neutral-600'], fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
              Cancel
            </td>
            <td style={{ color: Colors['primary-600'], fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
              Manage
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  ),
};

export const mockCardProps = {
  baseStyles,
  withContentStyles,
};
