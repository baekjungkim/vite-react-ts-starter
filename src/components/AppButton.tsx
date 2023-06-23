import { MouseEvent } from 'react';

interface AppButtonProps {
  label: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}

export default function AppButton({ label, onClick }: AppButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}
