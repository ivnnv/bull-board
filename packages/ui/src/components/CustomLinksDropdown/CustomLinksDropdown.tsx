import { UIConfig } from '@bull-board/api/typings/app';
import { Item, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { DropdownContent } from '../DropdownContent/DropdownContent';
import { Link } from 'react-router-dom';
import { UserIcon } from '../Icons/User';
import { Button } from '../Button/Button';

type CustomLinksDropdownProps = {
  options: UIConfig['miscLinks'];
  className: string;
};

export const CustomLinksDropdown = ({ options = [], className }: CustomLinksDropdownProps) => {
  return (
    <Root>
      <Trigger asChild>
        <Button className={className}>
          <UserIcon />
        </Button>
      </Trigger>

      <Portal>
        <DropdownContent align="end">
          {options.map((option) => (
            <Item key={option.url} asChild>
              {/* {!option.internal ? (
                <a href={option.url}>{option.text}</a>
              ) : (
                <Link to={option.url}>
                  {option.text}
                </Link>
              )} */}
              <Link to={option.url}>
                {option.text}
              </Link>
            </Item>
          ))}
        </DropdownContent>
      </Portal>
    </Root>
  );
};
