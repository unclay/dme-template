export const updatePath = ({ dispatch }, path) => {
  dispatch('UPDATE_PATH', path)
}

export const addDemos = ({ dispatch, demo }) => {
  dispatch('ADD_DEMOS', demo)
}

module.exports = {
  addDemos: function () {
    console.log(11)
  }
}