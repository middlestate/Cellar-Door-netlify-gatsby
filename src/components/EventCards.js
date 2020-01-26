import React, { Component } from 'react'
const URL =
  'https://cellardoor101.com/.netlify/functions/calendar-events?maxEvents='

const ord = d =>
  31 === d || 21 === d || 1 === d
    ? 'st'
    : 22 === d || 2 === d
    ? 'nd'
    : 23 === d || 3 === d
    ? 'rd'
    : 'th'

const magicButton = link => {
  if (link === undefined || link === '') {
    return null
  } else {
    return (
      <a className="link button is-right" href={link}>
        BUY TICKETS
      </a>
    )
  }
}

const descriptionParse = (desc, card) => {
  let array = desc.split('\n')
  if (/^\.\s?/.test(array[0])) {
    card.subtitle = array[0].replace(/\./, '')
    card.body = array[1]
  } else {
    card.body = array[0]
  }
  if (/^http.*?/.test(array[array.length - 1])) {
    card.url = array[array.length - 1]
  }
  return card
}

export default class EventCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
    }
  }

  componentDidMount() {
    fetch(`${URL}${this.props.maxEvents}`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ events: json.events })
      })
      .catch(err => {
        console.log(
          'error:',
          err,
          'calendar data is probably formatted incorrectly'
        )
      })
  }
  render() {
    let events = this.state.events
    if (!events) return
    return (
      <section className="section">
        <div className="column">
          <div className="row">
            <div className="events-container">
              {events.map((event, key) => {
                let { start, end, summary, description } = event
                // parse description
                let card = descriptionParse(description, {
                  subtitle: '',
                  body: '',
                  url: '',
                })
                let buyButton = magicButton(card.url)
                // do date/time stuff
                let eventDate = new Date(start).toLocaleDateString([], {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })
                let th = ord(eventDate.split(' ')[2])
                let eventTime = new Date(start).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
                let eventEnd = new Date(end).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
                let body = card.body ? `${card.body}` : ''
                return (
                  <div key={key} className="event">
                    <p className="date">{`${eventDate || ''}${th}`}</p>
                    {/* <!-- date child[0] --> */}
                    <h2 className="title">{`${summary || ''}`}</h2>
                    {/* <!--- title child[1] --> */}
                    <div className="subheading">{`${card.subtitle || ''}`}</div>
                    {/* <!-- child[2] --> */}
                    <div className="line2">{`${
                      card.body ? '' : 'COMING SOON'
                    }`}</div>
                    {/* <!-- child[3] --> */}
                    <div className="container">
                      <div
                        className="description"
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: body }}
                      />
                      {/* <!-- description child[4][0] --> */}
                    </div>
                    <div>{`${buyButton || ''}`}</div>
                    {/* <!-- button child[5] --> */}
                    <div className="description event-time">{`${
                      eventTime ? eventTime + ' to ' + eventEnd : ''
                    }`}</div>
                    {/* <!-- time child[6] --> */}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
