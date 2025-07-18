"use client";

import { useState } from "react";

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
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


  // Sample scheduled actions data
  const scheduledActions = [
  {
    name: "New Year Environmental Resolutions Workshop",
    date: "January 22, 2025",
    time: "10:00 AM - 2:00 PM",
    description:
    "Start the year with meaningful environmental commitments. Join us for goal-setting, resource sharing, and community building.",
    tags: ["workshop", "planning", "community"],
    location: "Community Center & Online"
  },
  {
    name: "Winter Tree Care & Planning",
    date: "February 22, 2025",
    time: "9:00 AM - 12:00 PM",
    description:
    "Learn about winter tree care and plan for spring planting initiatives. Includes pruning workshop and native species selection.",
    tags: ["trees", "education", "planning"],
    location: "Local Park"
  },
  {
    name: "Spring Garden Preparation",
    date: "March 22, 2025",
    time: "8:00 AM - 4:00 PM",
    description:
    "Prepare community gardens for the growing season. Soil preparation, seed starting, and garden plot assignments.",
    tags: ["gardening", "community", "preparation"],
    location: "Community Gardens"
  },
  {
    name: "Earth Day Celebration & Action Fair",
    date: "April 22, 2025",
    time: "All Day",
    description:
    "Celebrate traditional Earth Day with a full day of environmental actions, educational booths, and community activities.",
    tags: ["celebration", "education", "community"],
    location: "City Park"
  },
  {
    name: "Pollinator Garden Creation",
    date: "May 22, 2025",
    time: "9:00 AM - 3:00 PM",
    description:
    "Create pollinator-friendly spaces in our community. Plant native flowers, build bee houses, and learn about pollinator conservation.",
    tags: ["pollinators", "planting", "biodiversity"],
    location: "Various Locations"
  },
  {
    name: "Sustainable Summer Living Workshop",
    date: "June 22, 2025",
    time: "6:00 PM - 8:00 PM",
    description:
    "Learn energy-saving tips for summer, water conservation techniques, and sustainable outdoor activities.",
    tags: ["energy", "water-conservation", "lifestyle"],
    location: "Library & Online"
  },
  {
    name: "Community Clean-Up Drive",
    date: "December 22, 2024",
    time: "8:00 AM - 12:00 PM",
    description:
    "Join thousands worldwide in cleaning up local parks, beaches, and neighborhoods. Bring gloves, bags, and enthusiasm!",
    tags: ["cleanup", "community", "waste-reduction"],
    location: "Multiple Locations"
  },
  {
    name: "Holiday Waste Reduction Challenge",
    date: "November 22, 2024",
    time: "All Day",
    description:
    "Learn to celebrate holidays sustainably with gift wrapping alternatives, food waste reduction, and eco-friendly decorations.",
    tags: ["waste-reduction", "holidays", "lifestyle"],
    location: "Online & Home"
  },
  {
    name: "Fall Tree Planting Initiative",
    date: "October 22, 2024",
    time: "9:00 AM - 2:00 PM",
    description:
    "Plant trees for winter establishment. Focus on native species that will thrive in our local climate.",
    tags: ["trees", "planting", "native-species"],
    location: "Riverside Park"
  }];


  // Get all unique tags
  const allTags = Array.from(
    new Set(scheduledActions.flatMap((action) => action.tags))
  ).sort();

  // Filter actions by current month/year and selected tag
  const filteredActions = scheduledActions.filter((action) => {
    const actionDate = new Date(action.date);
    const matchesMonth =
    actionDate.getMonth() === currentMonth &&
    actionDate.getFullYear() === currentYear;
    const matchesTag = selectedTag === "" || action.tags.includes(selectedTag);
    return matchesMonth && matchesTag;
  });

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
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

        {/* Month Navigation */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8 animate-slide-up" data-oid="_tkhqic">
          <div className="flex items-center justify-between mb-6" data-oid="gwh.e3x">
            <button
              onClick={() => navigateMonth("prev")}
              className="flex items-center space-x-2 text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200" data-oid="kwy85-i">

              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24" data-oid="7.rb_a6">

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7" data-oid="rcwwhg6" />

              </svg>
              <span data-oid="gbd.e-d">Previous Month</span>
            </button>

            <h2 className="font-serif font-bold text-2xl md:text-3xl text-neutral-text-dark" data-oid="rd0b:q1">
              {months[currentMonth]} {currentYear}
            </h2>

            <button
              onClick={() => navigateMonth("next")}
              className="flex items-center space-x-2 text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200" data-oid=":jhhr_:">

              <span data-oid="-twxg:0">Next Month</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24" data-oid="nl.-u8h">

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7" data-oid="5y1idkk" />

              </svg>
            </button>
          </div>

          {/* Event Filter Tags */}
          <div className="flex flex-wrap gap-2 items-center justify-center" data-oid="fw1f-.:">
            <span className="text-sm font-medium text-neutral-dark-gray" data-oid="juk63go">
              Filter by type:
            </span>
            <button
              onClick={() => setSelectedTag("")}
              className={`tag ${selectedTag === "" ? "tag-active" : "tag-inactive"}`} data-oid="ait06rl">

              All Events
            </button>
            {allTags.map((tag) =>
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
              className={`tag ${selectedTag === tag ? "tag-active" : "tag-inactive"}`} data-oid="qveplus">

                {tag}
              </button>
            )}
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6" data-oid="3vriz1k">
          {filteredActions.length > 0 ?
          filteredActions.map((action, index) =>
          <div key={index} className="card animate-slide-up" data-oid="o0zyz-t">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6" data-oid="l_5.upz">
                  {/* Date Badge */}
                  <div className="flex-shrink-0" data-oid="feidp66">
                    <div className="bg-primary-green text-neutral-text-light rounded-lg p-4 text-center min-w-[120px]" data-oid="ac7c9w1">
                      <div className="text-2xl font-bold" data-oid="g:11gma">
                        {new Date(action.date).getDate()}
                      </div>
                      <div className="text-sm opacity-90" data-oid="y7shvyj">
                        {months[new Date(action.date).getMonth()].slice(0, 3)}
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1" data-oid="j252i.7">
                    <h3 className="font-serif font-bold text-xl md:text-2xl text-neutral-text-dark mb-2" data-oid="67e3t.n">
                      {action.name}
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-neutral-dark-gray mb-4" data-oid="--899b:">
                      <div className="flex items-center space-x-1" data-oid="2s71uyn">
                        <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24" data-oid="ldyze:g">

                          <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-oid="g0_dnv." />

                        </svg>
                        <span className="text-sm" data-oid="850x1f_">{action.time}</span>
                      </div>
                      <div className="flex items-center space-x-1" data-oid="olrh:3i">
                        <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24" data-oid="cds_0z6">

                          <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-oid="-bcz.vc" />

                          <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-oid="m95w0bc" />

                        </svg>
                        <span className="text-sm" data-oid="-290t9_">{action.location}</span>
                      </div>
                    </div>

                    <p className="text-neutral-dark-gray leading-relaxed mb-4" data-oid="mgtwny0">
                      {action.description}
                    </p>

                    <div className="flex flex-wrap gap-2" data-oid="93ve7a5">
                      {action.tags.map((tag, tagIndex) =>
                  <span
                    key={tagIndex}
                    className="tag tag-inactive text-xs" data-oid="je1ufl7">

                          {tag}
                        </span>
                  )}
                    </div>
                  </div>
                </div>
              </div>
          ) :

          <div className="text-center py-16" data-oid="zri31hy">
              <div className="text-6xl mb-4" data-oid="vssnvj:">📅</div>
              <h3 className="font-serif font-bold text-2xl text-neutral-text-dark mb-4" data-oid="6b0uyj7">
                No events scheduled
              </h3>
              <p className="text-neutral-dark-gray mb-6" data-oid="_xys8q9">
                {selectedTag ?
              `No events found for "${selectedTag}" in ${months[currentMonth]} ${currentYear}.` :
              `No events scheduled for ${months[currentMonth]} ${currentYear}.`}
              </p>
              {selectedTag &&
            <button
              onClick={() => setSelectedTag("")}
              className="bg-primary-green text-neutral-text-light px-6 py-3 rounded-full font-medium hover:bg-primary-green-dark transition-colors duration-200" data-oid="-kp82:3">

                  View All Events
                </button>
            }
            </div>
          }
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