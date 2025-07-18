import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/Button";

export default function TestimonialsPage() {
  // Sample testimonials data
  const testimonials = [
  {
    text: "Participating in #MonthlyEarthDay has transformed how I think about environmental action. It's not about perfection, it's about consistent, meaningful steps. The monthly rhythm keeps me motivated and connected to a global community of changemakers.",
    author: "Maria Rodriguez",
    image:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  },
  {
    text: "Our community has planted over 500 trees through this movement. The monthly rhythm keeps us motivated and connected to our environmental goals. What started as individual action has become a neighborhood transformation.",
    author: "David Kim",
    image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
  },
  {
    text: "I love how #MonthlyEarthDay makes environmental action accessible. Every month brings new opportunities to make a difference, and the community support makes it feel achievable rather than overwhelming.",
    author: "Emma Thompson"
  },
  {
    text: "As a teacher, I've incorporated #MonthlyEarthDay into our classroom curriculum. My students are now environmental leaders in their families and neighborhoods. The impact extends far beyond the classroom.",
    author: "Sarah Chen",
    image:
    "https://images.unsplash.com/photo-1494790108755-2616b9e0e4d4?w=60&h=60&fit=crop&crop=face"
  },
  {
    text: "The monthly actions have helped our small business become carbon neutral. From energy audits to waste reduction, each month's focus gave us concrete steps to improve our environmental impact while saving money.",
    author: "Alex Johnson",
    image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
  },
  {
    text: "I was skeptical that individual actions could make a difference, but seeing our community's collective impact has been incredible. We've diverted tons of waste from landfills and created beautiful green spaces together.",
    author: "Lisa Park",
    image:
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face"
  },
  {
    text: "The educational aspect of #MonthlyEarthDay has been invaluable. Each month I learn something new about environmental science, sustainable living, or community organizing. Knowledge is power for change.",
    author: "Michael Brown",
    image:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
  },
  {
    text: "What I appreciate most is how this movement meets people where they are. Whether you're a beginner or an experienced environmentalist, there's always a meaningful way to contribute and grow.",
    author: "Jennifer Davis"
  },
  {
    text: "Our family has made environmental stewardship a core value through #MonthlyEarthDay. My children now think critically about consumption, waste, and their impact on the planet. It's shaping the next generation.",
    author: "Robert Wilson",
    image:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face"
  },
  {
    text: "The community connections I've made through environmental action have enriched my life beyond measure. We've become friends, neighbors, and collaborators in creating positive change.",
    author: "Amanda Foster"
  },
  {
    text: "As someone who works in corporate sustainability, I've seen how #MonthlyEarthDay creates grassroots pressure for policy change. Individual actions aggregate into powerful collective voice for environmental protection.",
    author: "Kevin Martinez",
    image:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=60&h=60&fit=crop&crop=face"
  },
  {
    text: "The monthly structure has helped me build lasting environmental habits. What started as one-day actions have become integrated into my daily life. Sustainable living is now second nature.",
    author: "Rachel Green"
  },
  {
    text: "I've learned that environmental action doesn't have to be sacrifice—it can be joyful, social, and deeply fulfilling. #MonthlyEarthDay has shown me that caring for the planet is caring for community.",
    author: "Daniel Lee",
    image:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=face"
  },
  {
    text: "The ripple effects have been amazing. Our monthly actions inspired our city council to adopt stronger environmental policies. Local action really can create systemic change.",
    author: "Nicole Taylor"
  },
  {
    text: "From composting to solar panels to community gardens, #MonthlyEarthDay has guided my journey toward sustainable living. Each month builds on the last, creating momentum for lasting change.",
    author: "Christopher Adams",
    image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
  }];


  return (
    <div className="min-h-screen py-16 px-4" data-oid="5g7xh:1">
      <div className="max-w-6xl mx-auto" data-oid="1i-bcv8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in" data-oid="bxmant0">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-neutral-text-dark mb-6" data-oid="tjiafdh">
            Testimonials - Stories of Impact
          </h1>
          <p className="text-xl text-neutral-dark-gray leading-relaxed max-w-3xl mx-auto" data-oid="050ya5s">
            Hear from community members who are creating positive environmental
            change through consistent monthly action. Their stories inspire and
            guide our collective journey.
          </p>
        </div>

        {/* Submission CTA */}
        <div className="text-center mb-16 animate-slide-up" data-oid="sqv9-qa">
          <div className="bg-primary-green text-neutral-text-light rounded-lg p-8 max-w-2xl mx-auto" data-oid="ffmg86b">
            <h3 className="font-serif font-bold text-2xl mb-4" data-oid="eclo3h:">
              Share Your Story
            </h3>
            <p className="text-lg mb-6 text-green-100" data-oid="72c9f3u">
              Have you been impacted by #MonthlyEarthDay? We'd love to hear
              about your environmental journey and how monthly action has made a
              difference in your life.
            </p>
            <Button
              variant="secondary"
              size="lg"
              href="/contact"
              className="bg-neutral-text-light text-primary-green hover:bg-gray-100" data-oid="7gmj1le">

              Leave Your Testimonial!
            </Button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-oid=":knqlk4">
          {testimonials.map((testimonial, index) =>
          <TestimonialCard key={index} {...testimonial} data-oid="iir-qv:" />
          )}
        </div>

        {/* Impact Statistics */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-16 animate-slide-up" data-oid="55u5754">
          <h2 className="font-serif font-bold text-3xl text-center text-neutral-text-dark mb-8" data-oid="8j07ez1">
            Our Collective Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-oid="khaak-y">
            <div className="text-center" data-oid="296p6s8">
              <div className="text-4xl font-bold text-primary-green mb-2" data-oid="22o5c7.">
                12,000+
              </div>
              <div className="text-neutral-dark-gray" data-oid="00-xkb5">Active Participants</div>
            </div>
            <div className="text-center" data-oid="s.-0wv_">
              <div className="text-4xl font-bold text-primary-green mb-2" data-oid="vb5ksb_">
                500+
              </div>
              <div className="text-neutral-dark-gray" data-oid="9o:m96t">
                Communities Worldwide
              </div>
            </div>
            <div className="text-center" data-oid="g:9eax_">
              <div className="text-4xl font-bold text-primary-green mb-2" data-oid="13oyy56">
                50,000
              </div>
              <div className="text-neutral-dark-gray" data-oid="c_bd:ne">Trees Planted</div>
            </div>
            <div className="text-center" data-oid="er42.ei">
              <div className="text-4xl font-bold text-primary-green mb-2" data-oid="ue.s51w">
                2M lbs
              </div>
              <div className="text-neutral-dark-gray" data-oid="omu8_wd">Waste Diverted</div>
            </div>
          </div>
        </div>

        {/* Featured Success Story */}
        <div className="bg-gradient-to-br from-primary-green to-primary-green-dark text-neutral-text-light rounded-lg p-8 mb-16 animate-slide-up" data-oid="giu_9v.">
          <div className="max-w-4xl mx-auto text-center" data-oid="gck5f-r">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6" data-oid="zhnry49">
              Featured Success Story
            </h3>
            <blockquote className="text-lg md:text-xl italic leading-relaxed mb-6" data-oid="rqpfaqd">
              "When we started #MonthlyEarthDay in our neighborhood, we were
              just five families. Two years later, we've transformed three
              vacant lots into community gardens, installed solar panels on 40
              homes, and influenced our city to adopt a zero-waste goal. The
              monthly rhythm created unstoppable momentum for change."
            </blockquote>
            <div className="flex items-center justify-center space-x-4" data-oid="edqmu3_">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
                alt="Maria Rodriguez"
                className="w-12 h-12 rounded-full" data-oid=".8or4x:" />

              <div className="text-left" data-oid="3bhqbs:">
                <div className="font-semibold" data-oid="dr5f5eo">Maria Rodriguez</div>
                <div className="text-green-200 text-sm" data-oid=":yj109y">
                  Community Organizer, Portland
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-oid="his6zq0">
          <div className="bg-white rounded-lg p-8 shadow-sm animate-slide-up" data-oid="272.vm7">
            <h3 className="font-serif font-bold text-2xl text-neutral-text-dark mb-4" data-oid="qt3xq_j">
              Ready to Create Your Own Impact Story?
            </h3>
            <p className="text-lg text-neutral-dark-gray mb-6 max-w-2xl mx-auto" data-oid="q4ejx.s">
              Join thousands of environmental advocates who are creating
              positive change through consistent monthly action. Your story
              could be next!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-oid="4i6bcy-">
              <Button variant="primary" size="lg" href="/actions" data-oid="o_u2t-3">
                View Actions
              </Button>
              <Button variant="outline" size="lg" href="/community" data-oid="iehapju">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}