import React, { Component } from 'react'
import {
    Checkbox,
    DatePicker,
    TimePicker,
    RadioButtonGroup,
    SelectField,
    Slider,
    TextField,
    Toggle,
  } from 'redux-form-material-ui';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import './index.scss';


const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const required = value => (value == null ? 'Required' : undefined);

export default class Iban extends Component {
  render() {
    return (
        <form >
        <div>

        </div>
        </form>
    )
  }
}
