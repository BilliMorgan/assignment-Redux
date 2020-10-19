const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {



  switch (action.type) {
    case "ADD_PERSON":
      const newPerson = {
        id: Math.random(),
        name: action.personData.name,
        age: action.personData.age,
      };
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
