import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import List from "./billingCycleList";
import Form from "./billingCycleForm";
import { create, update, remove, init } from "./billingCycleActions";

class billingCycle extends Component {
  componentWillMount() {
    this.props.init();
  }
  render() {
    return (
      <div>
        <ContentHeader title='Billing Cycle' small='Form' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='List' icon='bars' target='tabList' />
              <TabHeader label='Add' icon='plus' target='tabCreate' />
              <TabHeader label='Edit' icon='pencil' target='tabUpdate' />
              <TabHeader label='Delete' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <List />
              </TabContent>
              <TabContent id='tabCreate'>
                <Form onSubmit={this.props.create} submitLabel="Add" submitClass="primary" />
              </TabContent>
              <TabContent id='tabUpdate'>
                <Form onSubmit={this.props.update} submitLabel="Update" submitClass="info" />
              </TabContent>
              <TabContent id='tabDelete'>
                <Form onSubmit={this.props.remove} readOnly={true} submitLabel="Remove" submitClass="danger" />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
      );
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  init, create, update, remove
}, dispatch);
export default connect(null, mapDispatchToProps)(billingCycle);
