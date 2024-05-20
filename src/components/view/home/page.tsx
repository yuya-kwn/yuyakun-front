import LikeButton from "@/components/button/LikeButton";
import ProfileContent from "@/components/misc/profile/ProfileContent";
import React from "react";

export default function HomePage() {
  return (
    <div className="max-w-screen-lg mx-auto h-full">
      <ProfileContent />
      <LikeButton />
    </div>
  );
}
