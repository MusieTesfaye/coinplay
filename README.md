# Coin Play

**Coin Play** is a simple SaaS platform built with Laravel, Inertia.js, and React. The platform allows users to play a fun and engaging number-guessing game by paying with coins. Users can purchase coins through a secure payment gateway and use them to enjoy the game.

## Features

- **Number Guessing Game**: Players guess a number within a specified range to win rewards.
- **Secure Payments**: Coins can be purchased using a reliable payment gateway integration.
- **User-Friendly Interface**: Built with React and Inertia.js for a seamless and interactive experience.
- **Coin Management**: Track and manage coins directly in your account.
- **SaaS Ready**: Subscription-based monetization model for ongoing revenue.

## Tech Stack

- **Backend**: Laravel
- **Frontend**: React with Inertia.js
- **Styling**: Tailwind CSS
- **Database**: MySQL
- **Payment Gateway**: Integrated with [Chapa](https://chapa.co/)
- **Real-time Features**: WebSockets (if applicable for game updates)

## Installation

Follow the steps below to set up the project locally.

### Prerequisites

- PHP 8.x
- Composer
- Node.js & npm
- MySQL
- Git

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/coin-play.git
   cd coin-play

2. Install PHP dependencies:
Use Composer to install the backend dependencies:

   ```bash
    composer install

3. Install JavaScript dependencies:
Use npm to install the frontend dependencies:

    ```bash
    npm install
    
4. Compile frontend assets:
Build the frontend assets for development:

    ```bash
    npm run dev

5. Configure environment variables:
Copy the example .env file to create your environment configuration:

    ```bash
    cp .env.example .env
Open the .env file and update the following values:

Database credentials (e.g., DB_DATABASE, DB_USERNAME, DB_PASSWORD)

Payment gateway credentials (e.g., CHAPA_PUBLIC_KEY, CHAPA_SECRET_KEY)

Generate application key:
Generate a unique application key for the Laravel application:

    php artisan key:generate
Run database migrations and seeders:
Migrate the database schema:

    php artisan migrate
Start the development server:
Launch the Laravel application locally:

    php artisan serve
    
Access the application:
Open your browser and navigate to http://localhost:8000.

# Usage

### **Sign Up / Login**
Create an account to access the platform and start using its features.

### **Purchase Coins**
Use the integrated payment gateway to add coins to your account, enabling you to participate in the game.

### **Play the Game**
Enter the number-guessing game, choose a number within the specified range, and start making guesses!

### **Win Rewards**
Earn exciting rewards based on your correct guesses and enjoy the thrill of the game.


# Project Structure

### `app/`
This directory contains the backend logic and business rules of the application, including controllers, models, middleware, and other core components.

### `resources/js/`
This directory holds all React components and frontend logic, managing the user interface and interaction layers.

### `routes/`
This directory defines the web and API routes for the application, mapping URLs to specific controllers and actions.

### `database/`
This directory contains migrations and seeders used to define and populate the database schema and initial data.

### `public/`
This directory includes publicly accessible assets like images, JavaScript, CSS, and the entry point for the Laravel application (`index.php`).

### `config/`
This directory contains Laravel configuration files that manage various settings for the application, such as database connections, mail, caching, and more.

Contributing
Contributions are welcome! To contribute:

Fork the repository.

Create a feature branch:

    git checkout -b feature-name
Commit your changes:

    git commit -m "Add feature name"
Push to the branch:

    git push origin feature-name
Create a pull request.


Contact
For questions or feedback, feel free to reach out:

GitHub: @MusieTesfaye
Happy Gaming! 🎮






