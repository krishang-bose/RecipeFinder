import sk from '../icons/sk.png'
import ks from '../icons/ks.jpg'
import gr from '../icons/gr.jpeg'
import jo from '../icons/jo.jpeg'

const testimonials = [
  {
    name: "Sanjeev Kapoor",
    image: sk,
    text: "A customer is a person or business that buys goods or services from another business. Customers are crucial because they generate revenue. Without them, businesses would go out of business."
  },
  {
    name: "Kabita Singh",
    image: ks,
    text: "A customer is a person or business that buys goods or services from another business. Customers are crucial because they generate revenue. Without them, businesses would go out of business."
  },
  {
    name: "Gordon Ramsay",
    image: gr,
    text: "A customer is a person or business that buys goods or services from another business. Customers are crucial because they generate revenue. Without them, businesses would go out of business."
  },
  {
    name: "Jamie Oliver",
    image: jo,
    text: "A customer is a person or business that buys goods or services from another business. Customers are crucial because they generate revenue. Without them, businesses would go out of business."
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#f8f8e8] py-12 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Our <span className="text-teal-500">Chefmate</span> Happy Users
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A customer is a person or business that buys goods or services from another business. Customers are crucial because they generate revenue. Without them, businesses would go out of business.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-t-2xl rounded-b-lg shadow-md text-center"
          >
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
              />
            </div>
            <div className="mt-16">
              <p className="text-gray-600 text-sm">{testimonial.text}</p>
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                {testimonial.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
