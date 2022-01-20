import React, { useState } from "react";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointments";
import "components/Appointments";

const theDays = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer: {
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      },
    },
  },
  {
    id: 5,
    time: "4pm",
  },
];

// const availability = days.map((day) => (
//   <DayListItem
//     {...day}
//     selected={day.name === props.value}
//     setDay={props.onChange}
//     key={day.id}
//   />
// ));

export default function Application(props) {
  const [day, setDay] = useState("Monday");
  const apps = appointments.map((app) => <Appointment key={app.id} {...app} />);
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />

        <hr className="sidebar_separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={theDays} value={day} onChange={setDay} />
        </nav>

        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {apps}
        <Appointment key="last" time="5PM" />
      </section>
    </main>
  );
}
