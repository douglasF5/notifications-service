# Notifications microservice

- [About](#about)
  - [Tools](#tools)
  - [API Endpoints](#api-endpoints)
  - [Data types](#data-types)
- [Showcase and examples](#showcase-and-examples)
- [Installing and running](#installing-and-running)
- [Extra notes](#extra-notes)

<br>

## About

Back-end microservice built with NextJS for managing notifications.

```
🧪 Unit tests cover all main entities and use-cases.
```

### Tools used

`Typescript`  `NodeJS`  `NestJS`  `Prisma ORM`  `SQLite`  `JestJS`

<br/>

### API Endpoints

| Action | HTTP method | Route | Arguments | Return  |
| --- | --- | --- | --- | --- |
| Create notification  | POST  | / | Notification request object | Notification object
| Get notifications per recipient | GET | /from/:recipientId | Recipient ID | Notifications list
| Count notifications per recipient | GET | /count/from/:recipientId | Recipient ID | Count number
| Set notifications as read | PATCH | /read/:id | Notification ID | -
| Set notifications as unread | PATCH | /unread/:id | Notification ID | -
| Cancel notifications | PATCH | /cancel/:id | Notification ID | -

<br/>

### Data types

| Data | Type |
| --- | --- |
| Notification ID | string/UUID |
| Recipient ID | string/UUID |
| Notifications count | number |
| Notifications list | Notifications [ ] |

<br/>

#### Notification request object
```TypeScript
{
  "content": String, 
  "recipientId": String,
  "category": String
}
```

<br/>

#### Notification object
```TypeScript
{
  recipientId: string,
  createdAt: Date,
  readAt: Date | null,
  canceledAt: Date | null,
  category: string,
  content: Content,
}
```

<br/>

## Installing and running
Installing dependencies
```
npm install
```
Starting the development server to serve the application locally
```
npm run start:dev
```
Running all unit tests
```
npm run test
```
After installing Prisma you can run the Prisma Studio to visualize database entities
```
npx prisma studio
```

<small style="font-size: 11px; color: rgba(125, 125, 125, 1);">Check out package.json for more scripts.</small>

<br>

## Extra notes

- As an exercise, this project wasn’t focused on advanced optimizations regarding data storage, processing, accessibility, scalability, cross-browser compatibilities, etc. There’s still a lot to be done about it.
- As most projects, this one is not bug/error-free. If you find any bug or unexpected behavior, feel free to get in touch, here is my email - dfaferreira46@gmail.com
