const AddJob = () => {
  return (
    <div>
      <div className="w-full max-w-3xl  mx-auto mt-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-medium mb-6">
            <span className="font-semibold"> Product Name</span>:{" "}
            <span className="font-normal text-gray-500">{product_name}</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="card-number"
                  placeholder="User Name"
                  defaultValue={user?.displayName}
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="expiration-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Order Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="expiration-date"
                  required
                  placeholder="MM / YY"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="cvv"
                  placeholder="000"
                  defaultValue={`$${price}`}
                  readOnly
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-holder"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="card-holder"
                  placeholder="Full Name"
                  defaultValue={user?.email}
                  readOnly
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-green-500 btn hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
              >
                Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
