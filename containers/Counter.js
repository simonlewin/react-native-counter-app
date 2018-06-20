import { connect } from "react-redux";

import Counter from "../components/Counter";

import { incrementAction, decrementAction, resetCountAction, resetHistoryAction } from "../data/actions"

const mapStateToProps = (state) => ({
  count: state.count,
  history: state.history,
});

const mapDispatchToProps = (dispatch) => ({
  onIncPress: () => dispatch(incrementAction(Date.now())),
  onDecPress: () => dispatch(decrementAction(Date.now())),
  onResetCount: () => dispatch(resetCountAction()),
  onResetHistory: () => dispatch(resetHistoryAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);