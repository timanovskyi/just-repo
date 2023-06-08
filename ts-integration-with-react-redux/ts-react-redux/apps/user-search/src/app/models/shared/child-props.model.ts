import React from 'react';

export interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}
