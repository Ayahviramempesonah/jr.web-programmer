// "use client";
//
// import { createContacts } from "../lib/actions";

import { neon } from "@neondatabase/serverless";

export default function Contact() {
  async function createContacts(formData: FormData) {
    "use server";
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    await sql`
        INSERT INTO contacts (name, email, message)
        VALUES (${name}, ${email}, ${message})
      `;
  }

  return (
    <section>
      hallo ini page contact
      <div>
        <form action={createContacts}>
          <h2>Formulir Kontak Online</h2>
          <div>
            <label>nama lengkap</label>
            <input name="name" type="text" placeholder="your name" />
          </div>
          <div>
            <label>Email</label>
            <input name="email" type="text" placeholder="your@gmail.com" />
          </div>
          <div>
            <label>Pesan</label>
            <input name="message" type="text" placeholder="your message..." />
          </div>
          <button type="submit">kirim</button>
        </form>
      </div>
    </section>
  );
}
