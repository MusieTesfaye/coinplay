import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ user, coins }) {
    const [targetNumber, setTargetNumber] = useState(null);
    const [guess, setGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [chances, setChances] = useState(5);
    const [playCost] = useState(10);
    const [gameStarted, setGameStarted] = useState(false);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1; // Number between 1 and 100
    }

    const handlePlay = (e) => {
        e.preventDefault(); // Prevent form submission

        if (gameStarted || coins < playCost) return;

        // Initialize game state
        setTargetNumber(generateRandomNumber());
        setGameStarted(true);
        setFeedback('');
        setChances(5);
        setGameOver(false);
    };

    const handleGuess = (e) => {
        e.preventDefault(); // Prevent form submission

        if (!targetNumber || gameOver) return;

        const userGuess = parseInt(guess);
        if (isNaN(userGuess)) {
            setFeedback('Please enter a valid number.');
            return;
        }

        if (userGuess === targetNumber) {
            setFeedback('Congratulations! You guessed correctly.');
            setGameOver(true);

            // Deduct coins and update backend
            Inertia.post('/deduct-coins', { cost: playCost }, { preserveScroll: true });
        } else {
            setChances((prevChances) => {
                const newChances = prevChances - 1;
                if (newChances <= 0) {
                    setFeedback('Game over! You have no more chances.');
                    setGameOver(true);

                    // Deduct coins and update backend
                    Inertia.post('/deduct-coins', { cost: playCost }, { preserveScroll: true });
                } else {
                    setFeedback(userGuess < targetNumber ? 'Too low! Try again.' : 'Too high! Try again.');
                }
                return newChances;
            });
        }
    };

    const handleReset = (e) => {
        e.preventDefault(); // Prevent form submission
        setGameStarted(false);
        setTargetNumber(null);
        setGuess('');
        setFeedback('');
        setChances(5);
        setGameOver(false);
    };

    const handleBuyCoins = () => {
        Inertia.visit('/coins'); // Redirect to the coins purchase route
    };

    return (
        <AuthenticatedLayout user={user} coins={coins}>
            <Head title="Dashboard" />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="py-12 bg-gray-50 dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="flex justify-center mb-6">
                            <img
                                src="chess.gif"
                                alt="Welcome GIF"
                                className="w-32 h-auto"
                            />
                        </div>

                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-white">
                                <h3 className="text-lg font-medium">Welcome back, {user.name}!</h3>
                                <p className="mt-2 text-sm">
                                    You're logged in and ready to explore the features of the dashboard.
                                </p>
                                <p className="mt-2 text-sm">
                                    You have {coins} coins. Chances left: {chances}
                                </p>

                                {coins >= playCost ? (
                                    !gameStarted ? (
                                        <div className="mt-4">
                                            <button
                                                onClick={handlePlay}
                                                className="px-4 py-2 bg-green-500 text-white rounded"
                                            >
                                                Play Game
                                            </button>
                                            <p className="mt-2">{feedback}</p>
                                        </div>
                                    ) : (
                                        <div className="mt-4">
                                            <h4 className="text-md font-medium">Guess the Number (1-100)</h4>
                                            <form onSubmit={handleGuess} className="mt-2">
                                                <input
                                                    type="number"
                                                    value={guess}
                                                    onChange={(e) => setGuess(e.target.value)}
                                                    className="border p-2 w-full text-black"
                                                    disabled={gameOver}
                                                />
                                                <button
                                                    type="submit"
                                                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                                                    disabled={gameOver}
                                                >
                                                    Guess
                                                </button>
                                            </form>
                                            <button
                                                onClick={handleReset}
                                                className="mt-2 ml-2 px-4 py-2 bg-gray-500 text-white rounded"
                                                disabled={!gameOver}
                                            >
                                                {gameOver ? 'Play Again' : 'Reset Game'}
                                            </button>
                                            <p className="mt-2">{feedback}</p>
                                        </div>
                                    )
                                ) : (
                                    <div className="mt-4">
                                        <p className="mt-2 text-red-500">You don't have enough coins to play.</p>
                                        <button
                                            onClick={handleBuyCoins}
                                            className="px-4 py-2 bg-yellow-500 text-white rounded"
                                        >
                                            Buy Coins
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
