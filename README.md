# Online Job Portal

## 📌 Project Overview
An **Online Job Portal** that connects job seekers with employers. Users can register, post jobs, apply for jobs, and manage applications.

## 🚀 Features
### **For Job Seekers**
- Register/Login
- Edit profile & upload resume
- Browse & apply for jobs
- View application status
- Search jobs by category, location, etc.

### **For Employers**
- Register/Login
- Post job openings
- Manage received applications
- Shortlist candidates

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js with Express.js
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Token)
- **Styling Framework:** Bootstrap/Tailwind CSS

## 🎯 Installation & Setup
### **Step 1: Clone the Repository**
```sh
git clone https://github.com/your-username/online-job-portal.git
cd online-job-portal
```

### **Step 2: Install Dependencies**
```sh
npm install
```

### **Step 3: Setup MySQL Database**
1. Install MySQL and create a database:
   ```sql
   CREATE DATABASE job_portal;
   ```
2. Configure database credentials in `.env` file:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=yourpassword
   DB_NAME=job_portal
   ```

### **Step 4: Run the Server**
```sh
npm start
```
Server will start at `http://localhost:3000`

## 📌 API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/register` | POST | User Registration |
| `/login` | POST | User Login |
| `/post-job` | POST | Employer posts a job |
| `/get-jobs` | GET | List all jobs |
| `/apply-job/:id` | POST | Apply for a job |
| `/my-applications` | GET | View applied jobs |



---
🚀 **Developed by Harshad Selokar**  





## Files Structures 

- job-portal/
- │── backend/        # Node.js backend (Already built)
- │── frontend/       # Frontend files
- │   ├── index.html  # Home page
- │   ├── login.html  # Login page
- │   ├── register.html  # Registration page
- │   ├── jobs.html   # Job listings
- │   ├── apply.html  # Job application page
- │   ├── css/
- │   │   ├── styles.css  # Main stylesheet
- │   ├── js/
- │   │   ├── auth.js     # Login/Register script (Included in HTML file)
- │   │   ├── jobs.js     # Job listing script (Included in HTML file)
- │   │   ├── apply.js    # Job application script (Included in HTML file)
