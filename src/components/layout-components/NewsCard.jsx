import { FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ newsCard }) => {
  const { title, author, image_url, details, rating, total_view } = newsCard;

  return (
    <div className="bg-gray-200 rounded-md shadow-md border-2 border-gray-500 mb-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {author.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold px-4">{title}</h2>

      {/* Thumbnail */}
      <div className="mt-3">
        <img
          src={image_url}
          alt={title}
          className="w-full max-h-80 object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-4 text-gray-700">
        <p>
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <span className="text-orange-500 cursor-pointer ml-1">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t-1 border-gray-400">
        {/* Rating */}
        <div className="flex items-center text-orange-500 gap-1">
          <FaStar />
          <span className="font-semibold">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-500 gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
