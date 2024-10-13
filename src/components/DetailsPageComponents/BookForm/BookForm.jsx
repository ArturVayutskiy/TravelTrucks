import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DataPicker.css";
import css from "./BookForm.module.css";

const initialValues = {
  username: "",
  email: "",
  bookingDate: null,
  comment: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  bookingDate: Yup.date().nullable().required("Booking date is required"),
});

const BookForm = () => {
  const handleSubmit = (actions) => {
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
        {({ values, setFieldValue, handleChange, isSubmitting }) => (
          <Form className={css.bookingForm}>
            <div className={css.formGroup}>
              <Field
                className={css.formField}
                type="text"
                name="username"
                placeholder="Name*"
                value={values.username}
                onChange={handleChange}
                aria-label="Enter your name"
                required
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
                aria-label="Enter your email"
                required
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.errorMessage}
              />
            </div>

            <div className={css.formGroup}>
              <DatePicker
                selected={values.bookingDate}
                onChange={(date) => setFieldValue("bookingDate", date)}
                dateFormat="MM/dd/yyyy"
                className={css.formFieldDate}
                calendarClassName="data-picker"
                placeholderText="Booking date*"
                aria-label="Select booking date"
                maxDate={new Date()}
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.errorMessage}
              />
            </div>

            <Field
              className={css.formField}
              as="textarea"
              name="comment"
              placeholder="Comment"
              value={values.comment}
              onChange={handleChange}
              aria-label="Leave a comment"
            />

            <div className={css.Btn}>
              <button
                type="submit"
                className={css.sendBtn}
                disabled={isSubmitting}
              >
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
