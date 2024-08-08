import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Log in" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black">
                    <img
                        src="chess.gif" // Replace with your GIF URL
                        alt="Game GIF"
                        className="w-24 h-auto mb-6" // Adjusted size and margin
                    />
                    <form onSubmit={submit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200 dark:border-gray-700">
                        {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-sm focus:border-[#FF2D20] dark:focus:border-[#FF2D20] focus:ring-0"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-sm focus:border-[#FF2D20] dark:focus:border-[#FF2D20] focus:ring-0"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ms-2 text-sm text-gray-600 dark:text-gray-300">Remember me</span>
                            </label>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF2D20]"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
