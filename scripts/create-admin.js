// Run: node scripts/create-admin.js
// This generates the SQL to insert/update the admin user password

const bcrypt = require('bcryptjs');

const email = 'oneclicksoultions@gmail.com';
const password = 'Admin@OneClick2024';

async function main() {
  const hash = await bcrypt.hash(password, 10);
  console.log('\n--- Run this SQL in Supabase SQL Editor ---\n');
  console.log(`INSERT INTO admin_users (email, password_hash)
VALUES ('${email}', '${hash}')
ON CONFLICT (email) DO UPDATE SET password_hash = '${hash}';\n`);
  console.log(`Login credentials:`);
  console.log(`  Email:    ${email}`);
  console.log(`  Password: ${password}`);
  console.log('\nChange the password after first login!\n');
}

main();
