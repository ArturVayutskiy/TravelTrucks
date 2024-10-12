import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BookForm.module.css";

const initialValues = {
  username: "",
  email: "",
  bookingDate: "",
  comment: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  bookingDate: Yup.string().required("Booking date is required"),
  comment: Yup.string().required("Comment is required"),
});

const BookForm = () => {
  const handleSubmit = (values, actions) => {
    console.log("Form data: ", values);
    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.textUnderTitle}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <Form className={css.bookingForm}>
            <div className={css.formGroup}>
              <Field
                className={css.formField}
                type="text"
                name="username"
                placeholder="Name*"
                value={values.username}
                onChange={handleChange}
              />
              <ErrorMessage
                name="username"
                component="div"
                className={css.errorMessage}
              />
            </div>

            <div className={css.formGroup}>
              <Field
                className={css.formField}
                type="email"
                name="email"
                placeholder="Email*"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.errorMessage}
              />
            </div>

            <div className={css.formGroup}>
              <Field
                className={css.formFieldDate}
                type="date"
                name="bookingDate"
                placeholder="Booking date*"
                value={values.bookingDate}
                onChange={handleChange}
                onClick={(e) => e.target.showPicker()}
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.errorMessage}
              />
            </div>

            <div className={css.formGroup}>
              <Field
                className={css.formField}
                as="textarea"
                name="comment"
                placeholder="Comment"
                value={values.comment}
                onChange={handleChange}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={css.errorMessage}
              />
            </div>
            <div className={css.Btn}>
              <button type="submit" className={css.sendBtn}>
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
