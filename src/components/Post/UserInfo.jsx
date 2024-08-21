import moment from "moment";
import { MdEdit } from "react-icons/md";

const UserInfo = ({ tweet }) => {
  // Güvenli bir şekilde username oluşturma
  const username = tweet.user?.name
    ? tweet.user.name.toLowerCase().replace(/ /g, "_") + Math.round(Math.random() * 99)
    : "Fatma Zehra";

  // Güvenli bir şekilde tarih formatlama
  let date = tweet.createdAt ? moment(tweet.createdAt.toDate()).fromNow() : "Unknown date";

  return (
    <div className="flex gap-3 items-center whitespace-nowrap">
      <p>{tweet.user?.name || "Fatma Zehra"}</p>
      <p className="text-gray-400 text-sm">@{username}</p>
      <p className="text-gray-400 text-sm">{date}</p>
      {tweet.isEdited && (
        <p className="text-gray-400 text-xs">
          <MdEdit className="md:hidden" />
          <span className="max-md:hidden">*düzenlendi</span>
        </p>
      )}
    </div>
  );
};

export default UserInfo;
