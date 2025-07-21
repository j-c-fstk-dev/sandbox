"use client";

import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useState } from 'react'; // Import useState

// Function to generate Monthly Earth Day events (same as in page.tsx)
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

// Interface for event data
interface EventData {
  name: string;
  date: string;
  time: string;
  description: string;
  tags: string[];
  location: string;
  slug: string;
}

// Function to find event by slug
const getEventBySlug = (slug: string): EventData | undefined => {
  return monthlyEarthDayEvents.find(event => event.slug === slug);
};

// Function to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Function to format time
const formatTime = (timeString: string) => {
  // Assuming timeString is in a parseable format, or just display as is
  return timeString;
};

interface EventPageProps {
  params: {
    slug: string;
  };
}

export default function EventDetailPage({ params }: EventPageProps) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  // Function to generate iCalendar (.ics) content
  const generateICS = (event: EventData) => {
    const startDate = new Date(event.date);
    const endDate = new Date(event.date);
    // For all-day events, set start and end to the beginning and end of the day in UTC
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    const uid = `${event.slug}@your-website.com`; // Unique identifier

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//MonthlyEarthDay//Calendar Event//EN
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'}
DTSTART:${startDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'}
DTEND:${endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'}
SUMMARY:${event.name}
DESCRIPTION:${event.description.replace(/<[^>]*>/g, '')}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    return icsContent;
  };

  const handleAddToCalendar = (event: EventData) => {
    const icsContent = generateICS(event);
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${event.slug}.ics`;
    a.click();

    URL.revokeObjectURL(url);

    // Show the afterwards message
    setShowAfterwardsMessage(true);
  };

   const [showAfterwardsMessage, setShowAfterwardsMessage] = useState(false);

  return (
    <div className="min-h-screen py-16 px-4" data-oid="event-detail-page">
      <div className="max-w-4xl mx-auto" data-oid="event-detail-content">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-neutral-text-dark mb-4 leading-tight">
            {event.name}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-neutral-dark-gray mb-6">
            <div className="flex items-center space-x-1">
              <Calendar size={18} />
              <span className="text-sm">{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={18} />
              <span className="text-sm">{formatTime(event.time)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={18} />
              <span className="text-sm">{event.location}</span>
            </div>
          </div>

           <div className="flex flex-wrap justify-center gap-2 mb-8">
            {event.tags.map((tag, index) =>
               <span key={index} className="tag tag-inactive text-xs">
                {tag}
              </span>
            )}
          </div>
        </header>

        {/* Description */}
        <div className="prose max-w-none mb-8 animate-slide-up">
          <p>{event.description}</p>
        </div>

        {/* Add to Calendar Button */}
        <div className="text-center mb-8 animate-slide-up">
           <Button variant="primary" size="lg" onClick={() => handleAddToCalendar(event)}>
            Add to Calendar
          </Button>
        </div>

         {/* Afterwards Message */}
        {showAfterwardsMessage && (
          <div className="mt-8 p-6 bg-green-100 text-primary-green rounded-lg animate-fade-in">
            <h3 className="font-semibold text-lg mb-2">Thank you for joining!</h3>
            <p className="mb-4">We're excited to have you participate in the Monthly Earth Day action.</p>
            <p className="mb-4">Share your experience, photos, and how you made a difference in the community hub!</p>
            <a
              href={`mailto:MonthlyEarthDay@gmail.com?subject=My Monthly Earth Day Action Story&body=Hello!%5Cn%5nI%27d%20like%20to%20share%20my%20experience%20with%20the%20recent%20Monthly%20Earth%20Day%20action.%5Cn%5n%5n%5n%5n[Share your story and attach photos here!]%5Cn%5n%5nThanks%21`}
              className="text-primary-green-dark font-medium hover:underline">

              Share Your Story via Email →
            </a>
          </div>
        )}

        {/* Back to Calendar */}
        <div className="mt-12 text-center">
          <a
            href="/calendar"
            className="inline-flex items-center text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200">

            ← Back to Calendar
          </a>
        </div>
      </div>
    </div>);

}