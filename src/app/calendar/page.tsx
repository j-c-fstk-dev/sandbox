"use client";

import { useState } from "react";
import Button from "@/components/Button"; // Assuming you might use Button for navigation
import Link from 'next/link'; // Import Link for navigation

// Function to generate Monthly Earth Day events
const generateMonthlyEarthDayEvents = (yearsToGenerate: number) => {
  const events = [];
  const today = new Date();
  const currentYear = today.getFullYear();

  for (let i = 0; i < yearsToGenerate; i++) {
    const year = currentYear + i;
    for (let month = 0; month < 12; month++) {
      const eventDay = 22;
      const eventDate = new Date(year, month, eventDay);

      if (eventDate >= today || (eventDate.toDateString() === today.toDateString())) {
        if (eventDate.getDate() === eventDay) {
          events.push({
            name: "Monthly Earth Day Action",
            date: eventDate.toDateString(),
            time: "All Day",
            description: "Join us for a global environmental action on the 22nd of the month!",
            tags: ["action", "community", "environment"],
            location: "Worldwide (Various Local Events)",
            slug: `monthly-earth-day-${year}-${month + 1}-${eventDay}`,
          });
        }
      }
    }
  }
  return events;
};

const monthlyEarthDayEvents = generateMonthlyEarthDayEvents(2);

// Sort events chronologically
monthlyEarthDayEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

// Find the next upcoming event
const nextUpcomingEvent = monthlyEarthDayEvents.find(event => new Date(event.date) >= new Date());

export default function CalendarPage() {
  const today = new Date();
  const [displayMonth, setDisplayMonth] = useState(today.getMonth());
  const [displayYear, setDisplayYear] = useState(today.getFullYear());

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Filter events for the currently displayed month and year INSIDE the component
  const eventsForDisplayMonth = monthlyEarthDayEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === displayMonth && eventDate.getFullYear() === displayYear;
  });

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (displayMonth === 0) {
        setDisplayMonth(11);
        setDisplayYear(displayYear - 1);
      } else {
        setDisplayMonth(displayMonth - 1);
      }
    } else {
      if (displayMonth === 11) {
        setDisplayMonth(0);
        setDisplayYear(displayYear + 1);
      } else {
        setDisplayMonth(displayMonth + 1);
      }
    }
  };

   const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="min-h-screen py-16 px-4" data-oid="calendar-page">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-primary-green mb-6"> {/* Changed text color to primary-green */}
            Calendar of Actions
          </h1>
          <p className="text-xl text-neutral-dark-gray leading-relaxed max-w-3xl mx-auto">
            Stay connected with our monthly environmental actions and community
            events. Mark your calendar and join us on the 22nd of every month!
          </p>
        </div>

        {/* Next Upcoming Event (still useful to highlight) - Adjusted styling */}
         {nextUpcomingEvent && (
          <div className="bg-[#c9e6db] text-[#365b36] rounded-lg p-8 mb-12 animate-slide-up"> {/* Updated background and text colors */}
            <h3 className="font-serif font-bold text-2xl mb-4 text-[#365b36]"> {/* Ensured heading text color matches section text color */}
              Next Monthly Earth Day:
            </h3>
            <p className="text-lg mb-4">
              {formatDate(nextUpcomingEvent.date)}
            </p>
            <p className="text-lg mb-6 text-[#737373] leading-relaxed"> {/* Updated paragraph text color and added leading-relaxed */}
              {nextUpcomingEvent.description}
            </p>
            <Link
              href={`/calendar/${nextUpcomingEvent.slug}`}
              className="border-2 border-[#365b36] text-[#365b36] hover:bg-[#365b36] hover:text-white transition px-6 py-3 rounded-full font-medium"> {/* Applied outlined button classes */}
              View Details
            </Link>
          </div>
        )}

        {/* Month Navigation and Display - Adjusted styling */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8 animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigateMonth("prev")}
              className="flex items-center space-x-2 text-[#365b36] hover:text-primary-green-dark font-medium transition-colors duration-200"> {/* Changed text color to match hero section */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"></path>
              </svg>
              <span>Previous</span>
            </button>

            <h2 className="font-serif font-bold text-2xl md:text-3xl text-primary-green"> {/* Changed text color to primary-green */}
              {months[displayMonth]} {displayYear}
            </h2>

            <button
              onClick={() => navigateMonth("next")}
              className="flex items-center space-x-2 text-[#365b36] hover:text-primary-green-dark font-medium transition-colors duration-200"> {/* Changed text color to match hero section */}
              <span>Next</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Display Events for the Month - Adjusted styling */}
          <div className="space-y-6">
            {eventsForDisplayMonth.length > 0 ? (
              eventsForDisplayMonth.map((event, index) => (
                <div key={event.slug} className="card animate-slide-up">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                     {/* Date Badge */}
                     <div className="flex-shrink-0">
                       <div className="bg-[#c9e6db] text-[#365b36] rounded-lg p-4 text-center min-w-[120px]"> {/* Updated background and text colors */}
                         <div className="text-2xl font-bold">
                           {new Date(event.date).getDate()}
                         </div>
                         <div className="text-sm opacity-90">
                           {months[new Date(event.date).getMonth()].slice(0, 3)}
                         </div>
                       </div>
                     </div>

                     {/* Event Details */}
                     <div className="flex-1">
                       <h3 className="font-serif font-bold text-xl md:text-2xl text-neutral-text-dark">
                         {event.name}
                       </h3>
                       <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-neutral-dark-gray mb-4">
                         <div className="flex items-center space-x-1">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                           <span className="text-sm">{event.time}</span>
                         </div>
                         <div className="flex items-center space-x-1">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                           </svg>
                           <span className="text-sm">{event.location}</span>
                         </div>
                       </div>
                       <p className="text-neutral-dark-gray leading-relaxed mb-4">
                         {event.description}
                       </p>
                       <div className="flex flex-wrap gap-2">
                         {event.tags.map((tag, tagIndex) => (
                           <span key={tagIndex} className="tag tag-inactive text-xs">
                             {tag}
                           </span>
                         ))}
                       </div>
                        <div className="mt-4">
                          <Link
                            href={`/calendar/${event.slug}`}
                            className="text-[#365b36] hover:text-primary-green-dark font-medium transition-colors duration-200"> {/* Changed text color to match hero section */}
                            View Details →
                          </Link>
                        </div>
                     </div>
                   </div>
                 </div>
              ))
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="font-serif font-bold text-2xl text-neutral-text-dark mb-4">
                  No events scheduled
                </h3>
                <p className="text-neutral-dark-gray">
                  No events scheduled for {months[displayMonth]} {displayYear}.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action - Adjusting styling to match Hero Section */}
        <div className="mt-16 text-center bg-[#c9e6db] text-[#365b36] py-12 px-4 rounded-lg animate-slide-up"> {/* Updated background and text colors, added padding and rounded corners */}
          <div className="max-w-xl mx-auto">
            <h3 className="font-serif font-bold text-2xl mb-4 text-[#365b36]"> {/* Ensured heading text color matches section text color */}
              Never Miss an Action
            </h3>
            <p className="text-lg mb-6 text-[#737373] leading-relaxed"> {/* Updated paragraph text color and added leading-relaxed */}
              Stay updated on all our monthly environmental actions and
              community events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6"> {/* Added top margin for spacing */}

              {/* Button 1 - Matching filled style */}
              <Link
                href="/community"
                className="bg-[#017d8c] hover:bg-[#016a77] text-white transition px-6 py-3 rounded-full font-medium"> {/* Applied filled button classes */}
                Join Community
              </Link>

              {/* Button 2 - Matching outlined style */}
              <Link
                href="/contact"
                className="border-2 border-[#365b36] text-[#365b36] hover:bg-[#365b36] hover:text-white transition px-6 py-3 rounded-full font-medium"> {/* Applied outlined button classes */}
                Get Notifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>);
}