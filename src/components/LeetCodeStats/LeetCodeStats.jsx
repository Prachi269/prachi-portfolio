import React from "react";
import { leetcodeStats } from "../../constants";

const LeetcodeStats = () => {

 return (

<section className="py-24 px-[7vw]">

<h2 className="text-4xl text-center font-bold text-white">
LeetCode Stats
</h2>

<div className="grid md:grid-cols-5 gap-6 mt-12">

<div className="card">
<h3>{leetcodeStats.solved}</h3>
<p>Total Solved</p>
</div>

<div className="card">
<h3>{leetcodeStats.easy}</h3>
<p>Easy</p>
</div>

<div className="card">
<h3>{leetcodeStats.medium}</h3>
<p>Medium</p>
</div>

<div className="card">
<h3>{leetcodeStats.hard}</h3>
<p>Hard</p>
</div>

<div className="card">
<h3>{leetcodeStats.contestRating}</h3>
<p>Contest Rating</p>
</div>

</div>

</section>

 );
};

export default LeetcodeStats;