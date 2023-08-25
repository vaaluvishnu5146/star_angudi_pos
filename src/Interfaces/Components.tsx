interface Chips {
  color:
    | "primary"
    | "default"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  label: string;
  variant: string;
  size: "small" | "medium" | undefined;
}

export type ChipProps = Chips;
