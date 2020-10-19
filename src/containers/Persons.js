import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
    render() {
       
    return (
      <div>
        <AddPerson personAdded={this.props.addPersonFunction} />

        {this.props.prs.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.removePersonFunction(person.id)}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    prs: state.persons,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      
    addPersonFunction: (name, age) =>
      dispatch({ type: "ADD_PERSON", personData: { name: name, age: age } }),

    removePersonFunction: (id) =>
      dispatch({ type: "REMOVE_PERSON", personElId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
