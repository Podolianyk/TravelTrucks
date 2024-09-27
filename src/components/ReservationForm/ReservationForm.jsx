import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { forwardRef } from "react";
import toast from "react-hot-toast";

import Button from "../Button/Button";
import css from "./ReservationForm.module.css";
import { useState } from "react";

const CustomDateInput = forwardRef(
  ({ value, onClick, placeholder, className }, ref) => (
    <input
      className={className}
      onClick={onClick}
      ref={ref}
      value={value}
      placeholder={placeholder}
      readOnly
      style={{ display: "block" }}
    />
  )
);

const ReservationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Maximum 30 characters!")
    .required("Required!"),
  email: Yup.string().email("Must be a valid email").required("Required!"),
  date: Yup.date()
    .min(new Date(), "The date cannot be in the past!")
    .required("Required!"),
  comment: Yup.string().min(3, "Too Short!").max(50, "Maximum 50 characters!"),
});

const ReservationForm = ({ onReservation }) => {
  const handleSubmit = (values, actions) => {
    onReservation(values);
    // toast.success(`Successful registration.`);
    actions.resetForm();
  };

  return (
    <div className={css.form_container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          date: null,
          comment: "",
        }}
        validationSchema={ReservationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={css.form}>
            <div className={css.input_container}>
              <div className={css.formGroup}>
                <Field
                  className={css.formInput}
                  type="text"
                  name="name"
                  placeholder="Name*"
                />
                <ErrorMessage
                  className={css.error}
                  name="name"
                  component="span"
                />
              </div>
              <div className={css.formGroup}>
                <Field
                  className={css.formInput}
                  type="email"
                  name="email"
                  placeholder="Email*"
                />
                <ErrorMessage
                  className={css.error}
                  name="email"
                  component="span"
                />
              </div>
              <div className={css.formGroup}>
                <DatePicker
                  selected={values.date}
                  onChange={(date) => setFieldValue("date", date)}
                  placeholderText="Booking date*"
                  customInput={
                    <CustomDateInput
                      className={`${css.formInput} custom-input`}
                      //   name="date"
                      placeholder="Booking date*"
                    />
                  }
                />
                <ErrorMessage
                  className={css.error}
                  name="date"
                  component="span"
                />
              </div>
              <div className={css.formGroup}>
                <Field
                  className={`${css.formInput} ${css.formTextarea}`}
                  as="textarea"
                  name="comment"
                  placeholder="Comment"
                />
                <ErrorMessage
                  className={css.error}
                  name="comment"
                  component="span"
                />
              </div>
            </div>
            <div className={css.container_btn}>
              <Button
                variant="sendButton"
                onClick={() => console.log("Submitted")}
                type="submit"
              >
                Send
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReservationForm;
