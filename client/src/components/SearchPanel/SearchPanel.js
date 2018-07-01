import React from "react";
import "./SearchPanel.css";

const SearchPanel = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">        
        <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control form-control-sm" type="text" placeholder="Topic" id="inputTopic" />
                    <input className="form-control form-control-sm" type="text" placeholder="Start Year" id="inputStartYear" />
                    <input className="form-control form-control-sm" type="text" placeholder="End Year" id="inputEndYear" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit" id="submitBtn">Search</button>
                </form>
            </div>
        <div className="col-md-3" />
        </div>
    </nav>

);

export default SearchPanel;