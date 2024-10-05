import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/zoroxzoro")
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);
  return (
    <div className=" text-center text-3xl m-4 bg-gray-400">
      GitHub Follower : {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
};

export default Github;
