import Image from "next/image";
import { User } from "next-auth";

type Props = {
  user: User & { isAdmin: Boolean };
};

const ProfilePage = ({ user }: Props) => {
  // console.log("isAdmin", user, user.isAdmin)
  let usrImg = user?.image;
  if (!usrImg) usrImg = "/userAvatar.png";
  //let usrImg = "/userAvatar.png";
  console.log(user);
  return (
    <div className="flex justify-center text-center items-center flex-col w-full m-auto">
      <h1>Hello</h1>
      <Image
        src={usrImg}
        width={100}
        height={100}
        className="rounded-full"
        alt="user image"
      />
      <p className="text-4xl font-bold mt-10">{user?.name}</p>
      <div>
        <label className="relative flex justify-between items-center group p-2 text-lg">
          Is admin?
          <input
            type="checkbox" checked={user.isAdmin? true: false}
            className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
          />
          <span className="w-12 h-6 flex items-center flex-shrink-0 ml-4  bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-blue-500 after:w-6 after:h-6 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1">
          </span>
        </label>
      </div>
    </div>
  );
};

export default ProfilePage;
