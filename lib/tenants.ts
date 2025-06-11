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
      primary: "gray-400",
      text: "white",
      secoundary: "gray-200",
      background: "gray-800",
    },
  },
  dacti: {
    name: "Dacti",
    description: "Dacti tenant",
    logo: "/file.svg",
    colors: {
      primary: "gray-400",
      text: "white",
      secoundary: "gray-200",
      background: "gray-900",
    },
  },
};
