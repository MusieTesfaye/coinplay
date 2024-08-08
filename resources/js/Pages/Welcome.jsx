import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                {/* Fixed header */}
                <header className="fixed top-0 left-0 w-full bg-gray-50 dark:bg-black z-10 shadow-md">
                    <div className="flex justify-between items-center w-full max-w-2xl px-6 py-4 lg:max-w-7xl mx-auto">
                        <div className="flex lg:justify-center lg:col-start-2">
                            <svg
                                className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]"
                                viewBox="0 0 62 65"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Your SVG content here */}
                            </svg>
                        </div>
                        <nav className="flex space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Main content */}
                <main className="pt-20 min-h-screen flex flex-col items-center justify-center space-y-6"> {/* Add pt-20 to avoid overlap with fixed header */}
                    <img
                        src="chess.gif" // Replace with your GIF URL
                        alt="Game GIF"
                        className="w-24 h-auto rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl font-bold text-black dark:text-white">
                        Ready to play games
                    </h1>
                </main>
            </div>
        </>
    );
}
