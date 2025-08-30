import { neon } from "@neondatabase/serverless";

 export  async function createContacts(formData: FormData) {
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
