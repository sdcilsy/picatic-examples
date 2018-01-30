import React, { Component } from 'react'
import TicketsContainer from '../containers/TicketsContainer'
import PromoCode from '../components/PromoCode'
import Button from 'material-ui/Button'

const styles = {
  eventTitle: {
    fontFamily: '"Futura Std", "Times", sans-serif',
  },
  eventSummary: {
    fontWeight: 300,
  },
  eventCard: {
    background: '#FFF',
    boxShadow: '0 4px 24px 0 rgba(0,0,0,.12)',
  },
}

class EventCard extends Component {
  render() {
    const {
      event,
      widget,
      hasSelectedTickets,
      createCheckout,
      promoCode,
    } = this.props
    const { showTitle, showSummary, cta } = widget

    return (
      <section className="p-5 rounded" style={styles.eventCard}>
        <h3 style={styles.eventTitle}>
          {showTitle ? event.attributes.title : 'Tickets'}
        </h3>
        {showSummary && (
          <h5 style={styles.eventSummary}>{event.attributes.summary}</h5>
        )}
        <TicketsContainer />
        <hr />
        <div className="d-flex flex-row">
          <PromoCode {...this.props} error={promoCode.error} />
          <div className="ml-auto">
            <Button
              raised
              color="primary"
              disabled={!hasSelectedTickets}
              onClick={createCheckout}
              className="mt-1"
              // href={`https://www.picatic.com/${event.id}`}
            >
              {cta}
            </Button>
          </div>
        </div>
      </section>
    )
  }
  // Render Picatic Anywhere
  // componentDidMount() {
  //   const script = document.createElement('script')
  //   script.src = 'https://widget.picatic.com/latest/js/embed.min.js'
  //   script.async = true
  //   script.id = 'picatic-widget-script'
  //   document.getElementsByTagName('body')[0].appendChild(script)
  // }
}

export default EventCard
