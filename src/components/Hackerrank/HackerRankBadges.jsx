import { hackerRankBadges } from "../../constants";

const HackerRankBadges = () => {
  return (
    <section className="py-24 px-[7vw] lg:px-[12vw]">

      <h2 className="text-4xl font-bold text-center text-white mb-12">
        HackerRank Badges
      </h2>

      <div className="flex flex-wrap justify-center gap-5">

        {hackerRankBadges.map((badge, index) => (
          <div
            key={index}
            className="px-6 py-4 bg-[#111827] border border-[#8245ec]
            rounded-full text-white"
          >
            {badge}
          </div>
        ))}

      </div>

    </section>
  );
};

export default HackerRankBadges;