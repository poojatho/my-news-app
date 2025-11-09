# 📰 News App – Full Stack Project (Angular + Spring Boot)

A full-stack **News Application** where users can register, log in, browse top headlines, explore multiple categories, search any news, and add/remove favourites.  
Built using **Angular (Frontend)** and **Spring Boot (Backend)** with **MySQL/MongoDB**, **Hibernate/JPA**, and **JWT Authentication**.

---

## 🚀 Features

### 👤 **User Management**
- User Registration  
- Secure Login using **JWT Authentication**  
- Session-based access to news & favourites  

### 📰 **News Browsing**
- View **Top Headlines**  
- Explore multiple **News Categories**  
- Search news by keywords  
- Responsive UI

### ⭐ **Favourites Module**
- Add news to favourites  
- Remove news from favourites  
- View saved articles  

### 🔐 **Security**
- JWT-based login  
- Role-based API protection  
- CORS enabled for Angular frontend  

---

## 🛠️ Tech Stack

### **Frontend**
- Angular 
- TypeScript
- HTML / CSS / Bootstrap / Angular Material (if applicable)

### **Backend**
- Java  
- Spring Boot  
- Spring Web  
- Spring Data JPA  
- Hibernate  
- JWT Security  
- MySQL / MongoDB  

### **Tools**
- Postman  
- Git & GitHub  
- VS Code / IntelliJ / STS  
- Maven  

---

## 🗂️ Project Folder Structure

```
root-folder/
│── favouriteservice/
│── newsapiservice/
│── newsapp/                  # Backend
│── newsFrontend/             # Angular Frontend
│── README.md
│── package-lock.json
│── pom.xml / etc.
```

---

## ⚙️ How to Run the Project

### ✅ **1. Clone the Repository**
```bash
git clone https://github.com/poojatho/my-news-app.git
cd my-news-app
```

---

## 🖥️ Backend (Spring Boot)

### ✅ **2. Configure Database**
Update the backend `application.properties` or `application.yml`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/newsapp
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Or MongoDB settings if using MongoDB.

---

### ✅ **3. Run Backend**
Using STS/IntelliJ:

- Open the backend folder (newsapp)
- Run: **NewsAppApplication.java**

OR via terminal:

```bash
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8080/
```

---

## 🌐 Frontend (Angular)

### ✅ **4. Install dependencies**
```bash
cd newsFrontend
npm install
```

### ✅ **5. Run Angular**
```bash
ng serve --open
```

Frontend runs on:

```
http://localhost:4200/
```

---


## 📦 Future Enhancements
- Dark mode UI  
- Pagination & infinite scroll  
- Push notifications for breaking news  
- Deploy on cloud (Render/Netlify/Heroku)  

---

## 👩‍💻 Author

**Pooja Thorat**  
Java Developer | Spring Boot | Angular  
GitHub: https://github.com/poojatho  
LinkedIn: https://www.linkedin.com/in/pooja-thorat-6b33801a1  

---

## ⭐ If you like this project, don’t forget to star the repo!

