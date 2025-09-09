/* === SkillOnSite v1.2 Layout ===
   Phase 2: Add working appointment/booking page, restructure services sections, update links
   Author: Shivansh Duvedi
*/

// layout.tsx remains unchanged from Phase 1

// ➤ NEW FILE: app/booking/page.tsx
// This is the new booking/appointment page

"use client";

import Link from "next/link";

export default function BookingPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Book a Consultation</h1>
      <p className="mb-6 text-lg text-gray-700">
        Select a service type and submit your request. We'll get back to you within 24 hours.
      </p>

      <form className="grid grid-cols-1 gap-6">
        <div>
          <label className="block font-medium mb-1">Your Name</label>
          <input type="text" name="name" required className="w-full border rounded-md px-4 py-2" />
        </div>

        <div>
          <label className="block font-medium mb-1">Your Email</label>
          <input type="email" name="email" required className="w-full border rounded-md px-4 py-2" />
        </div>

        <div>
          <label className="block font-medium mb-1">Service Type</label>
          <select name="type" required className="w-full border rounded-md px-4 py-2">
            <option value="health-check">IT Health Check</option>
            <option value="support">Ad-hoc Support</option>
            <option value="retainer">Monthly Retainer</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Details / Preferred Time</label>
          <textarea name="details" rows={4} className="w-full border rounded-md px-4 py-2" />
        </div>

        <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700">
          Submit Booking
        </button>
      </form>
    </main>
  );
}

// ➤ UPDATE: In app/page.tsx (homepage)
// Replace the existing pricing buttons with links to the new booking form like this:

<Link href="/booking?type=health-check">
  <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Book Health Check</button>
</Link>

<Link href="/booking?type=support">
  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md">Request Support</button>
</Link>

<Link href="/booking?type=retainer">
  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md">Discuss a Plan</button>
</Link>

// ➤ OPTIONAL: You can use URLSearchParams in booking/page.tsx to pre-fill the service type from the query string if you want.

// ➤ COMING NEXT (optional future Phase): Integrate chat interface + GPT-4 API for instant lead replies.

/* === End of Phase 2 === */
