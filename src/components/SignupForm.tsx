import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';

const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
};

type InintialValue = typeof initialValues;
const SignupForm = () => {
    const firstInput = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        firstInput.current?.focus();
    }, []);
    const formik = useFormik({
        initialValues,
        onSubmit: (e) => {
            alert(JSON.stringify(e, null, 2));
        },
        validate: (values: InintialValue) => {
            const errors: any = {};
            if (!values.firstname) {
                errors.firstname = 'Required';
            } else if (values.firstname.length > 15) {
                errors.firstname = 'Must be 15 characters or less';
            }

            if (!values.lastname) {
                errors.lastname = 'Required';
            } else if (values.lastname.length > 20) {
                errors.lastname = 'Must be 20 characters or less';
            }

            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            return errors;
        },
    });
    console.log('🚀 ~ file: SignupForm.tsx:15 ~ SignupForm ~ formik:', formik);
    return (
        <form
            className="mx-auto w-2/5 border-blue-400 p-2"
            onSubmit={formik.handleSubmit}
        >
            <label htmlFor="firstname" className="font-medium text-gray-900">
                Your first name
            </label>
            <input
                ref={firstInput}
                type="text"
                id="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-3/5 rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-blue-500 focus:ring-blue-500 "
            />
            {formik.touched.firstname && formik.errors?.firstname && (
                <p className="mt-2 text-sm text-red-500">
                    {formik.errors.firstname}
                </p>
            )}
            <label htmlFor="lastname" className="font-medium text-gray-900">
                Your last name
            </label>
            <input
                type="text"
                id="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-3/5 rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-blue-500 focus:ring-blue-500 "
            />
            {formik.touched.lastname && formik.errors?.lastname && (
                <p className="mt-2 text-sm text-red-500">
                    {formik.errors.lastname}
                </p>
            )}
            <label htmlFor="email" className="font-medium text-gray-900">
                Your email
            </label>
            <input
                type="text"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-3/5 rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-blue-500 focus:ring-blue-500 "
            />
            {formik.touched.email && formik.errors?.email && (
                <p className="mt-2 text-sm text-red-500">
                    {formik.errors.email}
                </p>
            )}
            <button className="mt-4 rounded-lg bg-blue-500 p-2 text-xl font-medium text-white">
                submit
            </button>
        </form>
    );
};

export default SignupForm;
