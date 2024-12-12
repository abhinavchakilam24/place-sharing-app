import React, { useCallback, useReducer } from "react";

import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "./../../shared/components/util/validators";
import Button from "../../shared/components/FormElements/Button";

const formReducer = (state, action) => {
   switch (action.type) {
      case "INPUT_CHANGE" : 
      let formIsValid = true;
         for(const inputId in state.inputs){
            if(inputId === action.inputId){
               formIsValid = formIsValid && action.isValid;
            }
            else{
               formIsValid = formIsValid && state.inputs[inputId].isValid;
            }
         }
      return { 
         ...state,
         inputs : {
            ...state.inputs,
            [action.inputId] : { value: action.value, isValid: action.isValid}
         },
         isValid : formIsValid
      };
      default : 
         return state;
   }
};

const NewPlace = () => {
   const [formState, dispatch ] = useReducer(formReducer, {
      inputs: {
         title : {
            value : '',
            isValid : false
         },
         description : {
            value : '',
            isValid : false
         }
      },
      isValid : false 
   });

  const inputChangeHandler = useCallback((id, value, isValid) => {
   dispatch({type: "INPUT_CHANGE", value: value, inputId: id, isValid: isValid });
  }, []);


  return (
    <form className="place-form">
      <Input
        id="title"
        label="Title"
        element="input"
        type="text"
        errorText="Please enter a valid title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputChangeHandler}
      />
      <Input
        id="description"
        label="Description"
        element="textarea"
        type="text"
        errorText="Please enter a valid description (at least 5 characters)"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputChangeHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
  );
};

export default NewPlace;
