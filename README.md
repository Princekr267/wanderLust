# WanderLust 🏠✨

> A full-stack accommodation booking platform inspired by Airbnb, built with Node.js, Express, and MongoDB.

![WanderLust Banner](https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=300&fit=crop)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22.21.0-brightgreen)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/)

## 🌟 Live Demo

**[View Live Application](https://wanderlust-r6m1.onrender.com)** 

## 📖 About The Project

WanderLust is a feature-rich accommodation booking platform that allows users to discover, list, and review properties worldwide. Built with the MVC (Model-View-Controller) architecture and modern web technologies, it provides a seamless experience for both hosts and travelers.

### Key Features

- **🔐 User Authentication & Authorization** - Secure signup/login with Passport.js and role-based access control
- **🏗️ MVC Architecture** - Clean separation of concerns with Models, Views, and Controllers
- **🏡 Property Listings** - Create, read, update, and delete listings with full CRUD functionality
- **📸 Image Upload** - Cloudinary integration for seamless image management
- **🔍 Smart Search** - Advanced search functionality across title, location, country, and description
- **⭐ Reviews & Ratings** - 5-star rating system with user reviews
- **🎯 Category Filters** - Browse by Mountains, Castles, Pools, Camping, Farms, and more
- **🔥 Trending Section** - Discover top-rated properties (listings with avg rating > 3)
- **💰 Tax Toggle** - Display total price with/without taxes
- **📱 Responsive Design** - Mobile-first, fully responsive interface
- **🔒 Route Protection** - Secure authorization ensuring users can only edit/delete their own content
- **💾 Session Management** - Persistent user sessions with MongoDB session store

## 🛠️ Built With

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** (v5.1.0) - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** (v9.0.0) - MongoDB object modeling

### Frontend
- **EJS** - Templating engine
- **EJS-Mate** - Layout support for EJS
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icon library
- **Custom CSS** - Additional styling

### Authentication & Security
- **Passport.js** - Authentication middleware
- **Passport-Local** - Local authentication strategy
- **Passport-Local-Mongoose** - User authentication plugin
- **Express-Session** - Session management
- **Connect-Mongo** - MongoDB session store
- **Joi** - Server-side validation

### File Upload & Storage
- **Cloudinary** - Cloud-based image storage
- **Multer** - File upload middleware
- **Multer-Storage-Cloudinary** - Cloudinary storage engine

### Other Tools
- **Method-Override** - HTTP verb support (PUT, DELETE)
- **Connect-Flash** - Flash messages
- **Dotenv** - Environment variable management
- **Custom Error Handling** - Async error wrapper and ExpressError class

## 📦 Installation & Setup

### Prerequisites

- Node.js (v22.21.0 or higher)
- MongoDB Atlas account
- Cloudinary account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Princekr267/wanderlust.git
   cd wanderlust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   ATLASDB_URL=mongodb+srv://username:password@cluster.mongodb.net/wanderlust
   SECRET=your_session_secret_key_here
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   NODE_ENV=development
   ```

4. **Run the application**
   ```bash
   node app.js
   ```
   
   Or for development with auto-reload (if you have nodemon installed):
   ```bash
   nodemon app.js
   ```

5. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure (MVC Architecture)

```
wanderlust/
├── models/              # Data models (MongoDB schemas)
│   ├── listing.js       # Listing model with categories
│   ├── review.js        # Review model with ratings
│   └── user.js          # User model with Passport integration
├── views/               # Presentation layer (EJS templates)
│   ├── layouts/         # Layout templates
│   │   └── boilerplate.ejs
│   ├── includes/        # Reusable components
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   └── flash.ejs
│   ├── listings/        # Listing views
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   └── users/           # User authentication views
│       ├── signup.ejs
│       ├── login.ejs
│       └── profile.ejs
├── controllers/         # Business logic layer
│   ├── listings.js      # Listing CRUD operations
│   ├── reviews.js       # Review operations & trending logic
│   └── users.js         # Authentication & profile logic
├── routes/              # Route definitions
│   ├── listing.js       # Listing routes
│   ├── review.js        # Review routes
│   └── user.js          # User authentication routes
├── public/              # Static assets
│   ├── css/
│   │   ├── style.css
│   │   └── rating.css
│   └── JavaScript/
│       └── script.js
├── utils/               # Utility functions
│   ├── ExpressError.js  # Custom error class
│   └── wrapAsync.js     # Async error wrapper
├── middleware.js        # Custom middleware (auth, validation)
├── schema.js            # Joi validation schemas
├── cloudConfig.js       # Cloudinary configuration
├── app.js               # Main application entry point
├── package.json         # Dependencies and scripts
└── .env                 # Environment variables (gitignored)
```

## 🎯 Features in Detail

### MVC Architecture
- **Models**: MongoDB schemas with Mongoose for data structure and validation
- **Views**: EJS templating with reusable layouts and components
- **Controllers**: Separated business logic for clean, maintainable code

### User Authentication & Authorization
- Secure password hashing with Passport-Local-Mongoose
- Session-based authentication with MongoDB store
- Protected routes with custom middleware
- Authorization checks ensuring users can only modify their own content

### Listing Management
- Create listings with images, descriptions, prices, and categories
- Edit and delete your own listings only
- Browse all listings with category filters
- Advanced search across multiple fields

### Category System
Implemented 10 distinct categories:
- Mountains ⛰️
- Rooms 🛏️
- Iconic Cities 🏙️
- Castles 🏰
- Amazing Pools 🏊
- Camping ⛺
- Farms 🐄
- Arctic ❄️
- Domes 🏠
- Boats ⛵

### Review System
- Star rating system (1-5 stars)
- Text comments for detailed feedback
- Users can only delete their own reviews
- Trending page shows listings with average rating > 3

### Search Functionality
Smart search implementation using MongoDB regex:
- Search across title, location, country, and description
- Case-insensitive matching
- Instant results

## 💡 Technical Challenges Overcome

### 1. **Category Implementation**
- Created enum validation in Mongoose schema
- Implemented filter icons with Font Awesome
- Built dynamic routing with query parameters

### 2. **Cloudinary Integration**
- Configured multer-storage-cloudinary
- Handled file uploads with validation
- Optimized image display with Cloudinary transformations

### 3. **Passport Authentication**
- Integrated passport-local-mongoose
- Implemented session persistence with connect-mongo
- Built custom middleware for authorization

### 4. **Search Feature**
- Implemented MongoDB $regex for pattern matching
- Created $or operator for multi-field search
- Handled empty search queries gracefully

### 5. **Session Management**
- Configured express-session with MongoDB store
- Set up cookie security and expiration
- Implemented flash messages for user feedback

## 🔮 Future Enhancements

- [ ] **Map Integration** - Mapbox for location visualization and interactive maps
- [ ] **Advanced Filters** - Price range, amenities, guest count, and more
- [ ] **Wishlist Feature** - Save favorite properties
- [ ] **Social Auth** - Google and Facebook login

## 🚀 Deployment

This project is deployed on [Render](https://render.com/).

### Deployment Steps

1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Set Build Command: `npm install`
5. Set Start Command: `node app.js`
6. Add environment variables in Render dashboard:
   - `ATLASDB_URL`
   - `SECRET`
   - `CLOUD_NAME`
   - `CLOUD_API_KEY`
   - `CLOUD_API_SECRET`
   - `NODE_ENV=production`
7. Deploy!

**Note:** First deployment may take 5-10 minutes. Render's free tier may spin down after inactivity, causing a slight delay on first access.

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ATLASDB_URL` | MongoDB Atlas connection string | Yes |
| `SECRET` | Session secret key (use a strong random string) | Yes |
| `CLOUD_NAME` | Cloudinary cloud name | Yes |
| `CLOUD_API_KEY` | Cloudinary API key | Yes |
| `CLOUD_API_SECRET` | Cloudinary API secret | Yes |
| `NODE_ENV` | Environment (development/production) | No |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing MVC structure
- Write clear commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Prince Kumar**

- GitHub: [@Princekr267](https://github.com/Princekr267)
- LinkedIn: [Prince Kumar](https://linkedin.com/in/prince-kumar)
- Email: princekrr267@gmail.com

## 🙏 Acknowledgments

- Inspired by [Airbnb](https://www.airbnb.com/)
- Icons by [Font Awesome](https://fontawesome.com/)
- Image hosting by [Cloudinary](https://cloudinary.com/)
- Database hosting by [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Deployment by [Render](https://render.com/)
- Bootstrap for responsive design
- The open-source community

## 📸 Screenshots

### Desktop Views

#### Home Page - Category Filters
![Home Page](screenshots/home.png)
*Browse listings by category with an intuitive, responsive interface*

#### Property Listing Details
![Listing Page](screenshots/listing-detail.png)
*View comprehensive property details, reviews, and ratings*

#### Advanced Search
![Search Results](screenshots/search.png)
*Smart search across multiple fields with instant results*

#### User Signup
![Signup Page](screenshots/signup.png)
*Secure user registration with validation*

#### Owner View - Edit & Delete Controls
![Owner View](screenshots/owner-login.png)
*Authorization-based controls - owners can edit and delete their own listings*

#### Create New Listing
![New Listing](screenshots/new-listing.png)
*Easy-to-use form for hosts to add properties*

#### Reviews & Ratings
![Reviews](screenshots/reviews.png)
*Interactive star rating system with user feedback*

#### Flash Messages
![Flash Messages](screenshots/flash.png)
*User-friendly feedback with flash notifications for actions like adding reviews*

### Mobile Responsive Design

<div align="center">
  <img src="screenshots/mobile-home.jpg" alt="Mobile Home" width="200"/>
  <img src="screenshots/mobile-menu.jpg" alt="Mobile Menu" width="200"/>
  <img src="screenshots/mobile-search.jpg" alt="Mobile Search" width="200"/>
</div>

<div align="center">
  <em>Fully responsive design optimized for mobile devices - Home, Menu, and Search</em>
</div>

#### Mobile Listing Details
<div align="center">
  <img src="screenshots/mobile-listing.jpg" alt="Mobile Listing Details" width="250"/>
</div>

<div align="center">
  <em>Complete listing view with seamless scrolling experience on mobile</em>
</div>

---

⭐ **If you found this project helpful, please give it a star!**

**Made with ❤️ by Prince Kumar**
