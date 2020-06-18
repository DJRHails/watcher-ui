import React from "react";
import { StoryMeta } from "../../types/storybook";
import { Table } from "./Table";
import { Heading } from "..";
import { Box } from "..";
import { Asset } from "..";

export default {
  title: "Components/Table",
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
      name: "ETH",
      icon: "Eth",
      platform: "Eth",
      balance: 0.3434,
      price: 184.82
    },
    {
      name: "Chai",
      icon: "chai",
      platform: "Eth",
      balance: 0.9926,
      price: 0.81
    },
    {
      name: "Tether",
      icon: "Tether",
      platform: "Eth",
      balance: 4.0604,
      price: 0.80
    },
    {
      name: "sDEFI",
      backgroundColor: "brand",
      iconProps: {
        color: "white",
      },
      platform: "Eth",
      balance: 0.0013,
      price: 1918.67
    },
    {
      name: "Maker",
      icon: "Mkr",
      platform: "Eth",
      balance: 0.02,
      price: 543.2750
    },
    {
      name: "ETH",
      icon: "Eth",
      platform: "Algo",
      platformProps: {
        name: "Algo",
        backgroundColor: "white",
        color: "black",
      },
      balance: 0.3434,
      price: 184.82
    },
  ];
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