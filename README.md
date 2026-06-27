# Trending GitHub Repositories CLI

A command-line interface (CLI) tool built with Node.js that fetches and displays trending GitHub repositories using the GitHub REST API.

Repositories are filtered based on a selected time duration and sorted by star count.

---

## Repository

GitHub Repository:

https://github.com/skapiljain/GITHUB_CLI.git

---

## Features

- Fetch public repositories from GitHub
- Filter repositories by:
  - day
  - week
  - month
  - year
- Sort repositories by stars
- Display:
  - Repository Name
  - Description
  - Stars
  - Language
- Handle invalid input
- Handle API errors
- Custom limit support

---

## Requirements

Install Node.js

Check version:

```bash
node -v
```

---

## Installation

Clone project:

```bash
git clone https://github.com/skapiljain/GITHUB_CLI.git
```

Move into project:

```bash
cd GITHUB_CLI
```

Install dependencies:

```bash
npm install
```

---

## Usage

Run the CLI:

```bash
node index.js
```

Default values:

```txt
duration = week
limit = 10
```

---

## Command Line Arguments

### Duration

Choose repository time range.

Allowed values:

- day
- week
- month
- year

Syntax:

```bash
node index.js --duration <value>
```

Example:

```bash
node index.js --duration month
```

---

### Limit

Choose how many repositories to display.

Syntax:

```bash
node index.js --limit <number>
```

Example:

```bash
node index.js --limit 20
```

---

## Examples

Fetch repositories from last week:

```bash
node index.js
```

Fetch top 20 repositories from last month:

```bash
node index.js --duration month --limit 20
```

Fetch top 5 repositories from last year:

```bash
node index.js --duration year --limit 5
```

Fetch top 3 repositories from last day:

```bash
node index.js --duration day --limit 3
```

---

## Output Example

```txt
GITHUB_REPO: 2

1.
NAME: example-repo
Description: Example repository
Stars: 2400
Language: JavaScript

--------------------------------------------------

2.
NAME: sample-project
Description: No description
Stars: 1800
Language: TypeScript
```

---

## Error Handling

Invalid duration:

```bash
node index.js --duration hello
```

Output:

```txt
Invalid duration
```

Invalid limit:

```bash
node index.js --limit abc
```

Output:

```txt
Invalid limit
```

API Error:

```txt
API Error
```

Empty Results:

```txt
EMPTY FIELD
```

---

## Project Structure

```txt
GITHUB_CLI/
│
├── index.js
├── README.md
```

---

## Technologies Used

- JavaScript
- Node.js
- GitHub REST API

---

## Future Improvements

- Add async/await
- Improve CLI formatting
- Add pagination
- Add repository URLs
- Add language filters

---

## Author

Kapil Jain

Created for learning:

- CLI Development
- API Integration
- Error Handling
- JSON Parsing
- Working with REST APIs
