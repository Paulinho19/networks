import NextAuth from "next-auth"
import Github from 'next-auth/providers/github'

const GITHUB_ID = process.env.AUTH_GITHUB_ID;
const GITHUB_SECRET = process.env.AUTH_GITHUB_SECRET;

if (!GITHUB_ID || !GITHUB_SECRET) {
  throw new Error("Erro! Github ID ou Secret não configurados");
}

export const authOptions = NextAuth({
  providers: [
    Github({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET
    })
  ]
});

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }