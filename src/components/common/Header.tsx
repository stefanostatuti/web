/* Pi-hole: A black hole for Internet advertisements
 * (c) 2019 Pi-hole, LLC (https://pi-hole.net)
 * Network-wide ad blocking via your own hardware.
 *
 * Web Interface
 * Header component
 *
 * This file is copyright under the latest version of the EUPL.
 * Please see LICENSE file for your rights under this license. */

import React, { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { TimeRangeSelectorContainer } from "../dashboard/TimeRangeSelector";
import api from "../../util/api";

//const sidebarToggle = e => {
//  e.preventDefault();
//  document.body.classList.toggle('sidebar-hidden');
//};

const sidebarMinimize = (e: MouseEvent) => {
  e.preventDefault();
  document.body.classList.toggle("sidebar-minimized");
  document.body.classList.toggle("brand-minimized");
};

export const mobileSidebarToggle = () => {
  document.body.classList.toggle("sidebar-show");
};

export const mobileSidebarHide = () => {
  document.body.classList.remove("sidebar-show");
};

export default () => (
  <header className="c-header navbar">
    <button
      className="c-header-toggler d-lg-none text-white ml-3"
      onClick={mobileSidebarToggle}
      type="button"
    >
      &#9776;
    </button>
    <Link to="/dashboard" className="c-header-brand text-center">
      <span className="text-white" style={{ lineHeight: "40px" }}>
        <span className="c-header-brand-full">
          Pi-
          <b>hole</b>
        </span>
        <span className="c-header-brand-minimized">
          P<b>h</b>
        </span>
      </span>
    </Link>
    <ul className="c-header-nav navbar-nav d-md-down-none mr-auto">
      <li className="c-header-nav-item">
        <button
          className="c-header-nav-link c-header-toggler text-white sidebar-toggler"
          type="button"
          onClick={sidebarMinimize}
        >
          &#9776;
        </button>
      </li>
      {api.loggedIn && window.location.pathname.endsWith("/dashboard") ? (
        <li>
          <TimeRangeSelectorContainer />
        </li>
      ) : null}
    </ul>
  </header>
);
