import React, { Component } from "react";
import './Home.css';
import Pricing from './pricing'; // Import the Pricing component
import "../Navbar/navbar";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "", // Store the search query for airports
      airports: [], // To store the search results
    };
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value }); // Update the query state as the user types
  };

  handleSearch = async () => {
    const { query } = this.state;
    if (query.trim() === "") {
      alert("Please enter a location!");
      return;
    }

    try {
      const response = await fetch(
        `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${query}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
            "x-rapidapi-key": "b1a53c4f7amsh30d7b8c702445aep160f4fjsn8a9f50e93039",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status) {
        this.setState({ airports: data.data }); // Store the fetched airport data
      } else {
        alert("No airports found!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch airports. Please try again.");
    }
  };

  render() {
    return (
      <div className="Home">
        <div className="content">
          <div className="form-container">
            <div className="text-side">
              <br /><br /><br /><br /><br />
              <p className="description">
                Search For Nearby Airports <br />
              </p>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Enter city or airport name"
                  value={this.state.query}
                  onChange={this.handleInputChange}
                  className="search-input"
                />
                <button
                  type="button"
                  className="search-button"
                  onClick={this.handleSearch}
                >
                  Search
                </button>
              </div>

              {/* Displaying search results */}
              <div className="airport-results">
                {this.state.airports.length > 0 ? (
                  this.state.airports.map((airport, index) => (
                    <div key={index} className="airport-item">
                      <h4>{airport.presentation.title}</h4>
                      <p>{airport.presentation.subtitle}</p>
                      <p>{airport.presentation.suggestionTitle}</p>
                    </div>
                  ))
                ) : (
                  <p>No results found. Please try again with a different query.</p>
                )}
              </div>
            </div>
          </div>
          <Pricing /> {/* This is where the Pricing component will be rendered */}
        </div>
      </div>
    );
  }
}
