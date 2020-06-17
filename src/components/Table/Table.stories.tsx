import React from "react";
import { StoryMeta } from "../../types/storybook";
import { Table } from "./Table";
import { Heading } from "../Typography";
import { Box } from "../Box";
import { Asset } from "../Asset";

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
      asset: "Eth",
      balance: 0.3434,
      price: 184.82
    },
    {
      asset: "Chai",
      balance: 0.9926,
      price: 0.81
    },
    {
      asset: "rDAI",
      balance: 4.0604,
      price: 0.80
    },
    {
      asset: "sDEFI",
      balance: 0.0013,
      price: 1918.67
    },
    {
      asset: "sUSD",
      balance: 0.0031,
      price: 1
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
                <Asset name={assetRow.asset} />
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