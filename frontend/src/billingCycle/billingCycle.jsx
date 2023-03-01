import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";

class billingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Billing Cycle' small='Form' />
        <Content>
          <h1>Billing Cycles</h1>
        </Content>
      </div>
      );
    }
}

export default billingCycle;
