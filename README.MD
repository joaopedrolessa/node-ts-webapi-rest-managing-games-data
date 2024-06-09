# Game Management API

This API is responsible for managing games and publishers.

## Description

The Game Management API allows the management of information about games and publishers, providing endpoints to list, add, update, and delete games, as well as list publishers.

## Features

- List all games
- Get a game by ID
- Add a new game
- Delete a game by ID
- Update a game by ID
- List all publishers

## Endpoints

### Games

#### List all games

```
GET /api/games
```
Returns a list of all games.

#### Get a game by ID

```
GET /api/games/:id
```
Returns the details of a specific game with the provided ID.

#### Add a new game

```
POST /api/games
```
Adds a new game to the list.

#### Delete a game by ID

```
DELETE /api/games/:id
```
Deletes a game from the list with the provided ID.

#### Update a game by ID

```
PATCH /api/games/:id
```
Updates the details of a specific game with the provided ID.

### Publishers

#### List all publishers

```
GET /api/publishers
```
Returns a list of all publishers.

## Models

### gameModel

```
{
    id: number,
    name: string,
    publisher: string,
    nationality: string,
    year: number,
    genre: string,
    age: number
}
```

### publisherModel

```
{
    id: number,
    name: string
}
```

### Implementation

This API was implemented using the RESTful pattern with the Express.js library for the web framework and JavaScript/TypeScript for business logic and data manipulation.

## How to Run

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository.
3. Install dependencies using `npm install`.
4. Start the server using `npm start`.
5. The server will be available at `http://localhost:{PORT}`.

## HTTP Responses

- **200 OK**: The request was successful.
- **204 No Content**: The request was successful, but there is no content to return.
- **400 Bad Request**: The request could not be understood by the server due to incorrect syntax.
- **201 Created**: The request was successful, and a new resource was created as a result.

## Used Technologies

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## License

This project is licensed under the MIT License.