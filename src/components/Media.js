import React from "react";

const Media = () => {
  return (
    <div>
      <div className="media">
        <img src="./images/me.jpg" className="mr-3" alt="..." width="64" />
        <div className="media-body">
          <h5 className="mt-0">Welcome to my portfolio</h5>
          I'm a <b>Front-End Developer</b> living and working in{" "}
          <b>Barcelona</b>, I love all things <b>JavaScript</b> and continue to
          learn new technologies of Front-End. I love React, Vue.js and Angular!
          But probably React is my current favourite. <br />
          <i>
            <b>Interesting fact:</b> I have a daughter here in Barcelona so have
            no plans to leave.
          </i>
        </div>
      </div>
      <div>
        <h5 className="mt-4">
          <span className="badge badge-dark mr-1">year</span> Brief timeline
          history
        </h5>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-dark mr-2">1979</span>Born in
            Westminster Hospital, London, UK, to Irish parents.
          </li>
          <li className="list-group-item">
            <span className="badge badge-dark mr-2">1990 - 2000</span>All my
            schooling, college and University completed in London.
          </li>
          <li className="list-group-item">
            <span className="badge badge-dark mr-2">2000</span>Graduated from
            University of West London with a degree in Media Arts with
            Photography
          </li>
          <li className="list-group-item">
            <span className="badge badge-dark mr-2">2000 - 2005</span>Built
            first website for my father's pub and restaurant business. Lived in
            Australia and Germany, Worked on organic farms (wwoofing), drove a
            delivery van, took some time out to find out what I want to do with
            my life.
          </li>
          <li className="list-group-item">
            {" "}
            <span className="badge badge-dark mr-2">2006 - 2010</span>Decided to
            pursue Graphic Design, worked for Service Graphics in London as an
            Artworker/Designer
          </li>
          <li className="list-group-item">
            <span className="badge badge-dark mr-2">2010 - 2013</span>Moved down
            to Brighton to be nearer family, struggled to find a job in Graphic
            Design, got a job working for Sussex Police, creating Video
            Identification Parades. I was hired on the strength of my Photoshop
            skills.
          </li>
          <li className="list-group-item">
            <span className="badge badge-dark mr-2">Jan 2013</span>Made the
            decision to pursue Web Development, enrolled at Brighton Technical
            College to do a HTML, CSS, JAVASCRIPT evening course
          </li>
          <li className="list-group-item">
            <span className="badge badge-dark mr-2">Oct 2013</span>Made a few
            Wordpress sites for private clients, started working as a Front End
            Developer for Printwell, in London
          </li>
          <li className="list-group-item">
            <span className="badge badge-dark mr-2">2014</span>Landed a job for
            15below in Brighton as a Front End Developer, creating microsites
            for new features for travel companies like Ryanair and Norwegian
            Airlines, started using Angular 1 for the first time to contribute
            to the 15below Software as a service called Passenger, their main
            product
          </li>
          <li className="list-group-item">
            <span className="badge badge-dark mr-2">2016</span>Moved to
            Barcelona to start working for Norwegian Airlines, in the CRM
            department, using Oracle Responsys to send out marketng emails.
          </li>
          <li className="list-group-item">
            <span className="badge badge-dark mr-2">2017</span>Started working
            for the UX department at Norwegian, changing web pages using
            JavaScript to make A/B tests
          </li>
          <li className="list-group-item">
            <span className="badge badge-dark mr-2">2018</span>Started to learn
            the basics of React and Vue.js, developed an obsession/interest in
            all things Javascript
          </li>
          <li className="list-group-item">
            <span className="badge badge-dark mr-2">Jan 2019 - Now</span>Started
            working Freelance Software13, creating SPA's, adding new features to
            sites, using Angular and Vue.js. Completed the Treehouse intensive
            React/Redux course, building React web apps
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Media;
