import NextAuth from "next-auth";
declare module "next-auth" {
// Add the accessToken property
  interface Session {
    accessToken?: string; 
  }
// Add the accessToken property for JWT as well
  interface JWT {
    accessToken?: string; 
  }
}
declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      name?: string;
      image?: string;
    };
  }
}
