export const styles = [
  {
    name: "default",
    label: "Default",
  },
  {
    name: "new-york",
    label: "New York",
  },
  {
    name: "ms",
    label: "MS",
  },
] as const

export type Style = (typeof styles)[number]
