import { useFormik } from 'formik';
import * as Yup from 'yup';
const FormWithSchema = () => {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstname: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Firstname is required'),
            lastname: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Lastname is required'),
            email: Yup.string()
                .email('please write a valid email')
                .required('email is required'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className=" m-2 mx-auto w-2/5 border border-gray-400 p-1 px-6 ring-1">
            <h1 className="text-center  text-xl underline">
                Form (validation with yup)
            </h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstname" className="font-medium capitalize">
                    first name
                </label>
                <input
                    type="text"
                    id="firstname"
                    className="mt-2 block w-full rounded-lg border border-gray-800 p-2.5 text-gray-900 focus:outline-green-400"
                    {...formik.getFieldProps('firstname')}
                />
                {formik.touched.firstname && formik.errors.firstname && (
                    <p className="text-red-500">{formik.errors.firstname}</p>
                )}
                <label htmlFor="lastname" className="font-medium capitalize">
                    last name
                </label>
                <input
                    type="text"
                    id="lastname"
                    className="mt-2 block w-full rounded-lg border border-gray-800 p-2.5 text-gray-900 focus:outline-green-400"
                    {...formik.getFieldProps('lastname')}
                />
                {formik.touched.lastname && formik.errors.lastname && (
                    <p className="text-red-500">{formik.errors.lastname}</p>
                )}
                <label htmlFor="email" className="font-medium capitalize">
                    email
                </label>
                <input
                    type="text"
                    id="email"
                    className="mt-2 block w-full rounded-lg border border-gray-800 p-2.5 text-gray-900 focus:outline-green-400"
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500">{formik.errors.email}</p>
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
    );
};

export default FormWithSchema;
