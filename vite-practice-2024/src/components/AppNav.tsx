import React from "react";

import { AppBar } from "@mui/material";
import iWebAppBarProps from "./WebAppBarProps";

export interface WebAppBarState {
  viewMode: string;
}

export default class WebAppBar extends React.Component<iWebAppBarProps, WebAppBarState> {

  render(): React.ReactNode {
    return (
      <AppBar>

      </AppBar>
    );
  }
}
