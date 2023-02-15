import { styles } from "../ThemeColors.styles";

export const container = {
  display: "flex",
  flexWrap: "wrap",
};

export const card = {
  position: "relative",
  display: "block",
  width: styles.cardWidth / 2,
  height: "100%",
  background: "#eee",
  border: "5px solid #eee",
  overflow: "hidden",
  margin: 10,
  cursor: "pointer",
};

export const details = {
  width: styles.cardWidth / 2,
  fontSize: 10,
  textAlign: "right",
  margin: 0,
  paddingTop: 5,
  paddingBottom: 5,
};

export const img = {
  display: "block",
  width: styles.cardWidth / 2,
};
