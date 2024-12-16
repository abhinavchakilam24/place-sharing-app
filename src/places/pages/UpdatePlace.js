import React from "react";
import { useParams } from "react-router-dom";

import "./PlaceForm.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/components/util/validators';

const PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;

  const identifiedPlace = PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could Not find any place of this user.</h2>
      </div>
    );
  }
  return (
    <form className="place-form">
        <Input
        id="title"
        label="Title"
        element="input"
        type="text"
        value={identifiedPlace.title}
        errorText="Please enter a valid title."
        validators={[VALIDATOR_REQUIRE()]}
        onInput={() => {}}
        valid = {true}
      />
      <Input
        id="description"
        label="Description"
        element="textarea"
        value={identifiedPlace.description}
        errorText="Please enter a valid description (at least 5 characters)"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={() => {}}
        valid = {true}
      />
      <Button >SUBMIT</Button>
    </form>
  );
};

export default UpdatePlace;
