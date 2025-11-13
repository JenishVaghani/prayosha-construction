import { supabase } from "../lib/supabase";

export async function seedDatabase() {
  const projects = [
    {
      title: "Downtown Office Complex",
      description:
        "A modern 15-story office building featuring sustainable design elements and state-of-the-art facilities.",
      location: "New York, NY",
      sqft: 250000,
      duration: "18 months",
      category: "Commercial",
      image_url:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      order_index: 1,
    },
    {
      title: "Luxury Residential Tower",
      description:
        "Premium 30-unit residential tower with panoramic city views and high-end amenities.",
      location: "Los Angeles, CA",
      sqft: 180000,
      duration: "24 months",
      category: "Residential",
      image_url:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      order_index: 2,
    },
    {
      title: "Shopping Center Renovation",
      description:
        "Complete renovation of a 1980s shopping center into a modern retail and dining destination.",
      location: "Chicago, IL",
      sqft: 120000,
      duration: "12 months",
      category: "Renovation",
      image_url:
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      order_index: 3,
    },
    {
      title: "Industrial Warehouse",
      description:
        "Purpose-built logistics facility with advanced automation and climate control systems.",
      location: "Dallas, TX",
      sqft: 300000,
      duration: "15 months",
      category: "Industrial",
      image_url:
        "https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      order_index: 4,
    },
    {
      title: "Boutique Hotel",
      description:
        "Elegant 50-room boutique hotel featuring contemporary design and luxury accommodations.",
      location: "Miami, FL",
      sqft: 85000,
      duration: "20 months",
      category: "Hospitality",
      image_url:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      order_index: 5,
    },
    {
      title: "Medical Center",
      description:
        "State-of-the-art medical facility with specialized treatment areas and advanced medical technology.",
      location: "Seattle, WA",
      sqft: 150000,
      duration: "22 months",
      category: "Healthcare",
      image_url:
        "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      order_index: 6,
    },
    {
      title: "Smart Corporate Park",
      description:
        "A tech-enabled business park featuring IoT-controlled systems, energy-efficient glass, and fully automated security.",
      location: "Austin, TX",
      sqft: 400000,
      duration: "20 months",
      category: "Commercial",
      image_url:
        "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      order_index: 7,
    },
    {
      title: "Green Eco Apartments",
      description:
        "Luxury eco-friendly apartments with solar energy, rainwater harvesting, and smart automation.",
      location: "San Francisco, CA",
      sqft: 220000,
      duration: "26 months",
      category: "Residential",
      image_url:
        "https://images.pexels.com/photos/36366/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      order_index: 8,
    },
    {
      title: "University Science Wing",
      description:
        "High-tech academic research facility with advanced laboratory and digital learning environments.",
      location: "Boston, MA",
      sqft: 145000,
      duration: "18 months",
      category: "Institutional",
      image_url:
        "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      order_index: 9,
    },
    {
      title: "Modern Stadium Arena",
      description:
        "Large-capacity multipurpose stadium with retractable roofing and immersive LED display.",
      location: "Las Vegas, NV",
      sqft: 550000,
      duration: "30 months",
      category: "Sports",
      image_url:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      order_index: 10,
    },
    {
      title: "IT Tech Innovation Hub",
      description:
        "State-of-the-art tech park featuring robotics labs, 5G communication nodes, and co-working pods.",
      location: "San Jose, CA",
      sqft: 260000,
      duration: "17 months",
      category: "Commercial",
      image_url:
        "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      order_index: 11,
    },
    {
      title: "Luxury Beach Resort",
      description:
        "Ocean-view resort with private villas, infinity pools, and fine-dining rooftop spaces.",
      location: "Honolulu, HI",
      sqft: 180000,
      duration: "28 months",
      category: "Hospitality",
      image_url:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      order_index: 12,
    },
  ];

  const testimonials = [
    {
      client_name: "Sarah Johnson",
      company: "TechCorp Industries",
      quote:
        "BuildCraft exceeded all our expectations. Their attention to detail and commitment to quality is unmatched. Our new office space is absolutely stunning!",
      rating: 5,
      order_index: 1,
    },
    {
      client_name: "Michael Chen",
      company: "Urban Living Development",
      quote:
        "Working with BuildCraft was a pleasure from start to finish. They delivered our residential project on time and within budget, handling every challenge with professionalism.",
      rating: 5,
      order_index: 2,
    },
    {
      client_name: "Emily Rodriguez",
      company: "Retail Innovations LLC",
      quote:
        "The renovation of our shopping center transformed the entire property. BuildCraft's team was professional, efficient, and the results speak for themselves.",
      rating: 5,
      order_index: 3,
    },
    {
      client_name: "Aarav Mehta",
      company: "Skyline Builders Pvt Ltd",
      quote:
        "BuildCraft team truly understands modern architecture. Their execution quality and finishing is world-class. Our luxury apartment lobby now feels like a 7-star hotel.",
      rating: 5,
      order_index: 4,
    },
    {
      client_name: "Lisa Thompson",
      company: "GreenLeaf Resorts",
      quote:
        "From concept to completion, BuildCraft handled everything brilliantly. Our resort renovation project became a massive success thanks to their innovative ideas.",
      rating: 5,
      order_index: 5,
    },
    {
      client_name: "Rajesh Patel",
      company: "FutureWare Technologies",
      quote:
        "We wanted a workspace that inspires innovation — and BuildCraft nailed it! Their project delivery and interior planning is simply excellent.",
      rating: 5,
      order_index: 6,
    },
    {
      client_name: "Sophia Williams",
      company: "BlueOcean Restaurants",
      quote:
        "Our restaurant ambience completely transformed. Customers love the luxury interior and warm lighting design. Outstanding craftsmanship by BuildCraft!",
      rating: 5,
      order_index: 7,
    },
    {
      client_name: "Kabir Khan",
      company: "Royal Estates Group",
      quote:
        "BuildCraft managed a complex villa renovation with flawless precision. Great communication, superior finishes, and timely delivery. Highly recommended!",
      rating: 5,
      order_index: 8,
    },
  ];

  const galleryImages = [
    {
      title: "Office Lobby Transformation",
      before_url:
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
      after_url:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Commercial",
      order_index: 1,
    },
    {
      title: "Restaurant Interior Redesign",
      before_url:
        "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=800",
      after_url:
        "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Hospitality",
      order_index: 2,
    },
    {
      title: "Residential Kitchen Remodel",
      before_url:
        "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800",
      after_url:
        "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Residential",
      order_index: 3,
    },
    {
      title: "Warehouse Modernization",
      before_url:
        "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800",
      after_url:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Industrial",
      order_index: 4,
    },
    {
      title: "Luxury Living Room Upgrade",
      before_url:
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800",
      after_url:
        "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Residential",
      order_index: 5,
    },
    {
      title: "High-End Office Workspace Revamp",
      before_url:
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
      after_url:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Commercial",
      order_index: 6,
    },
    {
      title: "Villa Outdoor & Pool Beautification",
      before_url:
        "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=800",
      after_url:
        "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Residential",
      order_index: 7,
    },
    {
      title: "Hotel Lobby Modern Renovation",
      before_url:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      after_url:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Hospitality",
      order_index: 8,
    },
  ];

  try {
    await supabase.from("projects").insert(projects);
    await supabase.from("testimonials").insert(testimonials);
    await supabase.from("gallery_images").insert(galleryImages);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
