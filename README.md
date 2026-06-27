# 🚀 GitHub Trending Repositories CLI

A command-line interface (CLI) tool to fetch and display **trending GitHub repositories** using the **GitHub REST API**.

Discover repositories created within a selected time range and sorted by popularity directly from your terminal.

---

## ✨ Features

* ✅ Fetch trending public repositories from GitHub
* ✅ Filter repositories by duration:

  * day
  * week
  * month
  * year
* ✅ Sort repositories by star count
* ✅ Display:

  * Repository Name
  * Description
  * Stars
  * Language
* ✅ Command-line arguments support
* ✅ Error handling for invalid input and API failures
* ✅ Clean terminal output

---

## 📋 Prerequisites

* **Node.js** (v18 or later recommended)
* **npm** (optional)

Check version:

```bash
node -v
```

---

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/skapiljain/GITHUB_CLI.git
```

### 2. Move Into Project

```bash
cd GITHUB_CLI
```

### 3. Run Project

```bash
node index.js
```

---

## 📖 Usage

### Command Format

```bash
node index.js --duration <time> --limit <number>
```

---

## Available Duration Options

| Duration | Description                              |
| -------- | ---------------------------------------- |
| `day`    | Trending repositories from last 24 hours |
| `week`   | Trending repositories from last 7 days   |
| `month`  | Trending repositories from last 30 days  |
| `year`   | Trending repositories from last 365 days |

---

## Examples

### Default (Week + 10 Repositories)

```bash
node index.js
```

---

### Fetch 20 Trending Repositories (Month)

```bash
node index.js --duration month --limit 20
```

---

### Fetch Top 5 Repositories (Year)

```bash
node index.js --duration year --limit 5
```

---

### Fetch Repositories From Last Day

```bash
node index.js --duration day --limit 3
```

---

## 🖥 Sample Output

```txt
GITHUB_REPO: 2

1.
NAME: react
Description: The library for web and native user interfaces
Stars: 241230
Language: JavaScript

-------------------------------------------------------

2.
NAME: next.js
Description: The React Framework for Production
Stars: 131000
Language: TypeScript
```

---

## 📁 Project Structure

```txt
GITHUB_CLI/
│
├── index.js
└── README.md
```

---

## 🔧 Code Overview

### `getduration()`

* Reads CLI arguments
* Extracts:

  * `--duration`
  * `--limit`
* Applies default values

---

### `getConvertDuration()`

* Converts:

  * day → last 1 day
  * week → last 7 days
  * month → last 30 days
  * year → last 365 days

* Generates GitHub-compatible date format

---

### `fetchdata()`

* Builds GitHub API URL
* Sends request using fetch
* Parses JSON response
* Formats repository output

---

## ⚠️ Error Handling

### Invalid Duration

```bash
node index.js --duration hello
```

Output:

```txt
Invalid duration
```

---

### Invalid Limit

```bash
node index.js --limit abc
```

Output:

```txt
Invalid limit
```

---

### API Failure

```txt
API Error
```

---

### Empty Result

```txt
EMPTY FIELD
```

---

## 📌 API Reference

GitHub Search API:

```txt
https://api.github.com/search/repositories
```

Search Example:

```txt
?q=created:>DATE&sort=stars&order=desc
```

---

## 📚 Learning Goals

This project helped practice:

* ✅ CLI Development
* ✅ GitHub REST API
* ✅ Fetch API
* ✅ Error Handling
* ✅ JSON Parsing
* ✅ JavaScript Functions
* ✅ Terminal Output Formatting

---

## 📝 Future Improvements

* [ ] Add async/await
* [ ] Add repository URLs
* [ ] Add colors in terminal
* [ ] Add pagination
* [ ] Add language filter
* [ ] Export output to file

---

## 👨‍💻 Author

**Kapil Jain**

Built for learning backend development, APIs, and CLI application design.

---

## 🤝 Contributing

Feel free to fork the project and improve it.

---

## 📄 License

Free to use for learning and educational purposes.

---

⭐ If you like the project, consider giving it a star.
project url:
https://roadmap.sh/projects/github-trending-cli
