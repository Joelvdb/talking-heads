import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContextProvider";

const RoomItem = (props) => {
  const { joinRoom } = props;
  const { _id, name, maxPop, pop, messages, currentSong } = props.room;
  const rowContainerStyle = "flex p-1 items-center justify-between ";

  const { darkMode } = useContext(UserContext);

  return (
    <Link
      className={` `}
      to={`/main/${_id}`}
      // onClick={(e) => {
      //   joinRoom(_id);
      // }}
    >
      <div
        className={`flex flex-col gap-2 min-w-max border-black border-solid border-0 m-0 cursor-pointer p-4 box-border text-xl ${
          darkMode ? "hover:bg-primaryDark" : "hover:bg-primary"
        }`}
      >
        <div className={rowContainerStyle}>
          <p className="text-2xl font-bold">{name}</p>
          <p className="font-bold">
            <span
              className={
                maxPop === pop.length
                  ? "text-red-600"
                  : `${darkMode ? "text-white" : "text-black"}`
              }
            >{`${pop.length}`}</span>
            <span className="">{`/${maxPop}`}</span>
          </p>
        </div>
        <div className={rowContainerStyle}>
          <p className="text-lg">{`${currentSong}`}</p>
          <button //Room button!
            className="border-black border-solid border-2 p-2
            hover:bg-gray-5"
          >
            play
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RoomItem;
