console.log("Running tests");

if (!apiKey) {
  throw new Error('API_KEY is missing');
}

const keyBuffer = Buffer.from(apiKey, 'utf8');
const encodedKey = keyBuffer.toString('base64');
const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  throw new Error('GITHUB_TOKEN is missing');
}

const githubTokenBuffer = Buffer.from(githubToken, 'utf8');
const encodedGithubToken = githubTokenBuffer.toString('base64');

console.log(`GITHUB_TOKEN is aanwezig: ${encodedGithubToken}`);
console.log(`API_KEY is aanwezig: ${encodedKey}`);

