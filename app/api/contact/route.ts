import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()
    if (!name || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    // 1) Save to Supabase
    const { error: dbError } = await supabase
      .from("leads")
      .insert([{ name, email, message, source: "website", created_at: new Date().toISOString() }])
    if (dbError) console.error("Supabase error:", dbError)

    // 2) Notify you
    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      subject: "New Website Lead â€” SkillOnSite IT",
      html: `<h2>New Lead</h2><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message || ""}</p>`
    })

    // 3) Auto-ack to lead
    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: email,
      subject: "Thanks â€” SkillOnSite IT",
      html: `<p>Kia ora ${name},</p><p>Thanks for reaching out to SkillOnSite IT. We'll get back to you shortly.</p><p>â€” Shivansh</p>`
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
