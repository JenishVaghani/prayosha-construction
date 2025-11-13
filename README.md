# BuildCraft Construction Website

A high-end, single-page construction company showcase website featuring immersive 3D visuals, smooth animations, and modern UI/UX.

## Features

- **3D Hero Section**: Interactive WebGL construction scene with rotating camera
- **Project Showcase**: Dynamic project gallery with lightbox modal
- **Animated Services**: Micro-interactions and hover effects
- **Process Timeline**: Horizontal scrollable timeline visualization
- **Stats Counter**: Animated counters with scroll triggers
- **Before/After Gallery**: Interactive image comparison slider
- **Testimonials**: Rotating client testimonials with video support
- **Contact Form**: Full-featured form with Supabase integration
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Accessibility**: WCAG compliant with reduced-motion support

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Three.js & React Three Fiber** for 3D graphics
- **GSAP** for advanced animations
- **Supabase** for database and form submissions
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. The database schema is already set up via Supabase migrations

### Development

Start the development server:

```bash
npm run dev
```

### Build

Build for production:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Database Setup

The database schema includes:

- **projects**: Project portfolio with images and details
- **testimonials**: Client testimonials and ratings
- **gallery_images**: Before/after comparison images
- **contact_submissions**: Form submissions
- **newsletter_subscribers**: Email newsletter subscribers

### Seeding Sample Data

To populate the database with sample data, uncomment the seed function call in your component or run it manually through the browser console:

```typescript
import { seedDatabase } from './utils/seedData';
seedDatabase();
```

## Project Structure

```
src/
├── components/
│   ├── 3d/
│   │   └── ConstructionScene.tsx    # 3D construction model
│   ├── Header.tsx                    # Navigation header
│   ├── Hero.tsx                      # Hero section with 3D scene
│   ├── Projects.tsx                  # Project showcase
│   ├── Services.tsx                  # Services grid
│   ├── Process.tsx                   # Process timeline
│   ├── Stats.tsx                     # Animated statistics
│   ├── Gallery.tsx                   # Before/after gallery
│   ├── Testimonials.tsx              # Client testimonials
│   ├── Certifications.tsx            # Safety certifications
│   ├── Contact.tsx                   # Contact form
│   └── Footer.tsx                    # Footer with newsletter
├── contexts/
│   └── ThemeContext.tsx              # Theme management
├── hooks/
│   ├── useScrollAnimation.ts         # GSAP scroll animations
│   └── useIntersectionObserver.ts    # Intersection observer hook
├── lib/
│   └── supabase.ts                   # Supabase client
├── utils/
│   └── seedData.ts                   # Database seeding utility
├── App.tsx                           # Main app component
└── main.tsx                          # App entry point
```

## Customization

### Colors

The color palette uses:
- Primary: Orange (#F1733A)
- Secondary: Yellow (#FFC857)
- Dark: Slate tones
- Update these in `tailwind.config.js` and `src/index.css`

### Content

- Update company information in components
- Replace placeholder images with actual project photos
- Modify structured data in `index.html`
- Update contact details in Contact and Footer components

### 3D Models

To replace the 3D construction scene:
1. Update `src/components/3d/ConstructionScene.tsx`
2. Import and use custom glTF models with Three.js
3. Optimize models using Draco compression

## Performance Optimization

- Images are lazy-loaded from Pexels CDN
- Code splitting is handled by Vite
- GSAP animations respect `prefers-reduced-motion`
- Three.js scenes use optimized low-poly models

## Accessibility

- Semantic HTML throughout
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus visible states
- Color contrast ratios meet WCAG AA
- Reduced motion support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

The site can be deployed to:
- Vercel
- Netlify
- AWS Amplify
- Any static hosting service

Ensure environment variables are configured in your deployment platform.

## License

MIT

## Support

For questions or issues, contact info@buildcraft.com
