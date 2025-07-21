"use client";

import { useState } from "react";

// Function to generate Monthly Earth Day events
const generateMonthlyEarthDayEvents = (yearsToGenerate: number) => {
  const events = [];
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  for (let i = 0; i < yearsToGenerate; i++) {
    const year = currentYear + i;
    for (let month = 0; month < 12; month++) {
      // Earth Day is on the 22nd
      const eventDay = 22;
      const eventDate = new Date(year, month, eventDay);

      // Only add events that are in the future (or today)
      if (eventDate >= today || (eventDate.toDateString() === today.toDateString())) {
         // Check if the date is valid (e.g., no 31st in Feb)
        if (eventDate.getDate() === eventDay) {
          events.push({
            name: "Monthly Earth Day Action",
            date: eventDate.toDateString(),
            time: "All Day", // Default time, can be customized later
            description: "Join us for a global environmental action on the 22nd of the month!", // Default description
            tags: ["action", "community", "environment"],
            location: "Worldwide (Various Local Events)", // Default location
            slug: `monthly-earth-day-${year}-${month + 1}-${eventDay}` // Unique slug for the detail page
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
  const [selectedTag, setSelectedTag] = useState("");

  const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"];

  // Filter events by selected tag
  const filteredEvents = monthlyEarthDayEvents.filter((event) => {
    const matchesTag = selectedTag === "" || event.tags.includes(selectedTag);
    return matchesTag;
  });

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
    <div className="min-h-screen py-16 px-4" data-oid="hv5q5w:">
      <div className="max-w-6xl mx-auto" data-oid="r69n85p">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in" data-oid="22lrc7e">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-neutral-text-dark mb-6" data-oid="m_0sll_">
            Calendar of Actions
          </h1>
          <p className="text-xl text-neutral-dark-gray leading-relaxed max-w-3xl mx-auto" data-oid="d-ykgew">
            Stay connected with our monthly environmental actions and community
            events. Mark your calendar and join us on the 22nd of every month!
          </p>
        </div>

        {/* Next Upcoming Event */}
        {nextUpcomingEvent && (
          <div className="bg-primary-green text-neutral-text-light rounded-lg p-8 mb-12 animate-slide-up" data-oid="upcoming-event">
            <h3 className="font-serif font-bold text-2xl mb-4" data-oid="upcoming-event-title">
              Next Monthly Earth Day:
            </h3>
            <p className="text-lg mb-4" data-oid="upcoming-event-date">
              {formatDate(nextUpcomingEvent.date)}
            </p>
            <p className="text-lg mb-6 text-green-100" data-oid="upcoming-event-description">
              {nextUpcomingEvent.description}
            </p>
            <a
              href={`/calendar/${nextUpcomingEvent.slug}`}
              className="bg-neutral-text-light text-primary-green px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200" data-oid="upcoming-event-cta">

              View Details
            </a>
          </div>
        )}

        {/* Event Filter Tags */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8 animate-slide-up" data-oid="_tkhqic">
           {/* Filter by type will be implemented later if needed for generated events */}
             <p className="text-neutral-dark-gray text-center">Monthly Earth Day events are scheduled for the 22nd of every month.</p>
        </div>

        {/* Events List (Carousel or List) */}
        <div className="space-y-6" data-oid="3vriz1k">
          {filteredEvents.length > 0 ?
          filteredEvents.map((event, index) => (
             <div key={event.slug} className="card animate-slide-up" data-oid={`event-card-${index}`}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Date Badge */}
                  <div className="flex-shrink-0">
                    <div className="bg-primary-green text-neutral-text-light rounded-lg p-4 text-center min-w-[120px]">
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
                    <h3 className="font-serif font-bold text-xl md:text-2xl text-neutral-text-dark mb-2">
                      {event.name}
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-neutral-dark-gray mb-4">
                      <div className="flex items-center space-x-1">
                        <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">

                          <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />

                        </svg>
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">

                          <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />

                          <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />

                        </svg>
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-neutral-dark-gray leading-relaxed mb-4">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, tagIndex) =>
                  <span
                    key={tagIndex}
                    className="tag tag-inactive text-xs">

                          {tag}
                        </span>
                  )}
                    </div>
                     <div className="mt-4">
                       <a
                         href={`/calendar/${event.slug}`}
                         className="text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200">

                         View Details →
                       </a>
                     </div>
                  </div>
                </div>
              </div>
          ))

          : (
          <div className="text-center py-16" data-oid="zri31hy">
              <div className="text-6xl mb-4" data-oid="vssnvj:">📅</div>
              <h3 className="font-serif font-bold text-2xl text-neutral-text-dark mb-4" data-oid="6b0uyj7">
                No events scheduled
              </h3>
              <p className="text-neutral-dark-gray mb-6" data-oid="_xys8q9">
                {selectedTag ?
              `No events found for "${selectedTag}".` :
              `No events scheduled at this time.`}
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-oid="b1z1fn0">
          <div className="bg-primary-green text-neutral-text-light rounded-lg p-8 animate-slide-up" data-oid="ak7kvny">
            <h3 className="font-serif font-bold text-2xl mb-4" data-oid="m_xyxf-">
              Never Miss an Action
            </h3>
            <p className="text-lg mb-6 text-green-100" data-oid="63dg6d.">
              Stay updated on all our monthly environmental actions and
              community events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-oid="xoimreu">
              <a
                href="/community"
                className="bg-neutral-text-light text-primary-green px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200" data-oid="yf5l.iq">

                Join Community
              </a>
              <a
                href="/contact"
                className="border-2 border-neutral-text-light text-neutral-text-light px-6 py-3 rounded-full font-medium hover:bg-neutral-text-light hover:text-primary-green transition-colors duration-200" data-oid="au9ky2a">

                Get Notifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>);

}