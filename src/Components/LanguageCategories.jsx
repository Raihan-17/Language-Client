import { useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const LanguageCategories = () => {
  const navigate = useNavigate();
  const languages = [
    { name: "English", slug: "English", logo: "/icons/english.png" },
    { name: "Spanish", slug: "spanish", logo: "/icons/spanish.png" },
    { name: "French", slug: "french", logo: "/icons/french.png" },
    { name: "German", slug: "german", logo: "/icons/german.png" },
    { name: "Italian", slug: "italian", logo: "/icons/italian.png" },
    { name: "Chinese", slug: "chinese", logo: "/icons/chinese.png" },
    { name: "Arabic", slug: "arabic", logo: "/icons/arabic.png" },
    { name: "Japanese", slug: "japanese", logo: "/icons/japanese.png" },
    { name: "Portuguese", slug: "portuguese", logo: "/icons/portuguese.png" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 my-8">
      {languages.map(lang => (
        <div
          key={lang.slug}
          onClick={() => navigate(`/tutors/${lang.slug}`)}
          className="flex items-center justify-between p-4 border rounded cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center gap-3">
            <img src={lang.logo} alt={lang.name} className="w-8 h-8" />
            <h3>{lang.name} tutors</h3>
          </div>
          <FaArrowRight />
        </div>
      ))}
    </div>
  );
};

export default LanguageCategories;
