import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Team() {
    const teamMembers = [
      {
        name: "Sourav Mandal",
        role: "Backend Developer",
        image: "/images/sourav.jpg",
      },
      {
        name: "Ujjal Dey Sarkar",
        role: "Full Stack Developer",
        image: "/images/ujjal.jpg",
      },
      {
        name: "RamKrishna Karmakar",
        role: "Lead Developer",
        image: "/images/ramkrishna.jpg",
      },
      {
        name: "Deergha Srivastava",
        role: "Full Stack Developer",
        image: "../../../images/deeg.jpg",
      },
      {
        name: "Papiya Dey",
        role: "Sr. Software Developer",
        image: "/images/papiya.jpg",
      },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  
    return (
      <section className="py-16 bg-gray-100 font-playfair">
        <div className="text-center mb-10">
          <h3 className="text-blue-600 font-semibold uppercase flex justify-center items-center space-x-2">
            <span className="text-xl">🔹</span> <span>Team</span>
          </h3>
          <h2 className="text-3xl font-bold text-gray-800">
            See Our Skilled Expert <span className="text-blue-600">Team</span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-blue-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
          </Slider>
        </div>
        
      </section>
    );
  }
  