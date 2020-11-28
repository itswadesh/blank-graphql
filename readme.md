# graphql

GraphQL Grocery API & UI monorepo.

## Setup

### Dev

```sh
# (Linux) Export UID to fix permissions
export UID

# Boot the stack; this will
# - provision mongo & redis
# - launch api & web
yarn up

# Only run api & web
yarn dev

# Stop containers
yarn stop

# Tear down containers
yarn down
```

### BE

- Node + Express + TS
- GraphQL + Apollo Server + WS
- express-session + Redis
- MongoDB + Mongoose

### DevOps

- nginx
- Docker + docker-compose

Sessions + Subscriptions handled by Redis

### Setup google login

- https://console.developers.google.com/apis/credentials/oauthclient/

### Deployment

- Change APP_ORIGIN=http://localhost:7777 to APP_ORIGIN=https://grocery.lrnr.in

### Codecanyon description

Litekart is a multi-vendor online grocery commerce and delivery system. It provides an admin dashboard, vendor management system, delivery system, and a full-fledge Progressive Web App.

Based on cutting edge technology stack GraphQL + NodeJS + VueJS + MongoDB. With Typescript, Prettier, Linting and modular code base it delivers rubust and powerful software for your business.

<img src="http://www.codenx.com/litekart/codecanyon-techstack.png" alt="Litekart Tech Stack"/>
<img src="http://www.codenx.com/litekart/codecanyon-99.png" alt="99 for all"/>
<img src="http://www.codenx.com/litekart/codecanyon-extended-license.png" alt="Litekart Extended License"/>
<img src="http://www.codenx.com/litekart/codecanyon-features.png" alt="Litekart Features"/>
<img src="http://www.codenx.com/litekart/codecanyon-start-selling.png" alt="Litekart Start Selling"/>
<img src="http://www.codenx.com/litekart/codecanyon-questions.png" alt="Litekart Questions"/>
<img src="http://www.codenx.com/litekart/customization.png" alt="Litekart Customization"/>
<img src="http://www.codenx.com/litekart/existing-customers.png" alt="Litekart Free Existing Customers"/>
<img src="http://www.codenx.com/litekart/codecanyon-support.png" alt="Litekart Support"/>
<img src="http://www.codenx.com/arialshop/envato-elite.png" alt="Envato Elite"/>
<img src="http://www.codenx.com/vuefull/github-access.png" alt="Github Access"/>
<img src="http://www.codenx.com/vuefull/5-star.png" alt="Rating"/>

Unlimited products, unlimited vendors, unlimited orders, unlimited delivery captains.

Built over the NodeJS platform, it delivers

- Extremely Fast Results
- Highly Scalable
- Seemless Integration with 3rd party Apps
- Highly Customizable
- Unlimited Potential
- IOT capable
- Realtime Store Manual Open/Close
- Automatic Store Open/Close Time Scheduling
- Live Order Tracking & Delivery Application
- Social Login with OTP Registration
- COD, Stripe, Razorpay Payment Options

With the modular code base it can be customized to acomodate any requirements and customization to any extent.

Monorepo architecture makes the software easy to maintain and colaborate

The store front, vendor portal, delivery mangement has been designed to be responsive and light weight with help of the latest tailwindcss.

It can be instaled on any device running Android, IoS, Windows PC with chrome. Optionally it can be converted to an android mobile app which can be uploaded to play store

Litekart includes high-end features like Lazy Loading, Progressive Image Loading, Content Placeholder Loading, Download to excel, Advance Settings Management, Advance Coupon System.

Unlimited possibilities: Litekart can be modified to create grocery, food, pharmacy, fashion, electronics store delivery web + mobile app

Checkout all features https://d.lrnr.in/features

- Introductory offer - Standard customizations free of charge

- Hierarchy based unlimited roles
- Itemwise status update
- Unlimited static pages
- Image optimization and CDN
- Coupons
- Inventory Management
- Payment Gateway Integration
- SMS
- Emails with template manager
- Static Page Editor
- Vendor Reports & COD Management
- Redis cache
- Industry best practices
- Pretty Code & Linting
- Redis Cache
- GraphQL API
- Attractive & responsive UI
- Progressive Web App
- Modular coding structure
- Easy deployment to cloud
- Role based admin panel
- Product categories

### Store Front Features

- Multiple addresses per account
- SEO optimized static pages
- Social media sharing capabilities
- Checkout using Stripe, Razorpay, COD
- Recently viewed products
- SEO optimized product category page
- SEO optimized product detail page
- Manage profile

### Store Admin Panel

- Unlimited items and categories
- Unlimited products and delivery locations
- Manage orders and payments of store
- Configurable currency of store
- Control store currency decimal accuracy
- Configure no of items perPage
- Add store physical address
- Configure minimum order value
- Configure standard shipping charge
- Manage store icons, logos
- Manage store open graph banner
- Store title, meta description and keywords manager
- Manage store front homepage banners
- Create and modify static pages
- Configure and edit all email templates
- Manage store users and user roles

### Full Authentication System

- Login, Signup,
- Change Password, Forgot Password, Reset Password
- Social Login & Signup

### Security Features

- Session based Authentication
- CSRF Protection
- Cross Site Scripting (XSS) Protection
- SQL Injection Protection
- Secure Bcrypt Password Hashing

### Demo and documentation

Store Front Demo: https://grocery.lrnr.in
Delivery Management Demo: https://delivery.lrnr.in
Vendor Panel Demo: https://vendor.lrnr.in
Admin Panel Demo: https://gadmin.lrnr.in
Documentation: http://d.lrnr.in/
Email: swadesh@lrnr.in

### Tags

grocery delivery, grocery ordering, bigbasket clone, loblaws clone, multi vendor, ordering system, progressive web app, pwa, vue, graphql, mongodb, Grocery Order Online
