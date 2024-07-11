import React from "react";

export default function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div className="nav-left">
            <a class="navbar-brand" href="#">
              SutraAlgo
            </a>
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
                <a class="nav-link active" aria-current="page" href="#">
                  Practice
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Assignment
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Certify
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contest
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Store
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-disabled="true">
                  Contribute
                </a>
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
