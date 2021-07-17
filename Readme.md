# FinWellness

FinWellness is a web application to keep track of where you are spending your money.

## Tech Stack

**Client:** [React](https://reactjs.org/), [Chartjs](https://www.chartjs.org/), [React Router](https://reactrouter.com/)

**Server:** [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Mongoose](https://mongoosejs.com/), [Passportjs](http://www.passportjs.org/)

## API Reference

### Get all transactions

```http
  GET /api/transactions
```

#### Reponse

```http
  Status: 200 OK
```

### Add new transaction

```http
  POST /api/transactions/add
```

| Body              | Type     | Description                                       |
| :---------------- | :------- | :------------------------------------------------ |
| `id`              | `number` | **Required** Id of item created                   |
| `transactionType` | `string` | **Required** Transaction type (income or expense) |
| `category`        | `string` | **Required** Category of transaction              |
| `amount`          | `number` | **Required** Amount of transaction                |
| `date`            | `date`   | **Required** Date of transaction                  |

#### Reponse

```http
  Status: 201 CREATED
```

### Delete transactions

```http
  DELETE /api/transactions/:id
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `number` | **Required** Id of item to be deleted |

#### Reponse

```http
  Status: 204 NO CONTENT
```

## Color Reference

| Color           | Hex                                                              |
| --------------- | ---------------------------------------------------------------- |
| Main Color      | ![#f9a826](https://via.placeholder.com/10/f9a826?text=+) #f9a826 |
| Secondary Color | ![#474747](https://via.placeholder.com/10/474747?text=+) #474747 |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PROD_ATLAS_URI`

`DEV_ATLAS_URI`

`GOOGLE_CLIENT_ID`

`GOOGLE_CLIENT_SECRET`

`SESSION_SECRET`

## Run Locally

Clone the project

```bash
  git clone https://github.com/scopro220/FinWellness.git
```

Go to the project directory

```bash
  cd FinWellness
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Screenshots

![Main Page](https://i.imgur.com/gM0eT9N.png)

![Transactions Page](https://i.imgur.com/vovAZzA.png)

![Vizualization Page](https://i.imgur.com/m2UEGQ5.png)

## Authors

- [@scottprovence](https://github.com/scopro220/)
