<p align="center">
  <img src="https://i.postimg.cc/4yTgpV25/Chat-GPT-Image-Aug-13-2025-08-52-31-PM.png" alt="Knights Travails Banner" width="900" />
</p>

<div align="center">

## Knights Travails (JavaScript)

A minimal implementation of the classic shortest‑path chess problem using BFS
(Breadth-first search), built for The Odin Project to practice graph algorithms.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Algorithm](https://img.shields.io/badge/Algorithm-BFS-1f6feb)](https://en.wikipedia.org/wiki/Breadth-first_search)
[![Status](https://img.shields.io/badge/Status-Learning%20Project-00b894)](#)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Requirements](#requirements)
- [Quick start](#quick-start)
- [Usage](#usage)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [How it works](#how-it-works)
- [Examples](#examples)

---

## About

This project is part of The Odin Project JavaScript curriculum:
[The Odin Project — Project: Knights Travails](https://www.theodinproject.com/lessons/javascript-knights-travails).
It focuses on representing the chessboard as an implicit graph and using
Breadth‑First Search (BFS) to compute the shortest sequence of knight moves
between two squares.

## Features

- **Shortest path with BFS** on an 8×8 board
- **Implicit graph**: nodes are squares `[x, y]`, edges are legal knight moves
- **Visited tracking** to avoid revisits/loops
- **Human‑readable output** in the console and an array of coordinates as return
  value

## Requirements

- Modern browser (for `knight.html`) or
- Node.js 18+ (to run `knight.js` directly)

## Quick start

Browser:

```bash
# Open the HTML file in your browser and check DevTools console
xdg-open knight.html  # Linux
open knight.html       # macOS
start knight.html      # Windows
```

Node:

```bash
node knight.js
```

## Usage

Call `knightMoves(start, end)` where each position is `[x, y]` with
`0 <= x, y <= 7`.

```js
// Finds a shortest path from [0, 0] to [3, 3]
knightMoves([0, 0], [3, 3]);
// => logs the move count and path to the console
// => returns an array like [[0,0],[1,2],[3,3]]
```

## Tech stack

- **Language:** Vanilla JavaScript (ES modules not required)
- **Runtime:** Browser or Node.js

## Project structure

```
Knights-Travails/
├─ knight.html   # Loads the script; open and check the console
└─ knight.js     # BFS implementation and example invocation
```

## How it works

- The board is modeled as an **implicit graph**. Each square `[x, y]` is a node;
  legal knight moves define edges.
- An **adjacency list** is generated once for all 64 squares.
- **BFS** explores positions level by level, enqueuing whole paths. The first
  time the destination is dequeued, that path is guaranteed to be shortest.
- The function prints: `You made it in N moves! Here's your path:` followed by
  each coordinate. It also returns the path as an array of `[x, y]` pairs.

## Examples

```js
knightMoves([0, 0], [1, 2]);
// -> [[0,0],[1,2]]

// Multiple optimal paths may exist; any shortest one is valid
knightMoves([0, 0], [3, 3]);
// -> [[0,0],[2,1],[3,3]]  or  [[0,0],[1,2],[3,3]]

knightMoves([3, 3], [0, 0]);
// -> [[3,3],[2,1],[0,0]]  or  [[3,3],[1,2],[0,0]]

knightMoves([0, 0], [7, 7]);
// -> one valid shortest path example:
//    [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]
```

Notes:

- Coordinates use zero‑based indices; squares are within `[0..7] × [0..7]`.
- The BFS here tracks visited squares to avoid revisiting nodes via longer
  routes.
