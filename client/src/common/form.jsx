import { Component } from "react";
class FormComponent extends Component {
  state = { data: {}, errors: {} };
  validate = () => {
    const options = { abortEarly: false };
    const Joi = require("joi");
    const schema = Joi.object(this.schema);
    const { error } = schema.validate(this.state.data, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
      if (item.path[0] === "confirmPassword" && item.message != null)
        errors[item.path[0]] = "Confirm Password should match";
    }
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const Joi = require("joi");
    const schema = Joi.object({ [name]: this.schema[name] });
    const { error } = schema.validate(obj);
    if (name === "confirmPassword" && error != null)
      error.details[0].message = "Confirm Password should match";
    return error ? error.details[0].message : null;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
}

export default FormComponent;
