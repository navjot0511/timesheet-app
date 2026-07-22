import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "text" },
      },
      async authorize(credentials) {
        // Dummy authentication
          // Calling local user API
          
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user`);
        const users = await res.json();
        const user = users.find(
          (u: any) =>
            u.email === credentials?.email &&
            u.password === credentials?.password,
        );

        if (user) {
          return { id: user.id, name: user.name, email: user.email };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
});

export { handler as GET, handler as POST };
