import React from "react";
import { codingProfiles } from "../../constants";

const CodingProfile = () => {
  return (

    <section className="py-24 px-[7vw]">

      <h2 className="text-4xl font-bold text-center text-white">
        Coding Profiles
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mt-12">

        {codingProfiles.map((profile)=>(

          <a
            key={profile.id}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111827]/40 rounded-2xl p-6 text-center hover:border hover:border-[#8245ec]"
          >

            <h3 className="text-white text-xl font-bold">
              {profile.platform}
            </h3>

            <p className="text-gray-400 mt-2">
              {profile.username}
            </p>

            <p className="text-[#8245ec] mt-2">
              {profile.stats}
            </p>

          </a>

        ))}

      </div>

    </section>
  );
};

export default CodingProfile;