import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Access form data in the 'formData' state
    console.log("Form Data:", formData);
    fetch('http://localhost:8081/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    }).then((res: unknown) => {
        console.log(res)
    })
  };
  return (
    <section className="relative text-gray-600 body-font">
      <div className="container flex px-5 py-24 mx-auto">
        <form>
          <div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg shadow-md lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
            <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
              Register
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="username"
                className="text-sm leading-7 text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="text-sm leading-7 text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
