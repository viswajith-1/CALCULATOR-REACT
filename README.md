# 🧮 React Calculator

A simple, clean, and functional calculator web application built with React. This project demonstrates basic React concepts, including state management with hooks (`useState`) and handling user events.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/03c69cb7-4ae5-4da3-b8cc-9330fd48e3eb" />

---

## ✨ Features

* **Basic Arithmetic:** Perform addition (+), subtraction (-), multiplication (×), and division (÷).
* **Clear Entry:** A "C" button to completely reset the calculator.
* **Delete/Backspace:** A "DEL" button to remove the last entered digit.
* **Equals:** An "=" button to compute and display the final result.
* **Responsive Design:** A clean interface that works well on both desktop and mobile devices.

---

## 🛠️ Technologies Used

* **React:** The core JavaScript library for building the user interface.
* **React Hooks (`useState`):** For managing the calculator's state (current input, previous input, operator).
* **CSS:** For styling the calculator grid, buttons, and display. (You can specify if you used **Tailwind CSS**, **Styled Components**, or plain CSS).

---

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

You need to have **Node.js** (version 16.x or higher) and **npm** installed on your computer.

* [Download Node.js](https://nodejs.org/)

### Installation & Setup

1.  **Clone the repository:**
    (Replace `your-username/react-calculator` with your actual repository URL)

    ```bash
    git clone [https://github.com/viswajith-1/CALCULATOR-REACT.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd CALCULATOR-REACT
    ```

3.  **Install the dependencies:**

    ```bash
    npm install
    ```

4.  **Run the application:**
    This will start the development server, usually on `http://localhost:3000`.

    ```bash
    npm start
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the calculator in action!

---

## 🚀 How It Works (Briefly)

The calculator's logic is managed in a single component (e.g., `App.js` or `Calculator.js`).

* **State:** `useState` is used to track three main things:
    * `currentOperand`: The number currently being typed.
    * `previousOperand`: The first number in an operation.
    * `operation`: The selected arithmetic operator (+, -, ×, ÷).
* **Event Handlers:**
    * **Number buttons:** Append the digit to the `currentOperand`.
    * **Operation buttons:** Set the `operation`, move the `currentOperand` to `previousOperand`, and clear the `currentOperand`.
    * **Equals button:** Performs the calculation using `previousOperand`, `currentOperand`, and `operation`. The result is stored in `currentOperand`, and the other states are reset.
    * **Clear button:** Resets all state values to their defaults.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
