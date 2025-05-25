import React from 'react';
import './project.css';
 
function WhyChooseUs() {
  const features = [
    { title: "Sustainability" },
    { title: "Skilled Team" },
    { title: "Customer Centric Approach" },
  ];

  return (
    <section className="py-12 px-6">
      <h1 className="text-5xl font-bold mb-8 text-center">Why Choose Us</h1>
      <div className="max-w-4xl mx-auto space-y-6 text-lg">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4">
            <p><strong>{feature.title}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseCampusFix() {
  const reasons = [
    {
      title: "1. Easy to Use",
      description: "Simple and user-friendly interface for students and staff to log complaints quickly.",
    },
    {
      title: "2. Fast Response",
      description: "Complaints are immediately routed to the relevant maintenance team for quick action.",
    },
    {
      title: "3. Transparent Tracking",
      description: "Check the status of your complaint in real-time — from submission to resolution.",
    },
    {
      title: "4. Organized Management",
      description: "Admins can view, filter, and manage all complaints efficiently in one place.",
    },
    {
      title: "5. Photo Support",
      description: "Users can upload images to clearly show the problem, helping technicians respond better.",
    },
    {
      title: "6. Eco-Friendly Approach",
      description: "Our system reduces paper-based complaint processes and encourages digital efficiency.",
    },
    {
      title: "7. Free and Reliable",
      description: "Hosted on reliable platforms for uninterrupted access — and completely free for campus users!",
    },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-4xl font-bold mb-8 text-center">Why Choose CampusFix?</h2>
      <div className="max-w-4xl mx-auto space-y-6 text-lg">
        {reasons.map((reason, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div>
              <p><strong>{reason.title}</strong></p>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ClientTestimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "R. Johnson provided outstanding service. The electricians were professional, knowledgeable, and delivered sustainable solutions. I highly recommend their eco-friendly electrical services.",
    },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-4xl font-bold mb-8 text-center">Client Testimonials</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div>
              <p><strong>{testimonial.name}</strong></p>
              <p>"{testimonial.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="bg-lime-200 font-sans">
      <WhyChooseUs />
      <hr className="border-t-2 border-gray-800" />
      <WhyChooseCampusFix />
      <hr className="border-t-2 border-gray-800" />
      <ClientTestimonials />
    </div>
  );
}

export default App;