import React, { useContext } from "react";

import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Picture from "../../../Media/NameLogo.png";
import { UserContext } from "../../../contexts/UserContextProvider";

const UserModal = ({ open, handleClose, userInfo }) => {
  const { darkMode } = useContext(UserContext);

  let style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
    display: "flex",
  };

  if (darkMode) {
    style = { ...style, backgroundColor: "#1a2329", color: "white" };
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style} className={"gap-6 w"}>
          <img className={"w-40 rounded-md"} src={Picture} />
          <div>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <p className="text-2xl font-semibold">{`${userInfo?.userName}`}</p>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <p
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >{`Email: `}</p>
              <a href="#">
                <p
                  className={`hover:cursor-pointer ${
                    darkMode ? "text-blue-300" : "text-blue-500"
                  }`}
                >
                  {userInfo?.email}
                </p>
              </a>
            </Typography>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default UserModal;
