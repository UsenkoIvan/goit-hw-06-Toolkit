import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";
import pop from "../../transition/pop.module.css";
import styles from "./ContactList.module.css";
import { deleteContactsAction } from "../../redux/actions";

const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = ({ contacts = [], filter, onDelete }) => {
  const filteredContacts = filterContacts(contacts, filter);

  return (
    <>
      <TransitionGroup component="ul" className={styles.list}>
        {filteredContacts.map(({ name, number, id }) => (
          <CSSTransition key={id} timeout={250} classNames={pop} unmountOnExit>
            <ContactItem
              name={name}
              number={number}
              id={id}
              onDelete={onDelete}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteContactsAction(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  filter: PropTypes.string,
  onDelete: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
