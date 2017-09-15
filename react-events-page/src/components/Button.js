import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { eventId } = this.props
    const eventCheckout = `https://www.picatic.com/${eventId}`
    return (
      <a href={eventCheckout} className="btn btn-primary">
        Get Tickets
      </a>
    )
  }
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://widget.picatic.com/latest/js/embed.min.js'
    script.id = 'picatic-widget-script'
    script.async = true

    document.body.appendChild(script)
  }
}

export default Button
