import React from "react";

import { Card } from "./style";


export default class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <Card>
        {this.props.children}
      </Card>
    );
  }
}






