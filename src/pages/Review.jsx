function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Arun Kumar",
      comment: "Excellent products and fast delivery.",
    },
    {
      id: 2,
      name: "Priya S",
      comment: "Laptop quality is amazing and worth the price.",
    },
    {
      id: 3,
      name: "Rahul M",
      comment: "Good customer support and genuine products.",
    },
    {
      id: 4,
      name: "Karthik R",
      comment: "Best place to buy electronics online.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-100 container mx-auto px-6 py-14 ">
    
    <div className="container mx-auto px-6 py-14 ">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
        Customer Reviews
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Trusted by hundreds of happy customers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <p className="text-gray-700 leading-relaxed mb-5">
              {review.comment}
            </p>

            <div className="flex items-center gap-3 border-t pt-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {review.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-bold text-gray-800">
                  {review.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Verified Customer
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Reviews;