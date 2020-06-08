import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import FormAddContacts from "./FormAddContacts/FormAddContacts";
import FormFilter from "./FormFilter/FormFilter";
import ContactList from "./ContactList/ContactList";
import styles from "./app.module.css";
import slideLeft from "../transition/slideLeft.module.css";

class App extends Component {
  state = {
    isRender: false,
  };

  componentDidMount() {
    this.setState({
      isRender: true,
    });
  }

  render() {
    const { isRender } = this.state;
    const { contacts } = this.props;

    return (
      <div className={styles.container}>
        <CSSTransition
          in={isRender}
          timeout={500}
          classNames={slideLeft}
          unmountOnExit
        >
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>

        <FormAddContacts />

        {contacts.length > 0 && (
          <>
            <FormFilter />
            <ContactList />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  filter: "",
});

export default connect(mapStateToProps)(App);
