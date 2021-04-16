import { ThemeProvider } from "styled-components";
import palette from "./pallette";

const theme = {
  palette,
  typography: {
    fontscale(size) {
      return size + "rm";
    },
  },
};
const withThemeProvider = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [
  // withInfo({
  //   header: true,
  //   source: false,
  //   propTablesExclude: [GELWhiteThemeWrapper, GELThemeWrapper, Background, styled],
  // }),
  withThemeProvider,
];
