import SignupForm from '@/components/SignupForm';
import FormWithSchema from '@/components/FormWithSchema';

function App() {
    return (
        <div className="mx-auto min-h-screen w-screen bg-gray-100">
            <SignupForm />
            <FormWithSchema />
        </div>
    );
}

export default App;
