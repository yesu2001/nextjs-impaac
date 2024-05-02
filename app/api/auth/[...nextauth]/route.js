import NextAuth from "next-auth";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { FIREBASE_API } from "@/config";

const firebaseApp = initializeApp(FIREBASE_API);
const firebaseAuth = getAuth(firebaseApp);

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signUp: "/register",
    error: "/error",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        let user;
        if (credentials.email && credentials.password) {
          try {
            const userCredential = await signInWithEmailAndPassword(
              firebaseAuth,
              credentials.email,
              credentials.password
            );
            user = {
              uid: userCredential.user.uid,
              email: userCredential.user.email,
              name: userCredential.user.displayName,
              accessToken: userCredential.user.accessToken,
            };
            return user;
          } catch (error) {
            throw new Error(error.message);
          }
        } else {
          const { data } = req.body;
          const userData = JSON.parse(data);
          user = {
            uid: userData.uid,
            email: userData.email,
            name: userData.displayName,
            accessToken: userData.accessToken,
          };
          return user;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      console.log(token);
      return Promise.resolve(token);
    },
    async session({ session, token }) {
      session.user = token.user;
      return Promise.resolve(session);
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
