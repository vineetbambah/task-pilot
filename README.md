# Task Pilot

Task Pilot is a task management application that allows users to create, edit, and organize tasks based on their priority levels. The application features a responsive design with a desktop board for organizing tasks into "High," "Medium," and "Low" priority sections, and a mobile-friendly view for smaller screens.

---

## Features

- **Task Management**: Create, edit, and organize tasks.
- **Priority-Based Organization**: Tasks are categorized into "High," "Medium," and "Low" priority levels.
- **Responsive Design**: Desktop and mobile-friendly layouts.
- **Context API**: Shared state management for tasks using React Context.
- **Backend Integration**: RESTful API for managing tasks with a MongoDB database.

---

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **State Management**: React Context API
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Prisma ORM

---

## Setup Instructions

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js Official Website](https://nodejs.org/).
2. **MongoDB**: Install and set up MongoDB. Ensure it is running as a replica set (required by Prisma).
3. **Prisma CLI**: Install Prisma globally using the following command:
   ```bash
   npm install -g prisma
   git clone https://github.com/your-username/task-pilot.git
   cd task-pilot
   npm install
   ```
4. **Configure Environment Variables**
```bash
DATABASE_URL="mongodb://localhost:27017/task-pilot?replicaSet=rs0"
PORT=3001
```
- Ensure replicaSet=rs0 is included in the DATABASE_URL.
5. **Set Up Prisma**
```bash
npx prisma init
px prisma generate
npx prisma db push
```
6. **Start Servers**
   - For development server(in root):
   ```bash
    npm run dev
   ```
    - For Backend (in /backend):
      ```bash
      node app.js
      ```
