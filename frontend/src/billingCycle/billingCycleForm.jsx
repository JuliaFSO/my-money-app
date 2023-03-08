import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import LabelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component={LabelAndInput}
              label="Item name" cols="12 4" placeholder="Describe item name" />
          <Field name="month" component={LabelAndInput} type="number"
              label="Month" cols="12 4" placeholder="MM" />
          <Field name="year" component={LabelAndInput} type="number"
          label="Year" cols="12 4" placeholder="YYYY" />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm);
