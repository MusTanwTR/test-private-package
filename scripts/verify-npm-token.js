const token = process.env.NPM_TOKEN;

if (!token) {
  console.error('NPM_TOKEN is not set');
  process.exit(1);
}

if (token.trim().length < 10) {
  console.error('NPM_TOKEN looks invalid');
  process.exit(1);
}

console.log('NPM_TOKEN is set');
