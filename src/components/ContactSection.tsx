import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from 'lucide-react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast({
          title: "Message Sent! 🚀",
          description: "Thanks for reaching out! Please check your email for confirmation.",
          duration: 5000,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: "Error ❌",
          description: data.message || "Failed to send your message. Please try again.",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Server Error ❌",
        description: "Unable to connect to the server. Try again later.",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="fade-up text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-off-white/80 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 fade-up">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold text-cyber-aqua mb-6">Get In Touch</h3>
                <p className="text-off-white/80 mb-8 leading-relaxed">
                  I'm always excited to collaborate on innovative projects and discuss new opportunities. 
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-cyber-blue rounded-lg flex items-center justify-center group-hover:bg-cyber-aqua transition-colors duration-300">
                      <Mail className="w-6 h-6 text-cyber-aqua group-hover:text-tech-navy" />
                    </div>
                    <div>
                      <h4 className="text-off-white font-semibold">Email</h4>
                      <a href="mailto:haridarshanhari123@gmail.com" className="text-cyber-aqua hover:text-cyber-aqua/80 transition-colors">
                        haridarshanhari123@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-cyber-blue rounded-lg flex items-center justify-center group-hover:bg-cyber-aqua transition-colors duration-300">
                      <Github className="w-6 h-6 text-cyber-aqua group-hover:text-tech-navy" />
                    </div>
                    <div>
                      <h4 className="text-off-white font-semibold">GitHub</h4>
                      <a href="https://github.com/haridarshan" target="_blank" rel="noopener noreferrer" className="text-cyber-aqua hover:text-cyber-aqua/80 transition-colors">
                        github.com/haridarshan
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-cyber-blue rounded-lg flex items-center justify-center group-hover:bg-cyber-aqua transition-colors duration-300">
                      <Linkedin className="w-6 h-6 text-cyber-aqua group-hover:text-tech-navy" />
                    </div>
                    <div>
                      <h4 className="text-off-white font-semibold">LinkedIn</h4>
                      <a href="https://linkedin.com/in/haridarshan" target="_blank" rel="noopener noreferrer" className="text-cyber-aqua hover:text-cyber-aqua/80 transition-colors">
                        linkedin.com/in/haridarshan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold text-cyber-aqua mb-4">Quick Response</h3>
                <p className="text-off-white/80">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  please don't hesitate to mention it in your message.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-up">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold text-cyber-aqua mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-off-white/80 mb-2">Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-off-white/80 mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-off-white/80 mb-2">Subject</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Project Discussion / Collaboration / General Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-off-white/80 mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project or what you'd like to discuss..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={loading}
                    className="w-full neon-button text-lg py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
