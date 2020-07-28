import { useDropdownContext } from './useDropdown';

export function useDropdownState() {
  const { isOpen, onClose } = useDropdownContext();
  return { isOpen, onClose };
}