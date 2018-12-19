import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';
import { connect } from 'react-redux';
import * as actions from './action/TodoActions';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.handleCreate();
    }
  }

  changeColor = (color) => {

    this.setState({
      color:color
    })
  }

  render() {
    const { input, todos, color } = this.props;
    const { changeColor, handleKeyPress } = this;
    const {
      handleChange,
      handleCreate,
      handleToggle,
      handleRemove
    } = this.props;

    return (
      <TodoListTemplate form={
        <Form value={input} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate} color={color}/>
      }
      palette={(
          <Palette colors={colors} selected={color} onSelect={changeColor}/>
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
};

const mapStateToProps = (state) => {
    return {
        input: state.input,
        color: state.color,
        todos: state.todos
    };
};

const mapDispatchProps = (dispatch) => {
    return {
        handleCreate: () => { dispatch(actions.create()) },
        handleRemove: (id) => { dispatch(actions.remove(id)) },
        handleToggle: (id) => { dispatch(actions.toggle(id)) },
        handleChange: (e) => { dispatch(actions.changeValue(e)) }
    };
};

export default connect(mapStateToProps, mapDispatchProps)(App);
