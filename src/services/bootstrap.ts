interface SetupPayload {
  onProduction: () => void;
  onDevelopment: () => void;
}

export function setup({ onProduction, onDevelopment }: SetupPayload): void {
  if (process.env.NODE_ENV !== "production") {
    onProduction();
  } else {
    onDevelopment();
  }
}
