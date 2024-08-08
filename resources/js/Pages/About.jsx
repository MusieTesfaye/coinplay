import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function About({ user, coins }) {
    return (
        <AuthenticatedLayout user={user} coins={coins}>
            <Head title="About the Game" />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="py-12 bg-gray-50 dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-white">
                                <h2 className="text-3xl font-bold mb-4">About the Game</h2>
                                
                                <p className="text-lg mb-4">
                                    Welcome to our guessing game! The objective of the game is simple: guess the randomly generated number within a given range. If you guess the number correctly, you win the game!
                                </p>

                                <h3 className="text-xl font-semibold mt-4 mb-2">How to Play</h3>
                                <ol className="list-decimal list-inside mb-4">
                                    <li>Click on the "Play Game" button to start a new game.</li>
                                    <li>You will have 5 chances to guess the number.</li>
                                    <li>Enter your guess in the input field and submit your guess.</li>
                                    <li>The game will provide feedback on whether your guess is too high or too low.</li>
                                    <li>If you guess correctly or run out of chances, the game will end and you will be able to play again.</li>
                                </ol>

                                <h3 className="text-xl font-semibold mt-4 mb-2">Game Rules</h3>
                                <ul className="list-disc list-inside mb-4">
                                    <li>The game generates a random number between 1 and 100.</li>
                                    <li>You start with 5 chances to guess the number.</li>
                                    <li>If you guess correctly, you win. If you run out of chances, the game is over.</li>
                                    <li>Each game costs a certain amount of coins, which can be purchased through the "Buy Coins" page.</li>
                                </ul>

                                <p className="text-lg mt-4">
                                    We hope you enjoy playing the game. Good luck and have fun!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
