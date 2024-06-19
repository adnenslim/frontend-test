# Newsletter Application

## Description

This application displays a list of newsletters, grouped by site. Users can view available newsletters and either sign up or subscribe depending on their access rights.

## Features

- **Display Newsletters**: Newsletters are grouped by site.
- **Conditional CTA**: The call-to-action button changes based on user access rights.
- **Random Users**: A random user is selected from three types of profiles each time the page loads.

## Directory Structure

echo -e "\`\`\`\n.\n├── src\n│   ├── components\n│   ├── lib\n│   ├── mocks\n│   ├── pages\n│   ├── types\n│   └── utils\n└── README.md\n\`\`\`" > README.md


## User Mocks

User mocks are defined with different subscription types.

## Newsletter Mocks

Newsletters are defined with information such as title, description, image, site, and access rights.

## Components

### Header

Displays the page header with the title and description.

### NewsletterImage

Displays the image of a newsletter.

### NewsletterItem

Displays the information of a newsletter with a conditional CTA button.

### NewslettersGroup

Groups newsletters by site.

### NewslettersPage

Displays grouped newsletters and manages user state.

## Utilities

### getRandomUser

Utility function to get a random user.

### userHasAccess

Utility function to check if the user has access to a newsletter.

## Types

### User

Defines the structure of a user object.

### NewsletterItem

Defines the structure of a newsletter item.

## Lib

Contains helper functions and common utilities used across the application.

## Technical Choices

### Next.js

- **Reason**: Next.js is a React framework that enables several key features, including server-side rendering and generating static websites. It is highly optimized for performance and developer experience.
- **Advantage**: Improved performance, better SEO, and enhanced developer experience through built-in features like image optimization and API routes.

### Tailwind CSS

- **Reason**: Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup.
- **Advantage**: Increased productivity and maintainability by reducing the need for custom CSS, and providing a consistent design system.

### TypeScript

- **Reason**: TypeScript is a superset of JavaScript that adds static typing, which helps catch errors early in the development process.
- **Advantage**: Improved code quality and maintainability, better refactoring capabilities, and enhanced developer experience through type checking and autocomplete.

### next/image

- **Reason**: The \`next/image\` component provides built-in image optimization, allowing for automatic resizing, optimization, and serving of images in modern formats.
- **Advantage**: Improved performance and reduced load times through optimized image loading.


## How to Run

1. Clone the repository.
2. Install dependencies using \`npm install\`.
3. Run the development server using \`npm run dev\`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
