import { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });
    
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) throw new Error('Failed to send message');
      
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(s => ({...s, success: false})), 5000);
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Could not connect to server. Please try again.' });
    }
  };

  return (
    <AnimatedSection id="contact">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="gsap-animate glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-brandAccent/20 blur-[100px] rounded-full"></div>
          
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-brandAccent">Touch</span>
            </h2>
            <p className="text-white/60 mb-2">
              Have a question or want to work together? Drop me a message!
            </p>
            <p className="text-white/90 font-medium">
              Email: himanshuchaudhari0987@gmail.com | Mobile: +91-9120728564
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brandAccent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brandAccent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">Message</label>
              <textarea 
                id="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brandAccent transition-colors resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status.submitting}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${status.submitting ? 'bg-white/20 text-white cursor-not-allowed' : 'bg-brandAccent text-dark hover:bg-white'}`}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {status.success && <p className="text-green-400 text-center font-medium mt-4 animate-pulse">Message sent successfully!</p>}
            {status.error && <p className="text-red-400 text-center font-medium mt-4">{status.error}</p>}
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
