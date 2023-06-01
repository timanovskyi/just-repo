import React, { Component } from 'react';
import { AppProps, AppState, StoreState, Todo } from '../models';
import { connect } from 'react-redux';
import { deleteTodo, fetchTodos } from '../actions';

class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  override componentDidUpdate(prevProps: Readonly<AppProps>) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  override render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch todos</button>
        {this.state.fetching ? <h2>Loading, just wait</h2> : this._renderList()}
      </div>
    );
  }

  onButtonClick = () => {
    this.setState({ fetching: true });
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  private _renderList(): JSX.Element[] {
    return this.props.todos.map((t: Todo) => {
      return (
        <div key={t.id} onClick={() => this.onTodoClick(t.id)}>
          <div>{t.title}</div>
        </div>
      );
    });
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
