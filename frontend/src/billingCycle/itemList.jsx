import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "../common/layout/grid";
import { Field, arrayInsert, arrayRemove } from "redux-form";
import Input from "../common/form/input";
import If from "../common/operator/if";

class ItemList extends Component {
  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert('billingCycleForm', this.props.field, index, item);
    }
  }
  remove(index) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove('billingCycleForm', this.props.field, index);
    }
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map((item, index) => (
      <tr key={index}>
          <td><Field name={`${this.props.field}[${index}].name`} component={Input} placeholder="Describe name" /></td>
          <td><Field name={`${this.props.field}[${index}].value`} component={Input} placeholder="Describe value" /></td>
          <If test={this.props.showStatus}>
            <td><Field name={`${this.props.field}[${index}].status`} component={Input} placeholder="Describe status" /></td>
          </If>
          <td className="table-actions">
            <button type="button" className="btn btn-success"
                onClick={() => this.add(index + 1)}>
              <i className="fa fa-plus"></i>
            </button>
            <button type="button" className="btn btn-warning"
                onClick={() => this.add(index + 1, item)}>
              <i className="fa fa-clone"></i>
            </button>
            <button type="button" className="btn btn-danger"
                onClick={() => this.remove(index)}>
              <i className="fa fa-trash-o"></i>
            </button>
          </td>
      </tr>
    ));
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.legend}</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <If test={this.props.showStatus}>
                  <th>Status</th>
                </If>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch);
export default connect(null, mapDispatchToProps)(ItemList);
