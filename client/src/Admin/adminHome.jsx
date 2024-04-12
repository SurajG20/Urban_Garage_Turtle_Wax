import React from "react";
import Header from "./adminHeader";
import Footer from "../components/Footer";


function AdminDashboard() {
  return (
    <div className="bg-white min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow ">
        <section>
          <div className="container">
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AdminDashboard;
