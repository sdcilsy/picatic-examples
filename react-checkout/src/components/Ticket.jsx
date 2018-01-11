import React, { Component } from 'react'

// Material UI
import Typography from 'material-ui/Typography'

const Ticket = ({ ticket }) => {
  const {
    name,
    price,
    quantity,
    quantity_sold,
    status,
    type,
    min_quantity,
    max_quantity,
  } = ticket.attributes
  return (
    <div className="row">
      <div className="col">{name}</div>
      <div className="col">{price}</div>
      <div className="col">
        <input
          type="number"
          className="form-control text-center"
          // value={value}
          // onChange={this.selectTicket}
          placeholder="0"
          min="0"
          max={max_quantity}
        />
      </div>
    </div>
  )
}

export default Ticket

class Ticket extends Component {
  selectTicket = event => {
    event.preventDefault()
    const { value } = event.target
    const { ticket, selectTickets } = this.props
    selectTickets(ticket, Number(value))
  }

  render() {
    const { selectedQuantity, ticket, waitlistTickets } = this.props

    let ticketQuantity = selectedQuantity

    const { tickets } = selectedQuantity
    if (tickets) {
      ticketQuantity = tickets.filter(
        ({ ticket_price }) =>
          ticket_price.ticket_price_id === Number(ticket.id),
      )
    }

    const value = ticketQuantity > 0 ? ticketQuantity : ''

    const {
      name,
      price,
      max_quantity,
      quantity,
      quantity_sold,
      status,
    } = this.props.ticket.attributes

    const ticketsRemaining = Math.max(quantity - quantity_sold, 0)

    const maxQuantity =
      max_quantity > 0
        ? Math.min(max_quantity, ticketsRemaining)
        : ticketsRemaining

    const soldOut = maxQuantity === 0
    const open = status === 'open'
    const closed = status === 'closed'

    const waitlist = ticket.attributes.waitlist
    const activeWaitlist = waitlist && (closed || soldOut)

    const priceName = activeWaitlist ? 'join waitlist' : `$${parseFloat(price)}`

    return (
      <div key={ticket.id} className="mdl-grid align-items-center">
        <div className="mdl-cell mdl-cell--8-col">{name}</div>
        <div className="mdl-cell mdl-cell--4-col">
          <div className="form-row align-items-center float-right">
            <div className="col-auto">{priceName}</div>

            {!soldOut && (
              <div className="col-auto">
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control text-center"
                    value={value}
                    onChange={this.selectTicket}
                    placeholder="0"
                    min="0"
                    max={maxQuantity}
                  />
                </div>
              </div>
            )}

            {soldOut && <div className="col-auto">SOLD OUT</div>}
          </div>
        </div>
      </div>
    )
  }
}

export default Ticket
