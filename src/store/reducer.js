const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  const newPerson = {
    id: Math.random(), // not really unique but good enough here!
    name: "Max",
    age: Math.floor(Math.random() * 40),
  };

  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };

    case "REMOVE_PERSON":
      const newArray = state.persons.filter((person) => person.id !== action.personElId);
      return {
        ...state,
        persons: newArray,
      };
  }
  return state;
};

export default reducer;
