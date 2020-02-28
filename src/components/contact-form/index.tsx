import * as React from 'react';

import { connectForm, ValidationRuleFactory, IFormProps } from 'form-container';
import { toast } from 'react-toastify';
import { required, email } from './validators';

import * as styles from './contact-form.module.css';
import { sendForm } from './contact-form-service';

interface IState {
  isSubmitting?: boolean;
}

class Form extends React.Component<IFormProps, IState> {
  state: IState = {
    isSubmitting: undefined
  };

  handleSubmit = async (e: React.SyntheticEvent<any>) => {
    e.preventDefault();

    this.setState({
      isSubmitting: true
    });

    if (!this.props.form.isValid) {
      console.error('Please fix all errors on the form before submission');
      return;
    }

    const { model } = this.props.form;

    try {
      await sendForm(model);
      this.resetForm();
      toast.success(
        `Thank you for the message, ${model.name}!\n
        We will be in touch shortly.`,
        { position: toast.POSITION.TOP_CENTER }
      );

      this.setState({
        isSubmitting: false
      });
    } catch (e) {
      toast.error(
        `We are sorry, but something went wrong during your message submission.
        Please try again.`,
        { position: toast.POSITION.TOP_CENTER }
      );

      this.setState({
        isSubmitting: false
      });
    }
  };

  dirtyInputError = (prop: string) =>
    this.props.form.touched[prop] && this.props.form.validationErrors[prop];

  resetForm = () => {
    const { formMethods } = this.props;
    formMethods.setModel({});
  };

  render() {
    const {
      form,
      formMethods: { bindInput }
    } = this.props;

    const { isSubmitting } = this.state;

    return (
      <form
        name="contact-form"
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        <div>
          <label>
            Name
            <input type="text" {...bindInput('name')} required />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type="email" {...bindInput('email')} required />
          </label>
        </div>
        <div>
          <label>
            About your project
            <textarea
              rows={4}
              className={styles.content}
              {...bindInput('content')}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit" className={styles.cta} disabled={isSubmitting}>
            {!isSubmitting ? 'Send' : 'Sending...'}
          </button>
        </div>
      </form>
    );
  }
}

const validators = [
  required('email'),
  required('name'),
  required('content'),
  email('email')
];

export const ContactForm = connectForm(validators)(Form);
