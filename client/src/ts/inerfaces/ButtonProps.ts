export interface ButtonProps {
  href?: string;
  children?: React.ReactNode;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
}
