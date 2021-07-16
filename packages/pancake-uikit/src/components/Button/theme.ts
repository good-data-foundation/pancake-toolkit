import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "tertiary",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primaryMenu",
    boxShadow: "none",
  },
  [variants.TRANS]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primaryMenu",
    color: "primaryMenu",
    boxShadow: "none",
  },
  [variants.BOXER]: {
    backgroundColor: "primaryMenu",
    border: "2px solid",
    borderColor: "primaryMenu",
    boxShadow: "none",
    color: "white",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.WALLET]: {
    backgroundColor: "white",
    color: "primary",
  },
};
