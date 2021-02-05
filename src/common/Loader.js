import {connect} from 'react-redux'
import PropTypes from "prop-types";

const Loader = ({loader}) => {
  if(!loader) return null
  return (
    <div className="lds-dual-ring"></div>
  )
}

Loader.propTypes = {
  loader: PropTypes.bool.isRequired,
}


const mapStateToProps = state => ({
  loader: state.loader
})

export default connect(mapStateToProps)(Loader)