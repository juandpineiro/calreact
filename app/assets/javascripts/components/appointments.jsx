var Appointments = React.createClass({
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      input_title: 'Team standup meeting',
      input_appt_time: 'Tomorrow at 9 am'
    }
  },

  render: function() {
    return (
      <div>
        <AppointmentForm input_title={this.state.input_title} input_appt_time={this.state.input_appt_time} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
});