import logo from './logo.svg';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from "query-string";
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock';

function App() {
  const [todoList, setTodoList] = useState(
    [
      { id: 1, title: 'I love Easy Frontend! 😍' },
      { id: 2, title: 'We love Easy Frontend! 🥰' },
      { id: 3, title: 'They love Easy Frontend! 🚀' },
    ]
  );

  const [postList, setPostList] = useState([]);

  const [pagination,setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  })

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })

  useEffect( () => {
    async function fetchPostList(){
      try {
        // pake query string change object to _page = 10 and _limit = 1
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const {data, pagination} = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    
    }
    console.log('POST list effect');
     fetchPostList();
  }, [filters]); 

    useEffect(() => {
      console.log('TODO list effect');
    }); //Luon chay sau moi lan render

    function handlePageChange(newPage){
      console.log(newPage);
      setFilters({
        ...filters,
        _page: newPage,
      })
    }

  function hanldeTodoClick(todo){
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if(index <0 ) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index,1);
    setTodoList(newTodoList);
  }
  function hanleTodoFormSubit (formValues) {
    console.log('Form Values: ', formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleFiltersChange(newFilters) {
    console.log('New filters: ', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }
  const [showClock, setshowClock] = useState(true);
  return (
    <div className="App">
      <ColorBox />
      <TodoForm onSubmit = {hanleTodoFormSubit}/>
      <TodoList todos={todoList} onTodoClick = {hanldeTodoClick}/>
      <PostList posts = { postList }/>
      <Pagination pagination = {pagination} 
        onPageChange = {handlePageChange}
      />
      <h3>Form Search </h3>
      <PostFiltersForm onSubmit = {handleFiltersChange} />

      <h3>Clock</h3>

    {showClock &&  <Clock />}
    <button onClick = {()=>setshowClock(false)}>Hide Clock</button>
    </div>
  );
}

export default App;
