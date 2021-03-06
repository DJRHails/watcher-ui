import React from 'react';
import { StoryMeta } from '/types/storybook';
import { Table } from './Table';
import { Heading } from '/components';
import { Box } from '/components';
import { Asset } from '/components';
import { ETHERSCAN_NAMESPACE } from '../Icon/Icon';

export default {
  title: 'Components/Table',
  component: Table,
};

export const table: StoryMeta = () => (
  <Table>
    <thead>
      <tr>
        <th>Transaction hash</th>
        <th>Value</th>
        <th>Recipient</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0xeb...cc0</td>
        <td>0.10 ETH</td>
        <td>0x4fe...581</td>
        <td>March 28 2019 08:47:17 AM +UTC</td>
      </tr>
      <tr>
        <td>0xsb...230</td>
        <td>0.11 ETH</td>
        <td>0x4gj...1e1</td>
        <td>March 28 2019 08:52:17 AM +UTC</td>
      </tr>
      <tr>
        <td>0xed...c40</td>
        <td>0.12 ETH</td>
        <td>0x3fd...781</td>
        <td>March 28 2019 08:55:17 AM +UTC</td>
      </tr>
    </tbody>
  </Table>
);

export const assetTable: StoryMeta = () => {
  const assetRows = [
    {
      name: 'Ethereum',
      ticker: 'Eth',
      platform: {
        name: 'Eth',
      },
      balance: 0.3434,
      price: 184.82
    },
    {
      name: 'Chai',
      ticker: 'CHAI',
      icon: {
        name: ETHERSCAN_NAMESPACE + 'chai',
      },
      platform: {
        name: 'Eth',
      },
      balance: 0.9926,
      price: 0.81
    },
    {
      name: 'Tether',
      ticker: 'USDT',
      platform: {
        name: 'Eth',
      },
      balance: 4.0604,
      price: 0.80
    },
    {
      name: 'sDEFI',
      ticker: 'sD',
      icon: {
        name: 'sD',
        color: 'background',
        backgroundColor: 'brand',
      },
      platform: {
        name: 'Eth',
      },
      balance: 0.0013,
      price: 1918.67
    },
    {
      name: 'Maker',
      ticker: 'MKR',
      platform: {
        name: 'Eth'
      },
      balance: 0.02,
      price: 543.2750
    },
    {
      name: 'Ethereum',
      ticker: 'ETH',
      platform: {
        name: 'Algo',
        backgroundColor: 'black',
      },
      balance: 0.3434,
      price: 184.82
    },
  ] as const;
  return (
    <Box p={3}>
      <Heading.h4>Wallet £69.95</Heading.h4>
      <Table
        m={0}
        mt={3}
        border={0}
        height={1}
        fontSize={5}
      >
        <thead>
          <tr>
            <th>Asset</th>
            <th>Balance</th>
            <th>Price</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          { assetRows.map((assetRow, idx) => (
            <tr key={idx}>
              <td>
                <Asset {...assetRow} />
              </td>
              <td>{assetRow.balance.toFixed(4)}</td>
              <td>£{assetRow.price.toFixed(2)}</td>
              <td>£{(assetRow.price * assetRow.balance).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};