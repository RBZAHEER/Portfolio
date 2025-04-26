
# Personal Portfolio using React & Tailwind CSS

This is a personal portfolio website built with **React** and **Tailwind CSS**, containerized using **Docker** and served through **Nginx**. It is deployed on an **AWS EC2** instance for public access.

---

## 🚀 Project Overview

- **Frontend:** React + Tailwind CSS  
- **Server:** Nginx (inside Docker container)  
- **Deployment:** Dockerized setup on AWS EC2 instance  
- **Container Management:** Docker Compose  
- **Network:** Custom Docker bridge network for container communication

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend Framework |
| Tailwind CSS | Styling |
| Docker | Containerization |
| Nginx | Static File Server (Reverse Proxy) |
| Docker Compose | Multi-container Orchestration |
| AWS EC2 | Cloud Deployment |

---

## 📦 How to Run Locally with Docker

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Build and Run the Containers**

```bash
docker-compose up --build
```

3. **Access the Portfolio**

Visit:  
`http://localhost:3000`  
(or the port configured in your `docker-compose.yml`)

---

## 📝 Project Structure

```
├── Dockerfile
├── docker-compose.yml
├── nginx
│   └── nginx.conf
├── public
├── src
├── README.md
└── package.json
```

- `Dockerfile`: Multi-stage Dockerfile for building and serving the app.
- `docker-compose.yml`: Defines and runs multi-container Docker applications.
- `nginx/nginx.conf`: Nginx configuration file for serving the app.
- `src/` and `public/`: React app source code.

---

## ⚙️ Key Docker Concepts Used

- **Multi-Stage Dockerfile:**  
  Build the React app separately and copy only the final build files into a lightweight Nginx container.

- **Docker Compose:**  
  Manage services (containers) easily with simple commands.

- **Bridge Network:**  
  Enable isolated and secure communication between app and server containers.

---

## 🌐 Deployment on AWS EC2

- Launch an EC2 instance (Ubuntu)
- Install Docker and Docker Compose
- Clone this repository
- Run `docker-compose up -d`
- Map the public IP to access the portfolio live.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

Thanks to the open-source community and amazing documentation provided by Docker, AWS, React, Tailwind CSS, and Nginx!

---

# Tags  
#ReactJS #TailwindCSS #Docker #Nginx #AWS #EC2 #DockerCompose #Portfolio

