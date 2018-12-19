import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';
import { connect } from 'react-redux';
import * as actions from './action/TodoActions';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {

  // id = 0
  //
  // state = {
  //   input: '',
  //   color: '#343a40',
  //   todos: []
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     input: e.target.value
  //   });
  // }

  // handleCreate = () => {
  //   const { input, todos, color } = this.state;
  //   this.setState({
  //     input: '',
  //     todos: todos.concat({
  //       id: this.id++,
  //       text: input,
  //       checked: false,
  //       color: color
  //     })
  //   });
  // }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.handleCreate();
    }
  }

  // handleToggle = (id) => {
  //   const { todos } = this.state;
  //
  //   const index = todos.findIndex(todo => todo.id === id);
  //   const selected = todos[index];
  //
  //   const nextTodos = [...todos];
  //
  //   nextTodos[index] = {
  //     ...selected,
  //     checked: !selected.checked
  //   };
  //
  //   this.setState({
  //     todos: nextTodos
  //   });
  // }

  // handleRemove = (id) => {
  //   const {todos} = this.state;
  //   this.setState({
  //     todos: todos.filter(todo => todo.id !== id)
  //   });
  // }

  changeColor = (color) => {

    this.setState({
      color:color
    })
  }

  render() {
    const { input, todos, color } = this.props;
    const {
      //handleChange,
    //  handleCreate,
      handleKeyPress,
    //  handleToggle,
    //  handleRemove,
      changeColor
    } = this;

    return (
      <TodoListTemplate form={
        <Form value={input} onKeyPress={handleKeyPress} onChange={this.props.handleChange} onCreate={this.props.handleCreate} color={color}/>
      }
      palette={(
          <Palette colors={colors} selected={color} onSelect={changeColor}/>
      )}>
        <TodoItemList todos={todos} onToggle={this.props.handleToggle} onRemove={this.props.handleRemove}/>
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
