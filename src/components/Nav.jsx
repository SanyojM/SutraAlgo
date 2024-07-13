import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div className="nav-left">
            <Link to="/" class="navbar-brand">
              SutraAlgo
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse d-flex justify-content-center navbar-collapse nav-middle" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/practice">
                  Practice
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/assignment">
                  Assignment
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/certify">
                  Certify
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contest">
                  Contest
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/store">
                  Store
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contribute">
                  Contribute
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <button className="btn rounded-circle bg-primary text">&nbsp;&nbsp;&nbsp;</button>
          </div>
        </div>
      </nav>
    </>
  );
}
