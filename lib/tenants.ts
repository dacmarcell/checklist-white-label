export type Tenant = {
  name: string;
  description: string;
  logo: string;
  colors: string;
};

export const tenants = {
  default: {
    name: "Default",
    description: "Default tenant",
    logo: "/next.svg",
    colors: {
      primary: {
        light: "gray-400",
        dark: "gray-400",
      },
      secoundary: {
        light: "gray-400",
        dark: "gray-400",
      },
      background: {
        light: "white",
        dark: "gray-900",
      },
    },
  },
  dacti: {
    name: "Dacti",
    description: "Dacti tenant",
    logo: "/file.svg",
    colors: {
      primary: {
        light: "gray-400",
        dark: "gray-400",
      },
      secoundary: {
        light: "gray-400",
        dark: "gray-400",
      },
      background: {
        light: "white",
        dark: "gray-900",
      },
    },
  },
};
