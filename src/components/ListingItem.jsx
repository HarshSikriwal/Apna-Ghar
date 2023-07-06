import { Link } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";

function ListingItem({ listing, id }) {
  return (
    <li>
      <Link to={`/category/${listing.type}/${id}`}>
        <div className="side card gap-2 gapcompact bg-[#FC6B6B]/30">
          <div className="">
            <img
              src={listing.imageUrls[0]}
              alt={listing.name}
              className="rounded-xl rounded-b-none w-full h-52"
            />
          </div>
          <div className="flex flex-col justify-between mx-4">
            <p className="text-sm">{listing.location}</p>
            <p className="font-bold text-xl">{listing.name}</p>
            <div className="flex gap-2">
              <p className="font-bold text-2xl text-green-600">
                $
                {listing.offer
                  ? listing.discountedPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!d))/g, ",")
                  : listing.regularPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!d))/g, ",")}
              </p>
              {listing.offer && (
                <p className="line-through">
                  $
                  {listing.regularPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!d))/g, ",")}
                </p>
              )}
            </div>
            <div className="flex justify-end gap-8 [&>*]:flex [&>*]:items-center">
              <div>
                <FaBed />
                <p className="font-bold">
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} Bedrooms`
                    : "1 Bedroom"}
                </p>
              </div>
              <div>
                <FaBath />
                <p className="font-bold">
                  {listing.bathrooms > 1
                    ? `${listing.bathrooms} Bathrooms`
                    : "1 Bathroom"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ListingItem;
