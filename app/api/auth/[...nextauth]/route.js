import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", value: "hello world" },
      },
      async authorize({username}) {
        const user = { id: 1, username, role: "admin" };
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
