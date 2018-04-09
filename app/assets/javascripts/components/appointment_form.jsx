var AppointmentForm = React.createClass({
  handleChange: function() {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  render: function() {
    return (
      <div>
        <h2>Make a new appointment</h2>
        <form>
          <input name='title' placeholder='Appointment title' 
                 value={this.props.input_title}
                 onChange={this.handleChange} />
          <input name='appt_time' placeholder='Date and time' 
                 value={this.props.input_appt_time}
                 onChange={this.handleChange} />
          <input type='submit' value='Meke Appointment' />
        </form>
      </div>
    )
  }
});