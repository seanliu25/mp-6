import getCollection, { POSTS_COLLECTION } from "@/components/db";
import { PostProps } from "@/types";

/**
 * Fetch a user's information from the database based on their email.
 */
export default async function getUserByEmail(email: string): Promise<PostProps | null> {
  if (!email) {
    console.error(`Invalid email: ${email}`);
    return null;
  }

  const postsCollection = await getCollection(POSTS_COLLECTION);

  // Query the database for the document with the matching email
  const data = await postsCollection.findOne({ email });

  if (!data) {
    console.error(`User not found for email: ${email}`);
    return null;
  }

  const user: PostProps = {
    name: data.name,
    email: data.email,
    profilePicture: data.profilePicture,
  };

  return user;
}
