// Components
export * from './components'
export * from './components/ChatWindow'

// Services
export {
  createTicket,
  getTickets,
  cancelTicket,
  getAttachmentUrl,
  addTicketReply,
  type CreateTicketData,
  type User,
  type Ticket,
  type TicketActivity
} from './services/tickets'

// Contexts
export * from './contexts/AuthContext'

// Config
export {
  type TicketPriority,
  type TicketStatus,
  TICKET_PRIORITIES,
  TICKET_STATUSES,
  getPriorityDetails,
  getStatusDetails,
  isHighSeverity
} from './config/tickets'
export * from './config/layout'

// Utils
export * from './lib/utils'
export * from './lib/supabase'
// Remove AI exports for now until we have the basic embedding working
