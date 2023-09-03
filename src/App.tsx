import SignupForm from '@/components/SignupForm';
import FormWithSchema from '@/components/FormWithSchema';
import FormUsingFormik from './components/FormUsingFormik';

function App() {
    return (
        <div className="mx-auto min-h-screen w-screen bg-gray-100">
            <SignupForm />
            <FormWithSchema />
            <FormUsingFormik heading="Building form using inbuild Formik component" />
        </div>
    );
}

export default App;
