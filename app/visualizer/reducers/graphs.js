const graphs = (state={
  maxBars:false,
  minBars: false,
  range: 99,
  colors: ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red"]
  }, action) => {
    switch (action.type) {
      case 'MAX_BARS':
        return {
          ...state,
          maxBars: action.payload
        }
      case 'MIN_BARS':
        return {
          ...state,
          minBars: action.payload
        }
      default:
        return state
    }
  }

export default graphs;
