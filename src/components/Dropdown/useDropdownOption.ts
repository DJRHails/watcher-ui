import { UseDropdownItemProps, useDropdownItem } from './useDropdownItem';
import { useControllableState, getValidChildren } from '/utils';
import { useCallback, cloneElement } from 'react';
import { isString, isArray } from 'util';

export interface UseDropdownOptionProps extends UseDropdownItemProps {
  value?: string
  isChecked?: boolean
  type?: 'radio' | 'checkbox'
  children?: React.ReactNode
}

export function useDropdownOption(props: UseDropdownOptionProps) {
  const {
    onClick,
    isDisabled,
    isFocusable,
    type = 'radio',
    isChecked,
    ...rest
  } = props;

  const ownProps = useDropdownItem({
    isDisabled,
    isFocusable,
    onClick,
  });

  return {
    ...rest,
    ...ownProps,
    role: `dropdownitem${type}`,
    'aria-checked': isChecked as React.AriaAttributes['aria-checked'],
  };
}

export interface UseDropdownOptionGroupProps {
  value?: string | string[]
  defaultValue?: string | string[]
  type?: 'radio' | 'checkbox'
  onChange?: (value: string | string[]) => void
  children?: React.ReactNode
}

export function useDropdownOptionGroup(props: UseDropdownOptionGroupProps) {
  const {
    children,
    type = 'radio',
    value: valueProp,
    defaultValue,
    onChange,
    ...htmlProps
  } = props;

  const isRadio = type === 'radio';

  const fallback = isRadio ? '' : [];

  const [value, setValue] = useControllableState({
    defaultValue: defaultValue ?? fallback,
    value: valueProp,
    onChange,
  });

  const handleChange = useCallback(
    (selectedValue: string) => {
      if (type === 'radio' && isString(value)) {
        setValue(selectedValue);
      }

      if (type === 'checkbox' && isArray(value)) {
        const nextValue = value.includes(selectedValue)
          ? value.filter((eachItem) => eachItem !== selectedValue)
          : [...value, selectedValue];

        setValue(nextValue);
      }
    },
    [value, setValue, type],
  );

  const validChildren = getValidChildren(children);

  const clones = validChildren.map((child) => {
    const onClick = (event: MouseEvent) => {
      handleChange(child.props.value);
      child.props.onClick?.(event);
    };

    const isChecked =
      type === 'radio'
        ? child.props.value === value
        : value.includes(child.props.value);

    return cloneElement(child, {
      type,
      onClick,
      isChecked,
    });
  });

  return {
    ...htmlProps,
    children: clones,
  };
}