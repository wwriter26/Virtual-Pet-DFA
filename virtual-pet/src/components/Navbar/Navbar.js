import React, { useState } from "react";
import "./Navbar.css";
import "../../index.css";
import feather from "feather-icons";
import nfa from "../../assets/images/NFA.png";
import { Modal, Box, Button } from "@mui/material";


const Navbar = () => {
  React.useEffect(() => {
    feather.replace(); // Initializes feather icons
  }, []);

  //useState for modals
  //reset modal
  const [openReset, setOpenReset] = useState(false);
  const handleOpenReset = (event) => {
    event.preventDefault();
    setOpenReset(true);
  }
  const handleCloseReset = () => setOpenReset(false);

  // why modal
  const [openWhy, setOpenWhy] = useState(false);
  const handleOpenWhy = (event) => {
    event.preventDefault();
    setOpenWhy(true);
  }
  const handleCloseWhy = () => setOpenWhy(false);

  // our role modal
  const [openRole, setOpenRole] = useState(false);
  const handleOpenRole = (event) => {
    event.preventDefault();
    setOpenRole(true);
  }
  const handleCloseRole = () => setOpenRole(false);

    // our NFA
    const [openNFA, setOpenNFA] = useState(false);
    const handleOpenNFA = (event) => {
      event.preventDefault();
      setOpenNFA(true);
    }
    const handleCloseNFA = () => setOpenNFA(false);

  // // settings modal
  // const [openSettings, setOpenSettings] = useState(false);
  // const handleOpenSettings = (event) => {
  //   event.preventDefault();
  //   setOpenSettings(true);
  // }
  // const handleCloseSettings = () => setOpenSettings(false);

  // // dark mode toggle in settings
  // const [darkMode, setDarkMode] = useState(false);

  // const handleToggle = (event) => {
  //   setDarkMode(event.target.checked);
  // };

  return (
    <nav className="navbar">
      <ul className="navbar__menu">

      <li className="navbar__item">
          <a href="/home" className="navbar__link" onClick={handleOpenRole}>
            <i data-feather="users"></i>
            <span>Our Roles</span>
          </a>
        </li>
        <Modal
          open={openRole}
          onClose={handleCloseRole}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 1000,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <h2 id="modal-title">What Roles Did Each Of Us Play?</h2>
            <p id="modal__description">
              <ul>
                <li>Joe Powers: Code Developer, Slide Designer</li>
                <li>Mari Ochoa: Code Developer, UI/UX Designer</li>
                <li>William Writer: Code Developer, UI/UX Designer</li>
                <li>Baxter Romero: Slide Developer, Sound Implementor, Code Developer</li>
              </ul>
            </p>
            <Button onClick={handleCloseRole} variant="contained" color="primary">
              Back
            </Button>
          </Box>
        </Modal>

        <li className="navbar__item">
          <a href="/home" className="navbar__link" onClick={handleOpenWhy}>
            <i data-feather="help-circle"></i>
            <span>Why?</span>
          </a>
        </li>
        <Modal
          open={openWhy}
          onClose={handleCloseWhy}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 1000,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <h2 id="modal-title">Why did we choose this topic?</h2>
            <p id="modal__description">
              Our motivation was to create an engaging educational tool that represents one of the main topics that we learned this year in theory of computation. The project combines theoretical computational concepts with playful images and user-friendly mechanics. The virtual pet evolves through various stages such as, Egg, Baby, Teen, Adult, and Evolved, which is based on user interactions that alter the current state within the NFA framework. By leveraging gamification, this system transforms abstract learning into a more entertaining and intuitive process. So to sum it up, we hope that this project will help students understand the concepts of NFA and DFA in a more interactive and engaging way.
            </p>
            <Button onClick={handleCloseWhy} variant="contained" color="primary">
              Back
            </Button>
          </Box>
        </Modal>

        <li className="navbar__item">
          <a 
            href="/home" 
            className="navbar__link"
            onClick={handleOpenReset}
          >
            <i data-feather="refresh-cw"></i>
            <span>Reset</span>
          </a>
        </li>
        <Modal
          open={openReset}
          onClose={handleCloseReset}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <h2 id="modal-title">Are you sure you want to reset?</h2>
            <Button onClick={handleCloseReset} variant="contained" color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleCloseReset();
                window.location.href = "/home"; // Redirect after modal
              }}
              variant="contained"
              color="secondary"
              sx={{ ml: 2 }}
            >
              Yes, Reset
            </Button>
          </Box>
        </Modal>

        <li className="navbar__item">
          <a 
            href="/home" 
            className="navbar__link"
            onClick={handleOpenNFA}
          >
            <i data-feather="git-branch"></i>
            <span>NFA</span>
          </a>
        </li>
        <Modal
          open={openNFA}
          onClose={handleCloseNFA}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 1000,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <h2 id="modal-title">NFA Visual</h2>
            <img className="navbar__nfa" src={nfa} alt="NFA" />
            <br/>
            <Button onClick={handleCloseNFA} variant="contained" color="primary">
              Back
            </Button>
          </Box>
        </Modal>

        {/* <li className="navbar__item">
          <a href="/home" className="navbar__link" onClick={handleOpenSettings}>
            <i data-feather="settings"></i>
            <span>Settings</span>
          </a>
        </li>
        <Modal
          open={openSettings}
          onClose={handleCloseSettings}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
          sx={
            {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }
          }
          >
            <h2 id="modal-title">Dark Mode</h2>
            <div className={darkMode ? "dark-mode" : "light-mode"}>
              <label class="toggle-switch">
                <input 
                  type="checkbox"
                  checked={darkMode}
                  onChange={handleToggle}
                />
                <div class="toggle-switch-background">
                  <div class="toggle-switch-handle"></div>
                </div>
              </label>
            </div>
            <br/>
            <br/>
            <Button onClick={handleCloseSettings} variant="contained" color="primary">
              Back
            </Button>
          </Box>
        </Modal> */}


      </ul>
    </nav>
  );
};

export default Navbar;
