"use client";

import { auth } from "@/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function CreateProfilePage() {
  const { isSignedIn } =  auth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/sign-in");
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 p-6">
      <h1 >Create Your Profile</h1>
      <form action={handleSubmit} >
        <label htmlFor="name" >Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          required
          
        />

        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
        <textarea
          name="email"
          id="email"
          placeholder="Enter your emial address"
          
        ></textarea>


        <label htmlFor="profile_image_url" className="block text-sm font-medium text-gray-700 mb-2">Profile Image URL:</label>
        <input
          type="text"
          name="profile_image_url"
          id="profile_image_url"
          placeholder="Paste your profile image URL"
          
        />
        <button
          type="submit"

        >
          Submit Profile
        </button>
      </form>
    </div>
  );
}
