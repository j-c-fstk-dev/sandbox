"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For static site, this would typically integrate with a form service
    alert(
      "Thank you for your message! Since this is a static demo, your message was not actually sent. In a real implementation, this would be connected to a contact form service."
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen py-16 px-4" data-oid="u00t3op">
      <div className="max-w-4xl mx-auto" data-oid="05zhtgh">
        <div className="text-center mb-16 animate-fade-in" data-oid="sobgeq4">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-neutral-text-dark mb-6" data-oid="6r3.1yl">
            Contact Us
          </h1>
          <p className="text-xl text-neutral-dark-gray leading-relaxed max-w-2xl mx-auto" data-oid="nmk2z18">
            Have questions about #MonthlyEarthDay? Want to get involved or share
            your story? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-oid="kkfohg:">
          {/* Contact Information */}
          <div className="animate-slide-up" data-oid="9tt6fq-">
            <h2 className="font-serif font-bold text-2xl text-neutral-text-dark mb-8" data-oid="szplf_h">
              Get in Touch
            </h2>

            <div className="space-y-6" data-oid="saf1ufw">
              {/* Email */}
              <div className="flex items-start space-x-4" data-oid="ilxry70">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-green rounded-full flex items-center justify-center" data-oid="j-mne09">
                  <svg
                    className="w-6 h-6 text-neutral-text-light"
                    fill="currentColor"
                    viewBox="0 0 20 20" data-oid="uftjabq">

                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" data-oid="5gjmc2l" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" data-oid="y5q5le2" />
                  </svg>
                </div>
                <div data-oid="i9n15aq">
                  <h3 className="font-semibold text-neutral-text-dark mb-2" data-oid=":z.:a9a">
                    Email Us
                  </h3>
                  <p className="text-neutral-dark-gray mb-2" data-oid="ougvrk-">
                    For general inquiries, partnership opportunities, or support
                  </p>
                  <a
                    href="mailto:MonthlyEarthDay@gmail.com"
                    className="text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200" data-oid="c_h5uo5">

                    MonthlyEarthDay@gmail.com
                  </a>
                </div>
              </div>

              {/* Twitter */}
              <div className="flex items-start space-x-4" data-oid="pcgh-40">
                <div className="flex-shrink-0 w-12 h-12 bg-earth-blue rounded-full flex items-center justify-center" data-oid="xxopb17">
                  <svg
                    className="w-6 h-6 text-neutral-text-light"
                    fill="currentColor"
                    viewBox="0 0 24 24" data-oid="36:_:_m">

                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-oid="mgvtveo" />
                  </svg>
                </div>
                <div data-oid="h2n3986">
                  <h3 className="font-semibold text-neutral-text-dark mb-2" data-oid="0zw_s_7">
                    Follow Us
                  </h3>
                  <p className="text-neutral-dark-gray mb-2" data-oid="li4g5b_">
                    Stay updated on actions, events, and community highlights
                  </p>
                  <a
                    href="https://x.com/highlyartistic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200" data-oid="dnj3_-v">

                    @highlyartistic
                  </a>
                </div>
              </div>

              {/* Community */}
              <div className="flex items-start space-x-4" data-oid="_i-fip4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-green-secondary rounded-full flex items-center justify-center" data-oid="9x0k-qy">
                  <svg
                    className="w-6 h-6 text-neutral-text-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24" data-oid="e2dr1t2">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-oid="apmdrem" />

                  </svg>
                </div>
                <div data-oid="cd8hnsk">
                  <h3 className="font-semibold text-neutral-text-dark mb-2" data-oid="qkgtz-r">
                    Join Our Community
                  </h3>
                  <p className="text-neutral-dark-gray mb-2" data-oid="gixt9cu">
                    Connect with fellow environmental advocates worldwide
                  </p>
                  <a
                    href="/community"
                    className="text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200" data-oid="t4:x77e">

                    Visit Community Feed →
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 p-6 bg-neutral-light-gray rounded-lg" data-oid="q_o9_n-">
              <h3 className="font-semibold text-neutral-text-dark mb-4" data-oid="8pe9du:">
                Quick Links
              </h3>
              <div className="space-y-2" data-oid="79ysfcb">
                <a
                  href="/about"
                  className="block text-neutral-dark-gray hover:text-primary-green transition-colors duration-200" data-oid="9ollxp_">

                  Learn About Our Mission
                </a>
                <a
                  href="/actions"
                  className="block text-neutral-dark-gray hover:text-primary-green transition-colors duration-200" data-oid="3z_68ls">

                  Explore Environmental Actions
                </a>
                <a
                  href="/calendar"
                  className="block text-neutral-dark-gray hover:text-primary-green transition-colors duration-200" data-oid="upj7ffd">

                  View Upcoming Events
                </a>
                <a
                  href="/testimonials"
                  className="block text-neutral-dark-gray hover:text-primary-green transition-colors duration-200" data-oid="7i984g0">

                  Read Success Stories
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" data-oid="ya8rq3l">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-medium-gray" data-oid="lk69fal">
              <h2 className="font-serif font-bold text-2xl text-neutral-text-dark mb-6" data-oid="g0y.f-j">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6" data-oid="o:_7o7q">
                <div data-oid=":h-psnx">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-text-dark mb-2" data-oid="ktnfhlt">

                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-colors duration-200"
                    placeholder="Enter your full name" data-oid="bbb..z3" />

                </div>

                <div data-oid="tdp_pz2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-text-dark mb-2" data-oid="e3e30jo">

                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-colors duration-200"
                    placeholder="Enter your email address" data-oid="ky09esr" />

                </div>

                <div data-oid="_ah3-ev">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-text-dark mb-2" data-oid="0y0n__b">

                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-colors duration-200 resize-vertical"
                    placeholder="Tell us about your question, idea, or how you'd like to get involved..." data-oid="k958lsf" />

                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={handleSubmit} data-oid="dir3djn">

                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-neutral-light-gray rounded-lg" data-oid="f5riud.">
                <p className="text-sm text-neutral-dark-gray" data-oid="v9tdy3h">
                  <strong data-oid="_y-d788">Note:</strong> This is a static demo site. In a real
                  implementation, this form would be connected to a contact form
                  service to actually send messages.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-oid="-3qf4n.">
          <div className="bg-gradient-to-r from-primary-green to-primary-green-dark text-neutral-text-light rounded-lg p-8" data-oid="fh35o3o">
            <h3 className="font-serif font-bold text-2xl mb-4" data-oid="kiec4k3">
              Ready to Take Action?
            </h3>
            <p className="text-lg mb-6 text-green-100" data-oid="3v3i3q9">
              Don't wait for the perfect moment. Join our next monthly action
              and start making a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-oid="f7orz0y">
              <Button
                variant="secondary"
                size="lg"
                href="/calendar"
                className="bg-neutral-text-light text-primary-green hover:bg-gray-100" data-oid="eqe33n-">

                View Calendar
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/actions"
                className="border-neutral-text-light text-neutral-text-light hover:bg-neutral-text-light hover:text-primary-green" data-oid="b5cj7so">

                Explore Actions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}