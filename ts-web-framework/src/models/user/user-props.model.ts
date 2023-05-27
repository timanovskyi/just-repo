export interface UserProps {
  name: string;
  age: number;
  id: number;
}

export type OptionalUserProps = Partial<UserProps>