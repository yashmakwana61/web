'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export function AnimatedContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.industry) newErrors.industry = 'Please select an industry';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({ title: 'Message sent', description: 'We will get back to you within 24 hours.' });
      setFormData({ name: '', email: '', phone: '', company: '', industry: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: 'Error',
        description: error.message || 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="h-full">
        <Card className="max-w-2xl mx-auto h-full flex flex-col justify-center border-primary/20 bg-primary/5">
          <CardContent className="pt-12 pb-12 text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 15, delay: 0.2 }}>
              <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-6" />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-3">Message sent successfully</h3>
            <p className="text-muted-foreground text-lg">Our team will review your message and get back to you within 24 hours.</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-xl border-border">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl">Get in touch</CardTitle>
        <CardDescription className="text-base">Fill out the form below and our team will get back to you within 24 hours.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence>
            {[
              { id: 'name', label: 'Name *', type: 'text', placeholder: 'Your full name' },
              { id: 'email', label: 'Email *', type: 'email', placeholder: 'your.email@company.com' },
            ].map((field) => (
              <div key={field.id} className="space-y-2 relative">
                <Label htmlFor={field.id} className={`transition-colors duration-300 ${focusedField === field.id ? 'text-primary' : ''}`}>
                  {field.label}
                </Label>
                <Input
                  id={field.id}
                  type={field.type}
                  value={formData[field.id]}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  onFocus={() => setFocusedField(field.id)}
                  onBlur={() => setFocusedField(null)}
                  className={`text-foreground transition-all duration-300 bg-background ${errors[field.id] ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-primary'}`}
                  placeholder={field.placeholder}
                />
                <AnimatePresence>
                  {errors[field.id] && (
                    <motion.p initial={{ opacity: 0, x: -10, height: 0 }} animate={{ opacity: 1, x: 0, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-sm text-destructive flex items-center mt-1">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors[field.id]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="space-y-2 relative">
              <Label htmlFor="phone" className={`transition-colors duration-300 ${focusedField === 'phone' ? 'text-primary' : ''}`}>Phone *</Label>
              <PhoneInput
                id="phone"
                defaultCountry="US"
                value={formData.phone}
                onChange={(value) => handleChange('phone', value)}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                inputComponent={Input}
                className={`flex gap-3 items-center [&_input]:flex-1 ${errors.phone ? '[&_input]:border-destructive [&_input]:focus-visible:ring-destructive' : ''}`}
                placeholder="Your phone number"
              />
              <AnimatePresence>
                {errors.phone && (
                  <motion.p initial={{ opacity: 0, x: -10, height: 0 }} animate={{ opacity: 1, x: 0, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-sm text-destructive flex items-center mt-1">
                    <AlertCircle className="w-3 h-3 mr-1" /> {errors.phone}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-2 relative">
              <Label htmlFor="company" className={`transition-colors duration-300 ${focusedField === 'company' ? 'text-primary' : ''}`}>Company *</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                onFocus={() => setFocusedField('company')}
                onBlur={() => setFocusedField(null)}
                className={`text-foreground transition-all duration-300 bg-background ${errors.company ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-primary'}`}
                placeholder="Your company name"
              />
              <AnimatePresence>
                {errors.company && (
                  <motion.p initial={{ opacity: 0, x: -10, height: 0 }} animate={{ opacity: 1, x: 0, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-sm text-destructive flex items-center mt-1">
                    <AlertCircle className="w-3 h-3 mr-1" /> {errors.company}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </AnimatePresence>

          <div className="space-y-2 relative">
            <Label htmlFor="industry" className={`transition-colors duration-300 ${focusedField === 'industry' ? 'text-primary' : ''}`}>Industry *</Label>
            <Select value={formData.industry} onValueChange={(value) => handleChange('industry', value)}>
              <SelectTrigger id="industry" className={`text-foreground transition-all duration-300 ${errors.industry ? 'border-destructive focus:ring-destructive' : 'focus:ring-primary'}`} onFocus={() => setFocusedField('industry')} onBlur={() => setFocusedField(null)}>
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
              </SelectContent>
            </Select>
            <AnimatePresence>
              {errors.industry && (
                <motion.p initial={{ opacity: 0, x: -10, height: 0 }} animate={{ opacity: 1, x: 0, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-sm text-destructive flex items-center mt-1">
                  <AlertCircle className="w-3 h-3 mr-1" /> {errors.industry}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-2 relative">
            <Label htmlFor="message" className={`transition-colors duration-300 ${focusedField === 'message' ? 'text-primary' : ''}`}>Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className={`min-h-[120px] text-foreground transition-all duration-300 resize-none ${errors.message ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-primary'}`}
              placeholder="Tell us about your project or requirements..."
            />
            <AnimatePresence>
              {errors.message && (
                <motion.p initial={{ opacity: 0, x: -10, height: 0 }} animate={{ opacity: 1, x: 0, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-sm text-destructive flex items-center mt-1">
                  <AlertCircle className="w-3 h-3 mr-1" /> {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.div whileTap={{ scale: 0.98 }}>
            <Button type="submit" size="lg" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
              <span className={`flex items-center transition-opacity duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>Send message</span>
              {isSubmitting && <span className="absolute inset-0 flex items-center justify-center"><Loader2 className="h-5 w-5 animate-spin" /></span>}
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  );
}