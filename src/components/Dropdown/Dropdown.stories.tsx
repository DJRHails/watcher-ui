import React from 'react';
import { KindMeta } from '/types/storybook';

import { Dropdown } from './Dropdown';
import { Button } from '../Button';
import { DropdownButton } from './DropdownButton';
import { DropdownList } from './DropdownList';
import { DropdownGroup } from './DropdownGroup';
import { Portal } from '..';
import { DropdownItem } from './DropdownItem';
import { DropdownDivider } from './DropdownDivider';

const story: KindMeta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const words = [
  'About Visual Studio Code',
  'Check for updates',
  'Preferences',
  'Services',
  'Hide Visual Studio Code',
  'Show All',
];

export const simple = () => (
  <div style={{ minHeight: 4000 }}>
    <Dropdown>
      <DropdownButton
        // rightIcon={<FaUnlink />}
      >
        <Button>Words</Button>
      </DropdownButton>
      <DropdownList>
        Word
      </DropdownList>
    </Dropdown>
  </div>
);


export const Basic = () => (
  <div style={{ minHeight: 4000 }}>
    <Dropdown isLazy>
      <DropdownButton>
        Open Word menu
      </DropdownButton>
      <DropdownList>
        {words.map((word) => (
          <DropdownItem key={word}>{word}</DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  </div>
);

export const WithPortal = () => (
  <Dropdown>
    <DropdownButton as={Button} variant="solid" buttonColor="green" size="sm">
      Open menu
    </DropdownButton>
    <Portal>
      <DropdownList>
        <DropdownItem>Dropdown 1</DropdownItem>
        <DropdownItem>Dropdown 2</DropdownItem>
        <DropdownItem>Dropdown 3</DropdownItem>
        <DropdownItem>Dropdown 4</DropdownItem>
      </DropdownList>
    </Portal>
  </Dropdown>
);

export const withGroupedItems = () => (
  <Dropdown>
    {({ isOpen }) => (
      <>
        <DropdownButton as={Button} variant="solid" buttonColor="green" size="sm">
          {isOpen ? 'Close' : 'Open'} menu
        </DropdownButton>
        <DropdownList>
          <DropdownGroup title="Group 1">
            <DropdownItem>Share...</DropdownItem>
            <DropdownItem>Move...</DropdownItem>
          </DropdownGroup>
          <DropdownDivider/>
          <DropdownGroup title="Group 2">
            <DropdownItem isDisabled>Rename...</DropdownItem>
            <DropdownItem>Delete...</DropdownItem>
          </DropdownGroup>
        </DropdownList>
      </>
    )}
  </Dropdown>
);

export default story;