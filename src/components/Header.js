import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import MemberHeader from "./member/Header";
import GuestHeader from "./guest/Header";
import Particles from "react-particles-js";
function Header() {
  let ParticleParams = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: false
        }
      },
      size: {
        value: 18,
        random: true
      },
      move: {
        direction: "bottom",
        out_mode: "out"
      },
      line_linked: {
        enable: false
      }
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "remove"
        }
      },
      modes: {
        remove: {
          particles_nb: 10
        }
      }
    }
  };
  return (
    <Fragment>
      {JSON.parse(localStorage.getItem("isLogin")) !== true ? (
        <GuestHeader />
      ) : (
        <MemberHeader />
      )}
      <Particles params={ParticleParams} />
    </Fragment>
  );
}

export default withRouter(Header);
