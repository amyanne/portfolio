import React, { Component } from 'react'
import { connect } from 'react-redux';


export class Resume extends Component {
    componentDidMount() {
        // const id = this.props.match.params.id;
        // this.props.getHabit(id);
    }

  render() {
    return (
      <div>
        {/* <h3>{ this.props.habit.name }</h3> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        // habit: state.habitsReducer.habit
    }
}

// export default connect(mapStateToProps, {getHabit})(HabitShow);
export default Resume 