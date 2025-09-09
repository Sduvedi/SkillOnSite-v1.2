// app/booking/page.tsx
"use client";

import Link from "next/link";

export default function BookingPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-blue-800">Book an Appointment</h1>
      <p>Select a service below and we’ll follow up to confirm availability.</p>

      <div className="grid gap-6">
        <Link href="/booking?type=health-check">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full text-left">
            Book Health Check
          </button>
        </Link>

        <Link href="/booking?type=support">
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 w-full text-left">
            Request Support
          </button>
        </Link>

        <Link href="/booking?type=retainer">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 w-full text-left">
            Discuss Monthly Retainer Plan
          </button>
        </Link>
      </div>
    </div>
  );
}
