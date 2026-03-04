# STM Consulting Website Revamp

A modern, responsive website redesign for STM Consulting featuring a home page and events page.

## Project Structure

```
sample-stm-website-revamp/
├── index.html          # Home page
├── events.html         # Events page
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── scripts.js      # JavaScript functionality
└── README.md           # This file
```

## Features

### Home Page (`index.html`)
- **Sticky Navigation**: Responsive navigation bar with mobile toggle
- **Hero Carousel**: Auto-rotating carousel with 3 slides
  - Manual navigation with prev/next buttons
  - Indicator dots for direct slide access
  - Auto-advances every 5 seconds
  - Pauses on hover
- **News Slider**: Horizontal sliding news section with 4 news cards
  - Manual navigation with left/right buttons
  - Responsive layout (3 cards on desktop, 2 on tablet, 1 on mobile)
- **Articles Section**: 6 service cards in a responsive grid layout
- **Call-to-Action Section**: Prominent CTA with gradient background
- **Footer**: Multi-column footer with links, social media, and contact info

### Events Page (`events.html`)
- **Banner**: Eye-catching page banner with title and description
- **Events Introduction**: Brief introduction to events
- **Upcoming Events**: 3 featured upcoming events with:
  - Event images
  - Date and location information
  - Event descriptions
  - Tags/categories
  - "Register Now" buttons
  - "Upcoming" ribbon badges
- **Past Events Gallery**: 6 past events in a responsive grid with hover effects
- **Team Events**: 3 internal team events/workshops with icons
- **Contact CTA**: Call-to-action for event meeting requests

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with:
  - CSS Grid and Flexbox for layouts
  - CSS Variables for theming
  - Animations and transitions
  - Media queries for responsive design
- **JavaScript (Vanilla)**: Interactive features including:
  - Carousel functionality
  - News slider
  - Mobile navigation toggle
  - Scroll animations
  - Intersection Observer API
- **Font Awesome 6.4.0**: Icons (loaded via CDN)

## Color Scheme

```css
--primary-color: #4A90E2    /* Blue */
--secondary-color: #E94B3C  /* Red */
--accent-color: #6BCF7E     /* Green */
--dark-bg: #1a1a2e          /* Dark Navy */
--light-bg: #f8f9fa         /* Light Gray */
--text-dark: #333           /* Dark Gray */
--text-light: #666          /* Medium Gray */
```

## Responsive Breakpoints

- **Desktop**: > 968px (full layout)
- **Tablet**: 640px - 968px (adjusted grid, 2-column layouts)
- **Mobile**: < 640px (single column, mobile menu)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## How to Use

1. Open `index.html` in a web browser to view the home page
2. Navigate to `events.html` via the navigation menu or by opening it directly
3. All functionality works without a server (can be opened directly from file system)

## Features Breakdown

### Interactive Elements

1. **Carousel Controls**:
   - Previous/Next buttons
   - Indicator dots
   - Auto-rotation with pause on hover
   - Keyboard navigation support

2. **News Slider**:
   - Left/Right navigation buttons
   - Smooth CSS transitions
   - Responsive card sizing
   - Automatic boundary detection

3. **Hover Effects**:
   - Card elevation on hover
   - Image zoom effects
   - Button transformations
   - Link animations

4. **Scroll Animations**:
   - Fade-in effects using Intersection Observer
   - Staggered animations for cards
   - Smooth transitions

### Accessibility Features

- Semantic HTML5 elements
- Alt text for images (placeholder images used)
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states for interactive elements

## Customization

### Changing Colors
Edit the CSS variables in `css/styles.css` (lines 8-18):

```css
:root {
    --primary-color: #4A90E2;
    --secondary-color: #E94B3C;
    /* etc. */
}
```

### Adding More Carousel Slides
1. Add a new `carousel-slide` div in `index.html`
2. Add a corresponding `indicator` span
3. The JavaScript will automatically handle the new slide

### Adding More News Cards
Simply add more `news-card` divs in the `news-track` container in `index.html`

### Adding More Events
Add new `event-card` divs in the `events-grid` container in `events.html`

## Notes

- Images are currently using placeholder images from `via.placeholder.com`
- Replace placeholder images with actual event/company images
- Update contact information in the footer
- Add actual links to navigation menu items
- Customize content to match brand voice and messaging
- Consider adding a backend for dynamic event management

## Future Enhancements

- Add more pages (About, Services, Blog, Contact)
- Implement a contact form with validation
- Add lightbox for event images
- Implement event filtering/search functionality
- Add animation libraries (e.g., AOS, GSAP)
- Integrate with a CMS for easy content management
- Add newsletter subscription functionality
- Implement Google Maps for event locations
- Add event calendar integration

## License

This is a sample project created for demonstration purposes.

## Credits

Based on STM Consulting's events page: https://www.stmconsulting.io/events/
