import { Field, Formik, Form } from "formik";
import css from "./BookForm.module.css";

const initialValues = {
  username: "",
  email: "",
  bookingDate: "",
  comment: "",
};

const BookForm = () => {
  const handleSubmit = (values, actions) => {
    console.log("Form data: ", values);
    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Book your campervan now</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange }) => (
          <Form className={css.bookingForm}>
            <Field
              className={css.formField}
              type="text"
              name="username"
              placeholder="Name*"
              value={values.username}
              onChange={handleChange}
            />
            <Field
              className={css.formField}
              type="email"
              name="email"
              placeholder="Email*"
              value={values.email}
              onChange={handleChange}
            />
            <Field
              className={css.formFieldDate}
              type="date"
              name="bookingDate*"
              placeholder="Booking date"
              value={values.bookingDate}
              onChange={handleChange}
            />
            <Field
              className={css.formField}
              as="textarea"
              name="comment"
              placeholder="Comment"
              value={values.comment}
              onChange={handleChange}
            />
            <button type="submit" className={css.sendBtn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
