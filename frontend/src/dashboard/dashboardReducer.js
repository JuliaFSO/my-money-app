const INITIAL_STATE = { summary: { credit: 0, debt: 0 } }

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BILLING_SUMMARY_FETCHED':
      return { ...state, summary: action.payload.data }
    default:
      return state
  }
}

export default dashboardReducer;
