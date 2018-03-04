import React from "react";
import { connect } from "react-redux";
import { User } from "./User";
import { store } from "../../store";

interface UserProps {
  attributes: {
    "first-name": string;
    "last-name": string;
  };
}

interface UsersProps {
  users: {
    data: UserProps[];
  };
}

interface UsersState {}

class Users extends React.PureComponent<UsersProps, UsersState> {
  componentDidMount() {
    store.dispatch({ type: "USERS/FETCH_USERS" });
  }

  render() {
    const { users } = this.props;
    if (!users) {
      return <h1>Loading users...</h1>;
    }
    return (
      <div>
        <h1>Users:</h1>
        {users.data.map(User)}
      </div>
    );
  }
}

function mapStateToProps({ api }: RootState) {
  const { users } = api;
  return {
    users,
  };
}

export default connect(mapStateToProps)(Users);
