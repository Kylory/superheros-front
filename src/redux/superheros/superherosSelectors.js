const getContacts = (state) => state.contacts.contactsList
const getFilter = (state) => state.contacts.filter
const isLoading = (state) => state.contacts.isLoading
const error = (state) => state.contacts.error

export { getContacts, getFilter, isLoading, error }
