import { useState, useEffect } from "react";

interface UserData {
  id: number;
  name: string;
  email: string;
  email_verified_at: null;
  password: string;
  remember_token: null | string;
  created_at: string;
  updated_at: string;
}

export default function Hero() {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/users`);

        if (!response.ok) {
          // Handle non-successful response (e.g., 404 or 500)
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const newData = await response.json();
        console.log("🚀 ~ newData:", newData)
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error, e.g., show an error message to the user
      }
    };

    fetchData();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
        <img
          className="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            Microdosing synth tattooed vexillologist
          </h1>
          <ul>
            {data.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex px-6 py-2 text-lg text-white bg-purple-500 border-0 rounded focus:outline-none hover:bg-purple-600">
              Button
            </button>
            <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
