import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaCoins, FaMoneyBillWave, FaGift } from 'react-icons/fa'; // Importing icons

export default function CoinPackages({ user, coins }) {
    const packages = [
        { coins: 200, price: 100, icon: <FaCoins size={50} className="text-yellow-500" /> },
        { coins: 350, price: 200, icon: <FaMoneyBillWave size={50} className="text-green-500" /> },
        { coins: 500, price: 400, icon: <FaGift size={50} className="text-purple-500" /> },
    ];

    const handlePurchase = (coins, price) => {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = '/chapa/payment';
        
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = '_token';
        csrfInput.value = csrfToken;
        form.appendChild(csrfInput);
        
        const coinsInput = document.createElement('input');
        coinsInput.type = 'hidden';
        coinsInput.name = 'coins';
        coinsInput.value = coins;
        form.appendChild(coinsInput);
    
        const amountInput = document.createElement('input');
        amountInput.type = 'hidden';
        amountInput.name = 'amount';
        amountInput.value = price;
        form.appendChild(amountInput);
    
        const nameInput = document.createElement('input');
        nameInput.type = 'hidden';
        nameInput.name = 'name';
        nameInput.value = user.name;
        form.appendChild(nameInput);
    
        const emailInput = document.createElement('input');
        emailInput.type = 'hidden';
        emailInput.name = 'email';
        emailInput.value = user.email;
        form.appendChild(emailInput);
    
        document.body.appendChild(form);
        form.submit();
    };
    

    return (
        <AuthenticatedLayout user={user} coins={coins}>
            <Head title="Buy Coins" />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="py-12 bg-gray-50 dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="flex justify-center mb-6">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Buy Coins Packages
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {packages.map((pkg, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6"
                                >
                                    <div className="flex items-center justify-center mb-4">
                                        {pkg.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
                                        {pkg.coins} Coins
                                    </h3>
                                    <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
                                        {pkg.price} Birr
                                    </p>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handlePurchase(pkg.coins, pkg.price)}
                                            className="px-4 py-2 bg-blue-500 text-white rounded"
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
