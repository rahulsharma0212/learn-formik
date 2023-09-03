import { Formik } from 'formik';
import * as Yup from 'yup';
const FormUsingFormik = ({ heading }: { heading: string }) => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            onSubmit={(value) => alert(JSON.stringify(value, null, 2))}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .required('First name is required')
                    .max(15, 'Must be 15 characters or less'),
                lastName: Yup.string()
                    .required('Last name is required')
                    .max(20, 'Must be 20 characters or less'),
                email: Yup.string()
                    .email('Enter a valid email')
                    .required('Email is required'),
            })}
        >
            {(formik) => (
                <div className=" m-2 mx-auto w-2/5 border border-gray-400 p-1 px-6 ring-1">
                    <h1 className="text-center  text-xl underline">
                        {heading}
                    </h1>
                    <form onSubmit={formik.handleSubmit}>
                        <label
                            htmlFor="firstName"
                            className="font-medium capitalize"
                        >
                            first name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="mt-2 block w-full rounded-lg border border-gray-800 p-2.5 text-gray-900 focus:outline-green-400"
                            {...formik.getFieldProps('firstName')}
                        />
                        {formik.touched.firstName &&
                            formik.errors.firstName && (
                                <p className="text-red-500">
                                    {formik.errors.firstName}
                                </p>
                            )}
                        <label
                            htmlFor="lastName"
                            className="font-medium capitalize"
                        >
                            last name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="mt-2 block w-full rounded-lg border border-gray-800 p-2.5 text-gray-900 focus:outline-green-400"
                            {...formik.getFieldProps('lastName')}
                        />
                        {formik.touched.lastName && formik.errors.lastName && (
                            <p className="text-red-500">
                                {formik.errors.lastName}
                            </p>
                        )}
                        <label
                            htmlFor="email"
                            className="font-medium capitalize"
                        >
                            email
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="mt-2 block w-full rounded-lg border border-gray-800 p-2.5 text-gray-900 focus:outline-green-400"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500">
                                {formik.errors.email}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="mt-2 rounded-lg bg-blue-600 px-4 py-2 capitalize text-white disabled:cursor-not-allowed disabled:bg-gray-400"
                            disabled={!formik.isValid}
                        >
                            submit
                        </button>
                    </form>
                </div>
            )}
        </Formik>
    );
};

export default FormUsingFormik;
