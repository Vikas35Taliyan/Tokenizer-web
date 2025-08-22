🧩 Custom Tokenizer App

A simple custom tokenizer built with Node.js and Express, designed to help understand how text is split into tokens and processed.
This project is a lightweight demo for learning how tokenization works in natural language processing (NLP) systems.

Live: https://tokenizer-web.netlify.app/

🚀 Features

Tokenize text into individual tokens

Encode & decode using a custom vocabulary (vocab.json)

Minimal Express server setup

Simple UI with index.html for testing

📂 Project Structure

```
.
├── index.html       # UI for testing tokenizer
├── app.js / server.js  # Express server entry point
├── vocab.json       # Vocabulary file (used for encoding/decoding)
├── tokenizer.js     # Core tokenizer logic
└── README.md        # Documentation
```

⚙️ Installation & Setup

Clone the repository:

```
git clone -copy from top-
cd custom-tokenizer
```
Install dependencies:
```
npm install
```

Run the app:
```
node app.js or click on go live to see preview
```

🖥️ Usage

Open index.html in your browser

Enter text into the input field

See how it’s tokenized, encoded, and decoded

📘 Example

If your vocab.json contains:

```
{
  "hello": 1,
  "world": 2
}

```

Input:
```
hello world
```

🛠️ Tech Stack

Node.js

Express.js

HTML + JavaScript (frontend)

