
import React from "react";
import FloatNavBar from "../components/FloatNavBar";
import FloatFooter from "../components/FloatFooter";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <header className="w-full py-12 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-mono mb-4">CONTACT</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Reach out to the FLOAT.DISPATCH team with questions, submissions, or collaboration ideas.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-mono text-sm mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-mono text-sm mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block font-mono text-sm mb-2">Subject</label>
              <select
                id="subject"
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="submission">Content Submission</option>
                <option value="collaboration">Collaboration Proposal</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block font-mono text-sm mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-600 text-white font-mono py-2 px-4 rounded-md transition-colors"
            >
              Send Message
            </button>
            
            <p className="text-xs opacity-70 text-center">
              This is a placeholder form. Contact functionality will be implemented in the future.
            </p>
          </form>
        </div>
      </main>
      
      <FloatFooter />
    </div>
  );
};

export default ContactPage;
