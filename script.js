//   Задача 1
//   Напишите класс Circle, который принимает радиус в качестве параметра конструктора. 
//   Добавьте метод area, который возвращает площадь круга, и метод circumference, 
//   возвращающий длину окружности.

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  
    circumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
//   Задача 2
//   Создайте класс Book, который принимает название книги, автора и количество страниц в 
//   качестве параметров конструктора. Добавьте метод info, который выводит информацию о 
//   книге в формате "Книга: [название], Автор: [автор], Страниц: [количество]".

  class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  
    info() {
      console.log(`Book: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
  }

//   Задача 3
//   Напишите класс BankAccount, который принимает имя владельца и начальный баланс. 
//   Добавьте методы deposit и withdraw для управления счетом.

  class BankAccount {
    constructor(ownerName, balance) {
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposit of ${amount} successfully made. New balance: ${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successfully made. New balance: ${this.balance}`);
      } else {
        console.log(`Insufficient funds to withdraw ${amount}`);
      }
    }
  }
  
//   Задача 4
//   Создайте класс Animal, который принимает имя и тип (например, "кот" или "собака") 
//   в качестве параметров конструктора. Добавьте метод sound, который выводит звук, производимый животным.

  class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    sound() {
      switch(this.type.toLowerCase()) {
        case 'cat':
          console.log(`${this.name} meows`);
          break;
        case 'dog':
          console.log(`${this.name} barks`);
          break;
        default:
          console.log(`${this.name} makes a sound`);
      }
    }
  }

//   Задача 5
//   Напишите класс Email, который принимает адрес электронной почты в качестве параметра конструктора. 
//   Добавьте методы send, receive, reply, чтобы моделировать основные функции электронной почты. 
//   Например, send - Отправка с адреса … получателю … произведена успешно, или можете поэксперементировать от себя

  class Email {
    constructor(emailAddress) {
      this.emailAddress = emailAddress;
    }
  
    send(sender, recipient, message) {
      console.log(`Email sent from ${sender} to ${recipient} successfully.`);
      console.log(`Message: ${message}`);
    }
  
    receive(sender, message) {
      console.log(`Email received from ${sender}`);
      console.log(`Message: ${message}`);
    }
  
    reply(recipient, message) {
      console.log(`Reply sent to ${recipient}: ${message}`);
    }
  }
  
  // Example usage of the classes:
  
  const myCircle = new Circle(5);
  console.log("Area of the circle:", myCircle.area());
  console.log("Circumference of the circle:", myCircle.circumference());
  
  const myBook = new Book("War and Peace", "Leo Tolstoy", 1225);
  myBook.info();
  
  const myAccount = new BankAccount("Dmytro", 1000);
  myAccount.deposit(500);
  myAccount.withdraw(200);
  
  const myAnimal = new Animal("Whiskers", "cat");
  myAnimal.sound();
  
  const myEmail = new Email("example@example.com");
  myEmail.send("sender@example.com", "recipient@example.com", "Hi! How are you?");
  myEmail.receive("sender@example.com", "Hi! Long time no see.");
  myEmail.reply("sender@example.com", "Hi! Yeah, it's been a while. How are you doing?");
  