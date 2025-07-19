import { useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import englogo from "/english.png";
import spalogo from "/spanish.png";
import frlogo from "/french.png";
import gerlogo from "/german.png";
import italogo from "/italian.png";
import chilogo from "/china.png";
import ruslogo from "/russian.png";
import japlogo from "/japan.png";
import porlogo from "/portugal.png";



const LanguageCategories = () => {
  const navigate = useNavigate();
  const languages = [
    { name: "English", slug: "english", logo:  englogo  },
    { name: "Spanish", slug: "spanish", logo: spalogo },
    { name: "French", slug: "french", logo: frlogo },
    { name: "German", slug: "german", logo: gerlogo },
    { name: "Italian", slug: "italian", logo: italogo },
    { name: "Russian", slug: "russian", logo: ruslogo },
    { name: "Chinese", slug: "chinese", logo: chilogo },
    { name: "Japanese", slug: "japanese", logo: japlogo },
    { name: "Portuguese", slug: "portuguese", logo: porlogo },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 my-8 bg-slate-200 p-6 rounded-lg shadow-2xl">
      <h2 className="col-span-3 text-3xl font-bold mb-4 text-center text-teal-950">
        Language Categories
      </h2>
      {languages.map(lang => (
        <div
          key={lang.slug}
          onClick={() => navigate(`/tutors`)}
          className="flex items-center justify-between p-4 border-2 border-gray-300 rounded cursor-pointer hover:bg-blue-200"
        >
          <div className="flex items-center gap-3 ">
            <img src={lang.logo} alt={lang.name} className="w-8 rounded-xl h-8" />
            <h3 className="text-lg font-semibold text-slate-800">{lang.name} tutors</h3>
          </div>
          <FaArrowRight />
        </div>
      ))}
    </div>
  );
};

export default LanguageCategories;
