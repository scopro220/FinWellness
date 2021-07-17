# FinWellness

FinWellness is a web application to keep track of where you are spending your money.

## Tech Stack

**Client:** [React](https://reactjs.org/), [Chartjs](https://www.chartjs.org/), [React Router](https://reactrouter.com/)

**Server:** [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Mongoose](https://mongoosejs.com/), [Passportjs](http://www.passportjs.org/)

## Running the application

To run in dev, run the following command

```bash
  - npm install
  - npm run dev
```

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
  Status: 201 Created
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
  Status: 204 No Content
```

## Demo Images

[Main page](https://i.imgur.com/gM0eT9N.png)

[Transactions Page](https://i.imgur.com/vovAZzA.png)

[Vizualization Page](https://i.imgur.com/m2UEGQ5.png)

## Authors

- [@scottprovence](https://github.com/scopro220/)
