# Dynamic Table Project

A dynamic table built with Angular that supports pagination, searching, and sorting. This project consumes data from an API and allows users to search for specific entries and sort the table based on user names.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [APIs](#apis)
- [Contact](#Contact)

---

## Features

- **Dynamic Pagination**: Displays a set number of records per page, with controls for navigating between pages.
- **Search Functionality**: Search records by first name or last name (or full name), with results updated dynamically.
- **Sorting**: Sort table data in alphabetical order (ascending and descending) based on user names.
- **Responsive UI**: Designed to fit different screen sizes and supports basic styling of the table.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Roshan-86/Dynamic-table---Angular
    cd dynamic-table
    ```

2. **Install dependencies**:

    Make sure you have [Node.js](https://nodejs.org/en/) installed.

    ```bash
    npm install
    ```

3. **Run the Angular development server**:

    ```bash
    ng serve
    ```

4. **Navigate to**:

    Open your browser and go to `http://localhost:4200/`.

## Usage

Once the project is running, you will see a dynamic table populated with user data.

### Pagination

- The table displays a fixed number of records per page (default: 10).
- Use the **Previous** and **Next** buttons below the table to navigate through pages.

### Searching

- Use the search input box to filter the table by user name (first or last name).
- The search results will be paginated and dynamically update.

### Sorting

- Use the radio buttons provided at the top-right corner of the table to sort the entries in ascending or descending order.
- Sorting is done based on the full name (combination of first name and last name).

## Project Structure

```plaintext
src/
│
├── app/
│   ├── dynamic-table/
│   │   ├── dynamic-table.component.ts      # Main component for the dynamic table
│   │   ├── dynamic-table.component.html    # Template for the dynamic table
│   │   ├── dynamic-table.component.css     # Styling for the dynamic table
│   │   └── dynamic-table.component.spec.ts # Unit tests for the dynamic table
│   ├── users.service.ts                    # Service to fetch users from the API
│   └── app.module.ts                       # Main Angular module
│
├── assets/                                 # Static assets (if any)
├── environments/                           # Environment configuration
└── index.html                              # Main HTML file
```
### APIs
 This project uses the UsersService to fetch user data. Here is a basic overview:
   **UsersService** 
    The service is responsible for fetching user data from the API.
    It subscribes to the data stream and makes it available to the DynamicTableComponent.
```bash
       getUsers(): Observable<any> {
        return this.http.get('https://api.example.com/users');
```



### Contact
For any questions or inquiries, you can reach out to:

GitHub: [Roshan-86](https://github.com/Roshan-86)

Email: roshangare201811@gmail.com

---
*Made with ❤️ by Roshan Gare*
