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
      <>
        <p>
          Give us a call on <a href="tel:+442074594381">+44 (0) 207 459 4381</a>{' '}
          to have a chat
          <br />
          or drop us a line in the form below &mdash; we'll get back to you
          swiftly.
        </p>
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
          <div className={styles.emailWrapper}>
            <label>
              Email
              <input type="email" {...bindInput('email')} required />
            </label>
            <div className={styles.emailTips}>
              Only for prompt response to your request.
              <br />
              No spam, we promise.
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <label>
              About your project
              <textarea
                rows={4}
                className={styles.content}
                {...bindInput('content')}
                required
              />
            </label>
            <div className={styles.tips}>
              Please touch on these things:
              <ul>
                <li>Your product</li>
                <li>Your timeline</li>
                <li>Your location</li>
                <li>Where you heard about us</li>
              </ul>
            </div>
          </div>
          <div className={styles.ctaWrapper}>
            <button
              type="submit"
              className={styles.cta}
              disabled={isSubmitting}
            >
              {!isSubmitting ? 'Send' : 'Sending...'}
            </button>
            <div className={styles.submitTips}>get the ball rolling!</div>
          </div>
        </form>
      </>
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
