# StickyNotes

StickyNotes is a simple and intuitive note-taking application built using React and Vite. Users can create, customize, and organize sticky notes on their screen. Each note can be dragged, resized, and styled with different color themes. All note data is stored locally in the browser, ensuring persistence across sessions.

## Features

- **Create Notes**: Click the "New Note" button to spawn a new sticky note with a random color theme.
- **Drag and Resize**: Each note can be dragged around the screen and resized by dragging the bottom-right corner.
- **Customize Appearance**: Double-click on a note to open a menu that allows changing the color theme or deleting the note.
- **Persistent Storage**: All notes and their positions are saved in the local storage, allowing them to persist even after the browser is closed or refreshed.

## Screenshots

![StickyNotes UI](screenshots\image.png)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- **Node.js** (version 14 or higher recommended)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Naman-0206/stickynotes.git
cd stickynotes
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to see the application in action.

## Usage

### 1. Creating a Note:

- Click on the "New Note" button located at the top-right corner of the screen to create a new note with a random color theme.

### 2. Dragging and Resizing:

- Drag a note by clicking and holding anywhere on the note.
  Resize a note by clicking and dragging the bottom-right corner.

### 3. Customizing and Deleting Notes:

- Double-click on a note to open the customization menu.
  Use the menu to change the color theme or delete the note.

## Local Storage

All note data (position, size, color, and content) is stored in the browser's local storage. This ensures that your notes remain available even after refreshing the page or closing the browser.
