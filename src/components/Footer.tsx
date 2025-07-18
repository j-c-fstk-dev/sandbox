import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-text-dark text-neutral-text-light py-12" data-oid="7ysur6w">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="7cayubm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="g.4gu2c">
          {/* Logo and Description */}
          <div className="space-y-4" data-oid="--lnva1">
            <h3 className="font-serif font-bold text-xl text-primary-green" data-oid="yh_pjd3">
              #MonthlyEarthDay
            </h3>
            <p className="text-gray-300 leading-relaxed" data-oid="wm:5vra">
              A global movement for monthly action creating positive
              environmental impact. Join us on the 22nd of every month.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4" data-oid="_2fhr-h">
            <h4 className="font-semibold text-lg" data-oid="k2_mt:e">Quick Links</h4>
            <nav className="space-y-2" data-oid="uyzy68i">
              <a
                href="/about"
                className="block text-gray-300 hover:text-primary-green transition-colors duration-200" data-oid="l4hvu.g">

                About Us
              </a>
              <a
                href="/blog"
                className="block text-gray-300 hover:text-primary-green transition-colors duration-200" data-oid="shydnn1">

                Blog
              </a>
              <a
                href="/actions"
                className="block text-gray-300 hover:text-primary-green transition-colors duration-200" data-oid="9-3:.us">

                Actions
              </a>
              <a
                href="/community"
                className="block text-gray-300 hover:text-primary-green transition-colors duration-200" data-oid="j68qnpy">

                Community
              </a>
            </nav>
          </div>

          {/* Contact and Social */}
          <div className="space-y-4" data-oid="ftnzfgr">
            <h4 className="font-semibold text-lg" data-oid="z_m9a51">Connect With Us</h4>
            <div className="space-y-3" data-oid="l7nmm_o">
              <a
                href="mailto:MonthlyEarthDay@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-green transition-colors duration-200" data-oid="qu.yb9q">

                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20" data-oid="sxc26ti">

                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" data-oid="i-p22vf" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" data-oid="wdmmzs2" />
                </svg>
                <span data-oid="ket8c:e">MonthlyEarthDay@gmail.com</span>
              </a>
              <a
                href="https://x.com/highlyartistic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-green transition-colors duration-200" data-oid="3z4rayv">

                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24" data-oid="4tacoj6">

                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-oid="691nouf" />
                </svg>
                <span data-oid="l8gzqq.">@highlyartistic</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center" data-oid="3.9vc48">
          <p className="text-gray-400" data-oid="fugrxpa">
            © {new Date().getFullYear()} #MonthlyEarthDay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}