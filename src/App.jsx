import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import LandingPage from "../components/Landingpage.jsx";
import Navbar from "../components/Navbar.jsx";
import "./App.css";
import CategoryPage from "../components/CategoryPage.jsx";
import ScrollToTop from "../utils/ScrollToTop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/contact" element={<LandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// ### **Navbar Suggestions:**
// 1. **Logo** (Top left with a prominent position)
// 2. **Navigation Links**:
//    - Home
//    - About Us
//    - Products
//      - By Category (e.g., Tires, Engine Parts, Suspension, etc.)
//      - By Brand
//    - Services
//    - Contact Us
//    - FAQs
//    - Offers or Promotions
//    - Login/Sign Up (if applicable)
// 3. **Search Bar**:
//    - A prominent search bar to allow users to search for specific spare parts.
// 4. **Call to Action**:
//    - Add "Order Now" or "Get a Quote" buttons.
// 5. **Language Selector** (if multilingual support is needed).
// 6. **Contact Information**:
//    - Add a phone icon with a clickable phone number and a "WhatsApp Us" button.

// ---

// ### **Landing Page (Post-Hero Section):**
// After the hero slider, you can structure the sections as follows:

// #### **1. About Section:**
//    - A concise "Who We Are" or "Why Choose Us" section with a few lines about your company, its mission, and values.

// #### **2. Featured Categories:**
//    - Show featured categories or top-selling spare parts using iconography or images (e.g., Tires, Brakes, Engine Components).
//    - Add a hover effect showing a "Shop Now" button.

// #### **3. Search by Vehicle Compatibility:**
//    - Create a tool that lets users search for parts based on vehicle make, model, and year.
//    - Example: Dropdowns for brand, model, and type of part.

// #### **4. Testimonials Section:**
//    - Showcase reviews or feedback from satisfied customers with images or videos.

// #### **5. Featured Products:**
//    - A section with a grid layout highlighting popular products with prices, ratings, and "Add to Cart" or "Enquire Now" buttons.

// #### **6. Services Section:**
//    - Highlight additional services offered, such as installation, delivery, or repair.
//    - Use icons for each service for a clean look.

// #### **7. Offers and Promotions:**
//    - Dedicated area for special deals, discounts, or limited-time offers.

// #### **8. Blog or News Section:**
//    - Include automotive-related articles, tips, and guides to attract search engine traffic and engage customers.

// #### **9. Call-to-Action Banner:**
//    - Example: "Looking for a specific part? Contact us now!"

// #### **10. Partner or Brand Logos:**
//    - Show logos of brands you carry or partner with (e.g., Bosch, Michelin).

// #### **11. Footer:**
//    - Organized into:
//      - Quick Links
//      - Contact Information (Address, Phone, Email)
//      - Newsletter Subscription
//      - Social Media Links

// ---

// ### **Additional Functionalities:**
// 1. **Spare Part Finder Tool**:
//    - A more advanced tool to narrow down parts by entering a vehicle's VIN or part number.
// 2. **Live Chat Support**:
//    - Add a live chat widget for instant communication.
// 3. **Product Filters**:
//    - Allow filtering products by price, brand, category, and vehicle compatibility.
// 4. **Wishlist**:
//    - Add a "Save for Later" or "Wishlist" feature.
// 5. **Responsive Design**:
//    - Ensure the site is fully responsive across mobile, tablet, and desktop devices.

// ---

// ### **Design Ideas for Visual Appeal:**
// 1. **Consistency**:
//    - Use a clean and consistent color palette (e.g., black, gray, and red to evoke automotive themes).
// 2. **High-Quality Images**:
//    - Feature high-quality images of parts, vehicles, and tools.
// 3. **Typography**:
//    - Use bold and modern fonts for headings; keep body text clean and legible.
// 4. **Animations**:
//    - Add subtle animations when scrolling or hovering over elements.
// 5. **Interactive Features**:
//    - For instance, allow users to rotate product images.

// ---

// Would you like help wireframing or designing any specific section?
