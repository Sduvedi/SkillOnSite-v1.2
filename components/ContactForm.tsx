"use client"
import { useState } from "react"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<boolean | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    setLoading(true)
    setOk(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      setOk(res.ok)
      if (res.ok) (e.currentTarget as HTMLFormElement).reset()
    } catch (_e) {
      setOk(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <input name="name" required placeholder="Your name" className="border border-slate-200 rounded-xl p-2" />
      <input name="email" type="email" required placeholder="Your email" className="border border-slate-200 rounded-xl p-2" />
      <textarea name="message" rows={4} placeholder="What do you need help with?" className="border border-slate-200 rounded-xl p-2" />
      <button disabled={loading} className="btn" type="submit">{loading ? "Sendingâ€¦" : "Send"}</button>
      {ok === true && <p className="text-green-600">Thanks! We&apos;ll be in touch shortly.</p>}
      {ok === false && <p className="text-red-600">Something went wrong. Please email info@skillonsite.com.</p>}
    </form>
  )
}
