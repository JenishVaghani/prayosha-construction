/*
  # Construction Company Database Schema

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project name
      - `description` (text) - Project description
      - `location` (text) - Project location
      - `sqft` (integer) - Square footage
      - `duration` (text) - Project duration
      - `category` (text) - Project type/category
      - `image_url` (text) - Main project image
      - `model_url` (text, nullable) - 3D model URL if available
      - `featured` (boolean) - Featured project flag
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz)
      
    - `testimonials`
      - `id` (uuid, primary key)
      - `client_name` (text) - Client name
      - `company` (text) - Company name
      - `quote` (text) - Testimonial text
      - `avatar_url` (text, nullable) - Client avatar image
      - `video_url` (text, nullable) - Video testimonial URL
      - `rating` (integer) - Rating 1-5
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz)
      
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Contact name
      - `company` (text, nullable) - Company name
      - `email` (text) - Email address
      - `phone` (text, nullable) - Phone number
      - `project_type` (text) - Type of project
      - `budget_range` (text, nullable) - Budget range
      - `message` (text, nullable) - Additional message
      - `file_url` (text, nullable) - Uploaded file URL
      - `created_at` (timestamptz)
      
    - `gallery_images`
      - `id` (uuid, primary key)
      - `title` (text) - Image title
      - `before_url` (text) - Before image URL
      - `after_url` (text) - After image URL
      - `category` (text) - Gallery category
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz)
      
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique) - Subscriber email
      - `subscribed_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Projects, testimonials, gallery_images: Public read access
    - Contact submissions: Public insert only
    - Newsletter subscribers: Public insert only
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  sqft integer NOT NULL,
  duration text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  model_url text,
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company text NOT NULL,
  quote text NOT NULL,
  avatar_url text,
  video_url text,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text,
  project_type text NOT NULL,
  budget_range text,
  message text,
  file_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  before_url text NOT NULL,
  after_url text NOT NULL,
  category text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  USING (true);

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view gallery images"
  ON gallery_images FOR SELECT
  USING (true);

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);