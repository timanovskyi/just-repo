import { ChildProps } from '../models';
import React from 'react';

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Hi, you have {color} color
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      Hi, you have {color} color
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
