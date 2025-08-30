"use server";

import { neon } from "@neondatabase/serverless";

export async function CreateContacts(formData: FormData) {
  // Connect to the Neon database
  const sql = neon(`${process.env.DATABASE_URL}`);
  // if (!process.env.DATABASE_URL) {
  //   console.error(
  //     "Kesalahan Kritis: Environment variable DATABASE_URL tidak ditemukan.",
  //   );
  //   return {
  //     error:
  //       "Konfigurasi sisi server tidak valid. Gagal terhubung ke database.",
  //   };
  // }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  await sql`
        INSERT INTO contacts (name, email, message)
        VALUES (${name}, ${email}, ${message})
      `;
}
