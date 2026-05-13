import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <h1>Next.js JavaScript App</h1>

        <p>
          Modern Next.js application using App Router
          and reusable components.
        </p>

        <button className="hero-btn">
          Explore More
        </button>
      </section>

      <section className="cards">
        <div className="card">
          <h2>Dashboard</h2>

          <p>
            Manage inventory and application data efficiently.
          </p>
        </div>

        <div className="card">
          <h2>Reports</h2>

          <p>
            Generate analytics and monitor performance easily.
          </p>
        </div>

        <div className="card">
          <h2>Security</h2>

          <p>
            Secure and scalable frontend application structure.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
} 