import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./FormFilter.module.css";
import { filterContactAction } from "../../redux/actions";

const FormFilter = ({ value, onFilterContacts }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find Contact with Name
        <input
          type="text"
          onChange={(e) => onFilterContacts(e.target.value)}
          className={styles.input}
          value={value}
        />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterContacts: (name) => dispatch(filterContactAction(name)),
});

FormFilter.propTypes = {
  value: PropTypes.string,
  onFilterContacts: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);
