import React, { useState, useEffect } from 'react';
import { ConsultSubmission } from '../types';
import { Phone, MessageCircle, Send, CheckCircle2, Server, Trash, RefreshCw } from 'lucide-react';

interface ContactFormProps {
  preloadedProjectType?: string;
  preloadedBudget?: string;
  preloadedAreaSize?: number;
}

export default function ContactForm({
  preloadedProjectType = '',
  preloadedBudget = '',
  preloadedAreaSize = 1500,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Apartment Interior',
    areaSize: '1500',
    budget: '',
    details: '',
  });

  const [submissions, setSubmissions] = useState<ConsultSubmission[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'submit' | 'tickets'>('submit');

  // Load submissions on mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem('consult_submissions');
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  // Sync preloaded structures
  useEffect(() => {
    if (preloadedProjectType) {
      setFormData((prev) => ({
        ...prev,
        projectType: preloadedProjectType,
        budget: preloadedBudget || prev.budget,
        areaSize: String(preloadedAreaSize) || prev.areaSize,
      }));
    }
  }, [preloadedProjectType, preloadedBudget, preloadedAreaSize]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage('Please fill out Name, Email, and Phone fields.');
      return;
    }

    const newSubmission: ConsultSubmission = {
      id: `lead-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      areaSize: formData.areaSize + ' sqft',
      budget: formData.budget || 'Custom Budget Quotation',
      details: formData.details || 'No details provided.',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Pending',
    };

    const updated = [newSubmission, ...submissions];
    setSubmissions(updated);
    localStorage.setItem('consult_submissions', JSON.stringify(updated));

    setIsSuccess(true);
    setErrorMessage('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Apartment Interior',
      areaSize: '1500',
      budget: '',
      details: '',
    });

    // Reset status shortly
    setTimeout(() => {
      setIsSuccess(false);
      setActiveTab('tickets');
    }, 2500);
  };

  const clearTickets = () => {
    if (window.confirm('Are you sure you want to completely flush the local booking ticket queue?')) {
      setSubmissions([]);
      localStorage.removeItem('consult_submissions');
    }
  };

  const simulateStatusUpdate = (id: string, newStatus: 'Scheduled' | 'Completed') => {
    const updated = submissions.map((sub) => {
      if (sub.id === id) {
        return { ...sub, status: newStatus };
      }
      return sub;
    });
    setSubmissions(updated);
    localStorage.setItem('consult_submissions', JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0C0C0C] border-t border-white/10 relative">
      <div className="absolute top-10 right-10 w-96 h-96 bg-heritage-gold/5 blur-[150px] rounded-none pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="glass-card p-8 md:p-16 rounded-none relative overflow-hidden border border-white/10">
          
          {/* Subtle Background Art Accent */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-heritage-gold/5 blur-[120px] rounded-none pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            
            {/* Left Content Column */}
            <div className="space-y-10">
              <div>
                <span className="font-sans text-xs font-black text-heritage-gold tracking-[0.25em] uppercase">
                  // DIRECT ACCESS & CORRESPONDENCE
                </span>
                <h2 className="mt-4 font-sans text-4xl md:text-6xl font-black text-on-primary uppercase tracking-tighter leading-none">
                  SECURE <br/>
                  <span className="text-stroke-white italic">CONSULTATION</span>
                </h2>
                <p className="mt-6 font-sans text-sm text-on-primary-container leading-relaxed font-light">
                  Our professional team of architects and project execution engineers is ready to provide elite consulting for all of your construction & interior desires. Submit a ticket model and receive a detailed layout estimate in under 24 hours.
                </p>
              </div>

              {/* Instant CTAs */}
              <div className="space-y-6">
                
                {/* 1. Direct Office Phone */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-none flex items-center justify-center group-hover:bg-heritage-gold transition-colors duration-300">
                    <Phone className="w-5 h-5 text-heritage-gold group-hover:text-deep-obsidian transition-colors" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-heritage-gold/70 font-semibold block">
                      // Direct Hotlines
                    </span>
                    <a href="tel:+8801634319351" className="font-sans text-lg md:text-xl text-on-primary font-black tracking-tight hover:text-heritage-gold transition-colors block uppercase">
                      +8801634319351
                    </a>
                  </div>
                </div>

                {/* 2. Direct WhatsApp Lead Architect Routing */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-none flex items-center justify-center group-hover:bg-heritage-gold transition-colors duration-300">
                    <MessageCircle className="w-5 h-5 text-heritage-gold group-hover:text-deep-obsidian transition-colors" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-heritage-gold/70 font-semibold block">
                      // Lead Architectural Chat
                    </span>
                    <a
                      href="https://wa.me/8801634319351"
                      target="_blank"
                      rel="referrer"
                      className="font-sans text-lg md:text-xl text-heritage-gold font-black tracking-tight hover:underline block uppercase"
                    >
                      Message Architect
                    </a>
                  </div>
                </div>

              </div>

              {/* Standard tabs to switch between form entry and previous ticket logs */}
              <div className="flex flex-col sm:flex-row gap-3 border-t border-white/10 pt-8">
                <button
                  type="button"
                  onClick={() => setActiveTab('submit')}
                  className={`px-5 py-3 rounded-none text-xs tracking-widest uppercase font-black cursor-pointer transition-all border ${
                    activeTab === 'submit'
                      ? 'bg-heritage-gold text-deep-obsidian border-heritage-gold'
                      : 'bg-white/5 border-white/10 text-on-primary hover:bg-white/10'
                  }`}
                >
                  Create Estimate Ticket
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('tickets')}
                  className={`px-5 py-3 rounded-none text-xs tracking-widest uppercase font-black cursor-pointer transition-all border flex items-center gap-2 ${
                    activeTab === 'tickets'
                      ? 'bg-heritage-gold text-deep-obsidian border-heritage-gold'
                      : 'bg-white/5 border-white/10 text-on-primary hover:bg-white/10'
                  }`}
                >
                  Submitted Tickets ({submissions.length})
                </button>
              </div>

            </div>

            {/* Right Column Content Box: Dynamic rendering depending on active tab */}
            <div className="bg-white/[0.01]/[0.02] p-8 rounded-none border border-white/10 relative shadow-2xl">
              
              {activeTab === 'submit' ? (
                <>
                  <h3 className="font-sans text-xs font-black tracking-widest text-[#FFFFFF] uppercase mb-6">// APPOINTMENT PARAMETERS</h3>
                  
                  {errorMessage && (
                    <div className="mb-4 bg-red-950/40 border border-red-500/50 p-4 text-xs font-mono text-red-100 uppercase tracking-wider animate-zoom-in">
                      ⚠ ERROR: {errorMessage}
                    </div>
                  )}

                  {isSuccess ? (
                    <div className="flex flex-col items-center justify-center text-center py-12 space-y-4 animate-zoom-in">
                      <CheckCircle2 className="w-16 h-16 text-heritage-gold animate-bounce" />
                      <h4 className="font-sans text-xl text-on-primary font-black uppercase tracking-tight">Ticket Saved successfully</h4>
                      <p className="text-xs text-on-primary-container max-w-sm">
                        Consultation record saved on local sandboxed database! View your queue details in the neighboring Submitted Tickets section.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-sans tracking-widest text-heritage-gold font-black block leading-none">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ex. Rahat Chowdhury"
                          className="w-full bg-deep-obsidian border border-white/10 rounded-none px-4 py-3 text-on-primary focus:ring-0 focus:border-heritage-gold placeholder:text-white/25 text-xs font-medium"
                        />
                      </div>

                      {/* Contact grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-sans tracking-widest text-heritage-gold font-black block leading-none">
                            Contact Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="rahat@example.com"
                            className="w-full bg-deep-obsidian border border-white/10 rounded-none px-4 py-3 text-on-primary focus:ring-0 focus:border-heritage-gold placeholder:text-white/25 text-xs"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-sans tracking-widest text-heritage-gold font-black block leading-none">
                            Contact Phone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+880 1712-345678"
                            className="w-full bg-deep-obsidian border border-white/10 rounded-none px-4 py-3 text-on-primary focus:ring-0 focus:border-heritage-gold placeholder:text-white/25 text-xs"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Project Sector */}
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-sans tracking-widest text-heritage-gold font-black block leading-none">
                            Space Category
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full bg-deep-obsidian border border-white/10 rounded-none px-4 py-3 text-xs font-black uppercase text-on-primary focus:ring-0 focus:border-heritage-gold"
                          >
                            <option value="Apartment Interior">Apartment Interior</option>
                            <option value="Home Exterior">Home Exterior</option>
                            <option value="Corporate Office HQ">Corporate Office HQ</option>
                            <option value="Beauty Parlour Design">Beauty Parlour Design</option>
                            <option value="Clinic/Medical Ward">Clinic/Medical Ward</option>
                            <option value="Premium Gym Layout">Premium Gym Layout</option>
                          </select>
                        </div>

                        {/* Budget field */}
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-sans tracking-widest text-heritage-gold font-black block leading-none">
                            Calculated Budget Range
                          </label>
                          <input
                            type="text"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            placeholder="Ex. BDT 45 Lakhs"
                            className="w-full bg-deep-obsidian border border-white/10 rounded-none px-4 py-3 text-on-primary focus:ring-0 focus:border-heritage-gold placeholder:text-white/25 text-xs"
                          />
                        </div>
                      </div>

                      {/* Vision details */}
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-sans tracking-widest text-heritage-gold font-black block leading-none">
                          Space details & Vision
                        </label>
                        <textarea
                          name="details"
                          rows={3}
                          value={formData.details}
                          onChange={handleInputChange}
                          placeholder="Briefly describe your vision (e.g. materials, layout, priorities)..."
                          className="w-full bg-deep-obsidian border border-white/10 rounded-none px-4 py-3 text-on-primary focus:ring-0 focus:border-heritage-gold placeholder:text-white/25 text-xs resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-heritage-gold text-deep-obsidian hover:bg-white py-5 rounded-none text-xs tracking-widest font-black uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border border-heritage-gold"
                      >
                        <Send className="w-4 h-4 text-deep-obsidian" />
                        INITIATE CONSULTATION
                      </button>

                    </form>
                  )}
                </>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center leading-none">
                    <h3 className="font-sans text-xs font-black text-on-primary uppercase tracking-widest flex items-center gap-2">
                      <Server className="w-5 h-5 text-heritage-gold animate-pulse" />
                      Client Lead Queue
                    </h3>
                    {submissions.length > 0 && (
                      <button
                        onClick={clearTickets}
                        className="text-red-400 hover:text-red-200 text-[10px] uppercase font-mono tracking-widest flex items-center gap-1 cursor-pointer"
                      >
                        <Trash className="w-3.5 h-3.5" /> Clear All
                      </button>
                    )}
                  </div>

                  <p className="text-[11px] text-on-primary-container font-light">
                    These leads reside in the client Sandboxed Storage. You can simulate direct architectural responses to test scheduler functionality.
                  </p>

                  <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
                    {submissions.length > 0 ? (
                      submissions.map((lead) => (
                        <div
                          key={lead.id}
                          className="bg-black/50 p-4 rounded-none border border-white/10 space-y-3 relative group"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-xs text-on-primary font-black uppercase tracking-wide block">{lead.name}</span>
                              <span className="text-[10px] text-on-primary-container font-mono block mt-1">
                                {lead.email} | {lead.phone}
                              </span>
                            </div>
                            <span
                              className={`px-2.5 py-1 rounded-none text-[9px] uppercase font-mono font-bold ${
                                lead.status === 'Pending'
                                  ? 'bg-yellow-500/25 text-yellow-300 border border-yellow-500/40'
                                  : lead.status === 'Scheduled'
                                  ? 'bg-blue-500/25 text-blue-300 border border-blue-500/40'
                                  : 'bg-green-500/25 text-green-300 border border-green-500/40'
                              }`}
                            >
                              {lead.status}
                            </span>
                          </div>

                          <div className="text-[11px] text-on-primary-container/90 border-t border-white/10 pt-2 grid grid-cols-2 gap-2">
                            <div>
                              <span className="text-[9px] text-heritage-gold block uppercase font-bold">// Project Space</span>
                              <span className="text-on-primary font-medium">{lead.projectType}</span>
                            </div>
                            <div>
                              <span className="text-[9px] text-heritage-gold block uppercase font-bold">// Cost Projection</span>
                              <span className="text-on-primary font-medium">{lead.budget}</span>
                            </div>
                          </div>

                          <div className="text-xs text-on-primary-container font-light italic leading-relaxed">
                            "{lead.details}"
                          </div>

                          {/* Simulate architectural states */}
                          {lead.status === 'Pending' && (
                            <div className="flex gap-2 pt-1 border-t border-white/10">
                              <button
                                onClick={() => simulateStatusUpdate(lead.id, 'Scheduled')}
                                className="text-[9px] bg-white/5 border border-white/10 hover:bg-heritage-gold text-on-primary hover:text-deep-obsidian py-1.5 px-3 rounded-none uppercase font-black tracking-widest flex items-center gap-1 cursor-pointer transition-all"
                              >
                                <RefreshCw className="w-2.5 h-2.5" /> Set Scheduled
                              </button>
                            </div>
                          )}
                          {lead.status === 'Scheduled' && (
                            <div className="flex gap-2 pt-1 border-t border-white/10">
                              <button
                                onClick={() => simulateStatusUpdate(lead.id, 'Completed')}
                                className="text-[9px] bg-green-500/20 border border-green-500/45 hover:bg-green-500 text-green-300 hover:text-deep-obsidian py-1.5 px-3 rounded-none uppercase font-black tracking-widest flex items-center gap-1 cursor-pointer transition-all"
                              >
                                <CheckCircle2 className="w-2.5 h-2.5" /> Handover Complete
                              </button>
                            </div>
                          )}

                          <span className="absolute bottom-2 right-3 text-[9px] text-on-primary-container font-mono opacity-60">
                            {lead.date}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12 text-on-primary-container/80 text-[10px] font-mono uppercase tracking-wider p-4 bg-black/20 border border-white/10 rounded-none">
                        No tickets in sandbox history. Enter parameters in the Create Estimate Ticket container to schedule an appointment.
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
