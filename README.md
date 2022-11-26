ReactJs;

* Library

* ReactJs app:
    * npx create-react-app app-name
    * cd ./app-name 
    * npm start

Components:
    * Components lets you to split the UI into indepentent reusable pieces.
    * It's just a js function.
    * component name must be PascalCase(FileName.js)
    * Any envent in the component must be camelCase(onClick)

Components types(2):
    * Stateless function Component
    * Statefull class Component(has it's own state(private data))

Stateless function Component:
-----------------------------
    Literally a js function that return react element:
        function Greet(props){
            return(
                <h1> Hello {props.name} </h1>
            )
        }

Statefull class Component:
--------------------------
    ES6 - class:
        Method-1:
        ---------
        class Greet extends React.Component {
            return(
                <h1> hello {this.props.name} </h1>
            )
        }
    Method-2:
    ---------
        import React,{ Component } from 'react'
        class Greet extends Component {
            return(
                <h1> hello {this.props.name} </h1>
            )
        }
        export default Greet


(component name export method).
-------------------------------
    * Greet.js:
      ---------
        import React from 'react'
        export const Greet = () => <h1> Hello Steve </h1>

    * App.js: 
    ---------
        import './App.css';

        import { Greet } from './components/Greet'

        function App() {
        return (
            <div className="App">
                {/* <GreetComponent /> */}
                <Greet />         
            </div>
        );
        }

        export default App;

JSX - javaScript XML
--------------------
    * 2-ways of creating Dom elements in React:
    -------------------------------------------
        * JSX 
        * React.createElement()

    with JSX:
    ----------
        * const Greet = () => <h1> Hello world </h1>

    with React.createElement:
    -------------------------
        const Greet = () => {
            return(
                React.createElement('div',{id:'container'},
                    React.createElement('h1',null,'Hello world')
                )
            )
        }

    
props : (Prameters)
------
    * Porps are immutables

    * props in Function component:
    ------------------------------
        parameters are passed using {props} keyowrd
        App.js:
        -------
            <Greet name='Stark' heroName='IronMan' />
                
        Greet.js:
        ---------
            import React from 'react'
            export const Greet = (props) => {
                return(
                <div>
                    <h1>
                        Hello {props.name} a.k.a {props.heroName}
                    </h1>
                </div> 
                ) 
            } 

        passing a children component:
        ---------------------------
            App.js:
            ------
                <Greet name='Stark' heroName='IronMan'>
                    // create a children to render 
                    <p>Childer props</p>
                </Greet>
            
            Greet.js:
            --------
                import React from 'react'
                export const Greet = (props) => {
                    console.log(props);
                    return(
                    <div>
                            <h1>
                                Hello {props.name} a.k.a {props.heroName}
                            </h1>

                            // invoke the children in the Parent Component
                            {props.children} 
                    </div> 
                    ) 
                } 

    * Props in class component:
    ---------------------------
        * In class component the parameters are passed using { this.props } keyowrd

            welcome.js:
            -----------
                import React, { Component } from 'react'
                class Welcome extends Component {
                    render(){
                        return(
                            <h1> Welcome {this.props.name} a.k.a {this.props.heroName} </h1>
                        )
                    }
                }

                export default Welcome


State:
------
    * state are mutable.
    * state is an object that is privately maintained within the component
    * state can influence what can be rendered in component
    * state can be changed within the component. 

Message.js :
------------
State in class component:
------------------------
    * create a state using constructor
    * Create a event to change the state
        eg: onClick()
        * the event has a arrow funcion calling the function using this(keyowrd)

    * create the function that used to change the state,
        using setState() method. which has a object as the key:value 
        
    import React, { Component } from 'react'
    class Message extends Component {

        constructor(){
            super()
            this.state = {
                message : 'welcome visitor'
            }
        }
        changeMsg(){
            this.setState({
                message : 'Thankyou for subscribing .'
            })
        }
        render(){
            return(
                <div>
                    <h1> {this.state.message} </h1>
                    <button onClick={ () => this.changeMsg() }>Subscribe</button>
                </div>
            )
        }
    }

    export default Message

setState:
---------
   
    * Always make use of setState and never modify the state directly
    * code has to be executed after the state has been updated, 
        * setState has 2-parameters
            1, state object 
            2, callback function
    * place the code in a callback function which is the second parameter to setState Method.
    * When you neet to update a state value based on previous value , 
      pass the function as argument insted of regular object.

    Counter.js:
    -----------
        import React, { Component } from 'react'

        class Counter extends Component {
            constructor(props) {
                super(props)
                this.state = {
                    count: 0
                }
            }
            
            incFun(){
                * Always make use of setState and never modify the state directly
                * code has to be executed after the state has been updated,
                * place the code in a callback function which is the second parameter to setState Method.
                this.setState(
                    {
                        count : this.state.count + 1 
                    },
                    () => { console.log('callback value : ',this.state.count); }
                )
            }
              
            render() {
                return (
                <div>
                    <div>
                        Count - {this.state.count}
                    </div>
                    <button onClick = { () => this.incFun() }> Increment </button>
                </div>
                )
            }
        }

        export default Counter

    * When you neet to update a state value based on previous value ,
      pass the function as argument insted of regular object.
    --------------------------------------------------------------------------------------------------------
    
        import React, { Component } from 'react'

        class Counter extends Component {
            constructor(props) {
                super(props)
                this.state = {
                    count: 0
                }
            }
            incFun(){
                this.setState(
                    (prevState) => ({
                        count : prevState.count + 1
                    })
                )
            }
            incFive(){
                this.incFun()
                this.incFun()
                this.incFun()
                this.incFun()
                this.incFun()
            }   
            render() {
                return (
                <div>
                    <div>
                        Count - {this.state.count}
                    </div>
                    <button onClick = { () => this.incFive() }> Increment </button>
                </div>
                )
            }
        }

  


Destructing props:
---------------------
    * Destructuring was introduced in ES6
    * Destructuring is a simple property that is used to make code much clear and readable
    * Destructuring gives access to the use of props in a more readable format and discards the need for props for every property

    Destructing Props(function):
    ----------------------------
    Greet.js:(normal)
    ---------
        // import React from 'react'

        // export const Greet = (props) => {
        //     console.log(props);
        //     return(
        //        <div>
        //             <h1>
        //                 Hello {props.name} a.k.a {props.heroName}
        //             </h1>
        //             {props.children} 
        //        </div> 
        //     ) 
        // } 


        // method-1( destructured )
        ------------------------------
        // destructuring in the parameters 

        // import React from 'react'

        // export const Greet = ( {name, heroName} ) => {
        //     return(
        //        <div>
        //             <h1>
        //                 Hello {name} a.k.a {heroName}
        //             </h1>
        //        </div> 
        //     ) 
        // } 

        // method-2
        ------------
        // destructuring inside function Body

        import React from 'react'
        export const Greet = (props) => {
            const {name, heroName} = props
            return(
            <div>
                    <h1>
                        Hello {name} a.k.a {heroName}
                    </h1>
            </div> 
            ) 
        }   
        
    Destructing Props(class):
    ----------------------------
    Welcome.js:
    -----------
        // import React, { Component } from 'react'

        // class Welcome extends Component {
        //     render(){
        //         return(
        //             <h1> Welcome {this.props.name} a.k.a {this.props.heroName} </h1>
        //         )
        //     }
        // }

        // export default Welcome

        // props Destructure:
        // method-1
        import React, { Component } from 'react'

        class Welcome extends Component {
            render(){
                const {name, heroName} = this.props
                return(
                    <h1> Welcome {name} a.k.a {heroName} </h1>
                )
            }
        }

        export default Welcome

    Destructing State:
    ------------------
    GreetDestructurePropsClass.js:
    ------------------------------
        import React, { Component } from 'react'

        class GreetDestructurePropsClass extends Component{
            constructor(props) {
            super(props)
                this.state = {
                    place: 'Quience'
                }
            }
            render() {
                const { name, identity } = this.props 
                const { place } = this.state
                
                return(
                    <>
                        <p> {name} is {identity} from {place} </p>
                    </>
                )
            }
        }

        export default GreetDestructurePropsClass

EventHandling:
--------------
    * events must be a camelCase declaration.
    * onClick={ clickHandler } 
        event(eg:onClick) should call a function { clickHandler }  
        & not a functionCall { clickHandler() }
    Function:
    ---------
    FunctionClick.js:
    -----------------
        import React from 'react'

        function FunctionClick() {
        function clickHandler(){
            console.log('button clicked');
        }  
        return (
            <div>
                <button onClick={ clickHandler }>Click</button>
            </div>
        )
        }

        export default FunctionClick
    
    class:
    ------
    ClassClick.js:
    --------------
        import React, { Component } from 'react'

        class ClassClick extends Component {
            clickHandler(){
                console.log('class-btn clicked');
            }
        render() {
            return (
            <div>
                <button onClick={this.clickHandler}>Class-Btn</button>
            </div>
            )
        }
        }

        export default ClassClick

Binding the event:
------------------
    * we need to bind the event-to-this ,
        because 'this' keyowrd in class component is undefind.
        ------------------------------------------------------
    * There are 4 methods to bind this to event;
    * Method 3,4 are recommended to use.

        1, bind keyowrd
        ---------------
            EventBind.js:
            -------------
            export class EventBind extends Component {
                constructor(props) {
                    super(props)
                
                    this.state = {
                        message : 'hello'
                    }
                }
                clickHandler(){
                    this.setState({
                        message : 'Goodbye'
                    })
                    console.log(this);
                }

                render() {
                    return (
                    <div>
                        <div>{this.state.message}</div>
                        {/* method-1 : bind */} 
                        <button onClick={this.clickHandler.bind(this)}>EventBind-Btn</button> 
                    </div>
                    )
                }
            }

        2, Using Arrow function
        -----------------------
            export class EventBind extends Component {
                constructor(props) {
                    super(props)
                
                    this.state = {
                        message : 'hello'
                    }
                }
                clickHandler(){
                    this.setState({
                        message : 'Goodbye'
                    })
                    console.log(this);
                }

                render() {
                    return (
                    <div>
                        <div>{this.state.message}</div>
                        {/* method-2 Arrow-Function */}
                        <button onClick={ ()=> this.clickHandler() }>EventBind-Btn</button>
                    </div>
                    )
                }
            }

        3, Bind in a class constructor:
        ------------------------------
            export class EventBind extends Component {
                constructor(props) {
                    super(props)
                
                    this.state = {
                        message : 'hello'
                    }
                   this.clickHandler = this.clickHandler.bind(this)

                }
                clickHandler(){
                    this.setState({
                        message : 'Goodbye'
                    })
                    console.log(this);
                }

                render() {
                    return (
                    <div>
                        <div>{this.state.message}</div>
                        {/* method-3 Binding in class constructor */}
                        <button onClick={ this.clickHandler }>EventBind-Btn</button>
                    </div>
                    )
                }
            }

        4, Arrow function as class property:
        ------------------------------------
            export class EventBind extends Component {
                constructor(props) {
                    super(props)
                
                    this.state = {
                        message : 'hello'
                    }
                   this.clickHandler = this.clickHandler.bind(this)

                }
                clickHandler = () => {
                    this.setState({
                        message : 'Goodbye'
                    })
                    console.log(this);
                }

                render() {
                    return (
                    <div>
                        <div>{this.state.message}</div>
                        {/* method-4 arrow function as class property */}
                        <button onClick={ this.clickHandler }>EventBind-Btn</button>
                    </div>
                    )
                }
            }

Method as props:
----------------
    * we can pass a method as props from Parent-to-child component 
    * here we are going to acces a button which is in the child component from the parent component.
    * create a ParentComponent.js and write a class component funtion;
    * Import the ChildComponent & render it in ParentComponent return method.
    * create a constructor and pass obj {parentName:'parent'}
    * create a greetHandler() function for event trigger with alert msg.
    * bind the event in the constructor
    * In ChildComponent return pass a method name to create a props.
        greetHandler={this.greetParent}
    * In ChildComponent, onClick event we pass method as props using arrow funcion.
    

    ChildComponent:
    ---------------
        import React from 'react'

        function ChildComponent(props) {
        return (
            <div>
                <button onClick={ () => {props.greetHandler('child')}}>Greet Parent</button>
            </div>
        )
        }

        export default ChildComponent

    ParentComponent.js;
    -------------------
        import React, { Component } from 'react'
        import ChildComponent from './ChildComponent'

        export class ParentComponent extends Component {
            constructor(props) {
                super(props)
                
                this.state = {
                    parentName : 'parent'
                }
                this.greetParent = this.greetParent.bind(this)
            }
            greetParent(childName){
                alert(`Hello ${this.state.parentName} from ${childName}`)
            }
            render() {
                return (
                <div>
                    <ChildComponent greetHandler={this.greetParent} />
                </div>
                )
            }
        }

        export default ParentComponent

Conditional Rendering:
----------------------
    There are 4 methods to render:
        1, if-else
        2, Element variable
        3, Ternary operator 
        4, Short circuit operator(return only what we want(true value))
    
    UserGreeting.js
    ---------------

        Method-1;
        ---------
            import React, { Component } from 'react'

            class UserGreeting extends Component {
                    constructor(props) {
                    super(props)
                    
                    this.state = {
                        isLoggedIn: true
                    }
                }

                render() {
                    if(this.state.isLoggedIn){
                        return(
                            <p> Welcome Surya </p>
                        )
                    } else {
                        return(
                            <p> Welcome Guest </p>
                        )
                    }
                }
            }

            export default UserGreeting
       
       Method-2:
       ---------
            import React, { Component } from 'react'

            class UserGreeting extends Component {
                constructor(props) {
                    super(props)
                    
                    this.state = {
                        isLoggedIn: false
                    }
                }

                render() {
                    let message
                    if(this.state.isLoggedIn){
                        message = <div>Welcome Joe </div>
                    } else {
                        message = <div> Welcome Guest </div>
                    }
                    return(
                        <>
                            {message}
                        </>
                    )
                }
            }

            export default UserGreeting

        Method-3:
        ---------
            import React, { Component } from 'react'

            class UserGreeting extends Component {
                constructor(props) {
                    super(props)
                    
                    this.state = {
                        isLoggedIn: true
                    }
                }

                render() {
                    return(
                        this.state.isLoggedIn ? <> Welcome BraveStone </> : <> Welcome Guest </>
                    )
                }
            }

            export default UserGreeting

        Method-4:
        ---------
            import React, { Component } from 'react'

            class UserGreeting extends Component {
                constructor(props) {
                    super(props)
                    
                    this.state = {
                        isLoggedIn: false
                    }
                }

                render() {
                    return(
                        this.state.isLoggedIn && <> Welcome Steve </>
                    )
                }
            }

            export default UserGreeting

List Rendering :
----------------
    * map() -method accept function as it's argument:
        const nameList = names.map( name => <h2>{ name }</h2> )
    * pass Person.js as props 

    Name.js:
    --------
        import React from 'react'
        import Person from './Person'

        function NameList() {
            // default 
        //     const names = ['Clark','Bruce','Diana']
        //     const nameList = names.map( name => <h2>{ name }</h2> )
        //   return (
        //     <div>
        //         { nameList }
        //     </div>
        //   ) 

        // modern way 
            const persons = [
                {
                    id:1,
                    name:'Clark',
                    age:30,
                    skill:'React'
                },
                {
                    id:2,
                    name:'Bruce',
                    age:32,
                    skill:'Js'
                },
                {
                    id:3,
                    name:'Diana',
                    age:25,
                    skill:'Python'
                }
            ]

            const personList = persons.map( person => <Person person={person} /> )
            return(
                <div>
                    {personList}
                </div>
            )
        }

        export default NameList 
    
    Person.js:
    ----------
        import React from 'react'

        function Person({person}) {
        return (
            <div>
                <h2> 
                    I am {person.name}, a {person.age} old. working as {person.skill} developer. 
                </h2>
            </div>
        )
        }

        export default Person

List & key:
-----------
    * special string attribute need in list
    * keys are unique element that help to identify specific element
    * we can add,remove,update an data with the help of it's 'key-value(id)'.

    warining error:
    ---------------
    Warning: Each child in a list should have a unique "key" prop.

    Check the render method of `NameList`. See https://reactjs.org/link/warning-keys for more information.
    Person@http://localhost:3000/main.3bd7ba3f9863d9cd8348.hot-update.js:26:7
    NameList
    div
    App

    NameList.js:
    ------------
         const personList = persons.map( person => <Person key={person.id} person={person} /> )
        return(
            <div>
                {personList}
            </div>
        )
    Person.js:
    ----------
        import React from 'react'

        function Person({person,key}) {
        return (
            <div>
                <h2> 
                {key}, I'm {person.name}, a {person.age} old. working as {person.skill} developer. 
                </h2>
            </div>
        )
        }

        export default Person       

    Warning: Each child in a list should have a unique "key" prop.

    Check the render method of `NameList`. See https://reactjs.org/link/warning-keys for more information.
    Person@http://localhost:3000/main.3bd7ba3f9863d9cd8348.hot-update.js:26:7
    NameList
    div
    App

Index & keys :
--------------
    * index cann't be used, when duplication in list 
    * never use index when id is present.
    * use list in static list, which will not change.
    * list shouldn't be reordered or filtered

    Warning: Encountered two children with the same key, `Bruce`.
    Keys should be unique so that components maintain their identity across updates. 
    Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
    div
    NameList
    div
    App

    NameList.js :
    -------------
        import React from 'react'
        import Person from './Person'

        function NameList() {
            const names = ['Clark','Bruce','Diana']
            const nameList = names.map( (name, index) =>
                <h2 key={index}>
                    {index} : {name} 
                </h2> )
           
           return(
                <div>
                    {nameList}
                </div>
            )
        }

        export default NameList


Stylesheet in reactJs :
-----------------------
4 methods:
    * css Stylesheet
    * Inline styling
    * Css Modules
    * css in Js libaries

    App.js:
    -------
        <Stylesheet primary={true} />

    Stylesheet.css:
    ---------------
        import React from 'react'
        import './myStyle.css'

        function Stylesheet(props) {
            let className  = props.primary ? 'primary' : ''
            return (
                <div>
                    <h1 className={className}>Stylesheet</h1>
                </div>
            )
        }

        export default Stylesheet   

    myStyle.css:
    ------------
        .primary{
            color:orange
        }

    template literals:
    ------------------
        Stylesheet.js:
        --------------
            <h1 className={`${className} font-xl`}>Stylesheet</h1>

        myStyle.css:
        ------------
            .font-xl{
                font-size: 72px;
            }

      Inline-style:
      -------------
        Inline.js:
        ----------
            * create an object for css style.
            * the css attribute must be a camelcase .
            
            import React from 'react'

            const heading = {
                fontSize:'72px',
                color:'green'
            }
            function Inline() {
            return (
                <div>
                    <h2 style={heading}>Inline</h2>
                </div>
            )
            }

            export default Inline

        export default Counter
    
    css modules:
    ------------
        regular css (vs) module.css:
        ----------------------------
        appStyle.css:
        -------------
            .error{
                color:red
            }

        appStyle.module.css:
        --------------------
            .success{
                color:green
            }
        
        App.js:
        -------
            import './components/appStyles.css'
            import styles from './components/appStyle.module.css'

            <h1 className='error'>Error</h1>
            <h1 className={styles.success}>Success</h1>


Form-Handling :
---------------
    * In react the form handling is done using state,setstate and event;
    Controlled component:
    ---------------------
    * we neet to capture the input value(state) to a 'value' attribute in <input>
    * then update that value(state) using 'onChange' event in setState.
    * use onChange event to get the state(input) value, with {event.target.value} we can
        rendre whatever is typed in the fields.
    * prevent Reloading of a page:
        event.preventDefault()
    * Alert the form by submit Btn
        alert(`${this.state.userName} ,${this.state.comments} ,${this.state.topic}`)

    Form.js;
    --------
        import React, { Component } from 'react'

        class Form extends Component {
            constructor(props) {
                super(props)
            
                this.state = {
                    userName: '',
                    comment: '',
                    topic: 'react'
                }
            }

            handleChange = (event) => {
                this.setState(
                    { userName: event.target.value }
                )
            }

            handleCommentChange = (e) => {
                this.setState(
                    { comment: e.target.value }
                )
            }

            handleTopicChange = (e) => {
                this.setState(
                    { topic: e.target.value }
                )
            }

            handleSubmit = (e) => {
                alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
                e.preventDefault()
            }

            render() {
                const { userName, comment, topic } = this.state
                return (
                <div>
                    <h2> Form Component </h2>

                    <form onSubmit={ this.handleSubmit }>

                        <div>
                                <label>UserName : </label>
                                <input 
                                    type='text' 
                                    value={userName}
                                    onChange={ this.handleChange }
                                />
                        </div>

                        <div>
                                <label>Comment : </label>
                                <textarea
                                    value={comment}
                                    onChange={this.handleCommentChange}
                                ></textarea>
                        </div>

                        <div>
                                <label>Topic : </label>
                                <select
                                    value={topic}
                                    onChange={ this.handleTopicChange }
                                >
                                    <option value='react'> React </option>
                                    <option value='angular'> Angular </option>
                                    <option value='vue'> Vue </option>
                                </select>
                        </div> 

                        <button type='submit'>Submit</button>
                    </form>
                </div>
                )
            }
        }

        export default Form

LifeCycle methods:
------------------
    4-Phases:
        1, Mounting - instance of a componet is being created and inserted into the DOM
        2, updating - component is being re-rendered as a result of change to either its props or state
        3, Unmounting - componet are removed for DOM
        4, error-handling - error in Rendering the LifeCycle method,or constructor of any child component
    
        Mounting:
        --------
            1, constructor
            2, Static getDerivedStateFrom Props
            3, Render and componentDidMount
        Updateing:
        ----------
            1, Static getDerivedStateFrom Props
            2, shouldComponentUpdate
            3, render
            4, getSnapshotBeforeUpdate
            5, ComponentDidUpdate
        Unmounting:
        ----------
            1,componentWillUnMount
        Error-handling:
        ---------------
            1, static get DerivedFromError
            2, ComponentDidCatch

Mounting:
---------
    Execution Flow in Mounting:
    ---------------------------
        Constructor --> Static getDerivedStateFromProps(props, state) --> render() --> componentDidMount()

        Constructor:
        ------------
            * Special function that will get called whenever a new component is created 
            Used for:
            ---------
                Initializing state 
                Binding the event 
            Do Not:
            -------
                cause side-effects(http request)
            super(props)
            ------------
                Directly overwrite 'this.state'

        Static getDerivedStateFromProps(state, props)
        ---------------------------------------------
            * used when state of the component depends on changes in props over time
            * cann't call this.state 
            * return(obj(represent new state))
            * don't cause side-effects
        
        render():
        ---------
            * Reads props & state and return JSX 
            * Don't cause side-effects
            * Cann't change state (or) interact with DOM (or) make ajax call 

        componentDidMount()
        -------------------
            * invoked immediately after a component and all its children components have 
              been rendered to the DOM.
            * side-effects can occure

        render()
        --------

    LifeCycle.js :
    --------------
        import React, { Component } from 'react'
        import LifechcleB from './LifecycleB';

        class LifechcleA extends Component {
        constructor(props) {
            super(props)

            this.state = {
                name:'surya'
            }
        //   method-1
            console.log('LifecycleA constructor');
        }
        // method-2 
        static getDerivedStateFromProps(props,state){
            console.log('LifecycleA getDerivedStateFromProps');
            return null
        }

        // method-4:
        componentDidMount(){
            console.log('lifecycleA componentDidMount');
        }
        render() {
        // method-3
        console.log("lifecyclyeA render");
            return (
                <div>
                <div>
                    Lifecycle-A
                </div> 
                <LifechcleB />
                </div>
            )
        }
        }

        export default LifechcleA
    
    LifechcleB.js:
    --------------
        import React, { Component } from 'react'

        class LifechcleA extends Component {
            constructor(props) {
                super(props)
                
                this.state = {
                    name:'surya'
            }
            //   method-1
            console.log('LifecycleB constructor');
            }
            // method-2 
            static getDerivedStateFromProps(props,state){
                console.log('LifecycleB getDerivedStateFromProps');
                return null
            }

            // method-4:
            componentDidMount(){
                console.log('LifecycleB componentDidMount');
            }
        render() {
            // method-3:
            console.log("LifecycleB render");
            return (
            <div>
                    Lifecycle-B
            </div>
            )
        }
        }

        export default LifechcleA

        console:
        --------
            * LifechcleA(parent) componentDidMount will execute only
              after the LifechcleB(child) component componentDidMount 
        LifecycleA constructor 2 bundle.js:311:13
        LifecycleA getDerivedStateFromProps 2 bundle.js:315:13
        lifecyclyeA render 2 bundle.js:324:13
        LifecycleB constructor 2 bundle.js:406:13
        LifecycleB getDerivedStateFromProps 2 bundle.js:410:13
        LifecycleB render 2 bundle.js:419:13
        LifecycleB componentDidMount bundle.js:416:13
        lifecycleA componentDidMount bundle.js:321:13

Updating lifecycle methods:
---------------------------

    1, static getDerivedStateFromProps(props, state)
    2, shouldComponentUpdate(nextProps, nextState){
            return(null or value)
        }
        * performance optimization
    3, render()
    4, getSnapshotBeforeUpdate(prevProps, prevState){
            return(null or value)
        }
    5, componentDidUpdate(prevProps, prevState, snapshot){
        called only once & cause side-effects 
    }

    * render, ComponentDidUpdate are most commonly used, & other 3 are rarly used.
    * the update must be triggered using event.
        changeState()

    each-method execution order:
    ----------------------------
    LifecycleA getDerivedStateFromProps 2 bundle.js:134:13
    L-A-shouldComponentUpdate 2 bundle.js:143:13
    lifecyclyeA render 2 bundle.js:155:13
    LifecycleB getDerivedStateFromProps 2 bundle.js:248:13
    L-B-shouldComponentUpdate 2 bundle.js:257:13
    LifecycleB render 2 bundle.js:268:13
    L-B-getSnapshotBeforeUpdate bundle.js:261:13
    L-A-getSnapshotBeforeUpdate bundle.js:147:13
    L-B-componetDitUpdate bundle.js:265:13
    L-A-componetDitUpdate

    LifechcleA.js:
    --------------
    componentDidMount(){
        console.log('lifecycleA componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('L-A-shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("L-A-getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate(){
        console.log('L-A-componetDitUpdate');
    }

    changeState = () => {
        this.setState({
            name :'code evolutuion'
        })
    }
    render() {
        // method-3
        console.log("lifecyclyeA render");
        return (
        <div>
            <div>
               Lifecycle-A
----->         <button onClick={this.changeState}>Change-state</button>
            </div> 
            <LifechcleB />
        </div>
        )
    }

    LifechcleB.js:
    --------------
        componentDidMount(){
            console.log('LifecycleB componentDidMount');
        }

        shouldComponentUpdate(){
            console.log('L-B-shouldComponentUpdate');
            return true
        }

        getSnapshotBeforeUpdate(prevProps, prevState){
            console.log("L-B-getSnapshotBeforeUpdate");
            return null
        }

        componentDidUpdate(){
            console.log('L-B-componetDitUpdate');
        }

Unmounting Phase:
------------------
    * Method is immediately invoked before a compnent is unmounted and destroyed
    * can cancel any network requests, removing event handlers, 
      cancelling any subscriptions and also invalidating timers.
    * don't call setState()

Error Handling Phase:
---------------------   
    1, static getDerivedStateFromError(error)
    2, componentDidCatch(error, info)
    When there is an error either during rendering, in a lifecycle method, or in the 
    constructor of any child component.
    
React-fragment:
---------------
    * Fragment let you to group child elements, but you cann't pass (id) to it
    * By using a div to group the child elements, it creata a extra <div> tag in the DOM.
    * TO avoid an extra <div> element in DOM, we use <React.Fragment> method.

    FragmentsDemo.js:
    -----------------
        import React from 'react'

        function FragmentsDemo() {
        return (
            // default
            // <div>
            //    <h1>FragmentsDemo</h1>
            //    <p>This is paragraph</p>
            // </div>

            // method-1
            <React.Fragment>
                <h1>FragmentsDemo</h1>
                <p>This is paragraph</p>
            </React.Fragment>

            // // method-2 (you cann't pass id )
            // <>
            //     <h1>FragmentsDemo</h1>
            //     <p>This is paragraph</p>
            // </>
        )
        }

            export default FragmentsDemo

    Refer to : Table.js & Column.js 

Pure-Components: (only used in class component)
-----------------
    * prevents unnessary render 
    * give performance boost.
    * Check the shallow comparision of previous props & state render
        if the render value is = current render value 
        then stop rendering. 
    * For better use, to make all the child components as pure-component.
    * Never mutate a state.return a new state.
    * pure component only re-render the class component
      only when the diff in props, state of the shallow comparision.

    ParentComponent.js :
    --------------------
        import React, { Component } from 'react'
        import PureComp from './PureComp'
        import RegularComp from './RegularComp'

        class ParentComp extends Component {
            constructor(props) {
            super(props)
            
            this.state = {
                name:'surya'
            }
            }

            componentDidMount(){
                setInterval(()=>{
                    this.setState({
                        name:'surya'
                    })
                },2000)
            }
        render() {
            console.log('=========================parent render--------------------------');
            return (
                <div>
                    ParentComp
                    <RegularComp name={this.state.name}></RegularComp>
                    <PureComp name={this.state.name}></PureComp>
                </div>
            
            )
        }
        }

        export default ParentComp

    RegularComp.js;
    ---------------
        import React, { Component } from 'react'

        class RegularComp extends Component {
        render() {
            console.log('Regular render');
            return (
            <div>RegularComp : {this.props.name}</div>
            )
        }
        }

        export default RegularComp

    PureComp.js:
    ------------
        import React, { PureComponent } from 'react'

        class PureComp extends PureComponent {
        render() {
            console.log('pure render');
            return (
            <div>PureComp : {this.props.name}</div>
            )
        }
        }

        export default PureComp

    output:
    
    =========================parent render-------------------------- 2 bundle.js:139:13
    Regular render 2 bundle.js:285:13
    pure render 2 bundle.js:218:13
    =========================parent render-------------------------- 2 bundle.js:139:13
    Regular render 2 bundle.js:285:13
    =========================parent render-------------------------- 2 bundle.js:139:13
    Regular render 2 bundle.js:285:13
    =========================parent render-------------------------- 2 bundle.js:139:13
    Regular render 2 bundle.js:285:13
    =========================parent render-------------------------- 2 bundle.js:139:13
    Regular render 2 bundle.js:285:13
    =========================parent render-------------------------- 2 bundle.js:139:13


Memo (only used in Function Component):
----------------------------------------
    * same as pure-Component compare props,state of shallow component, if not equal the render else not render anything.
    * Used for funcion component.
    * export default React.memo(MemoComp) ,which trigger memo function.

    Memo.js:
    --------
        import React from 'react'

        function MemoComp({name}) {
            console.log('render-memo');
            return (
                <div>
                    {name}
                </div>
            )
        }

        export default React.memo(MemoComp)

Refs:
-----
    * make possible to access DOM elements directly.
    * refs cann't be used in funcion components 
        1 create ref:(in constructor)
        ------------
            this.inputRef = React.createRef()
        2, Attach the ref in dom element:
        ---------------------------------
            <input type='text' ref={this.inputRef} />
        3, 

    Input.js: (normal method)
    ---------
        import React, { Component } from 'react'

        class Input extends Component {
                constructor(props) {
                super(props)
                
                this.inputRef = React.createRef()
            }

            focusInput(){
                this.inputRef.current.focus()
            }
            
        render() {
            return (
            <div>
                <input type='text' ref={this.inputRef} />
            </div>
            )
        }
        }

        export default Input

    RefsDemo.js:
    ------------
        import React, { Component } from 'react'

        class RefsDemo extends Component {
            constructor(props) {
                super(props)

                // method-1
                this.inputRef = React.createRef()

                // method-2 (callbackRef)
                this.callBackRef = null 
                this.setCallBackRef = ( element ) =>{
                    this.callBackRef = element
                }
            }
            componentDidMount(){
                // method-1
                // this.inputRef.current.focus()
                // console.log(this.inputRef);

                // method-2
                if(this.callBackRef){
                    this.callBackRef.focus()
                }
            }
            clickHandler = () => {
                alert(this.inputRef.current.value)
            }
        render() {
            return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <input type='text' ref={this.setCallBackRef}/>
                <button onClick={this.clickHandler}>Sumit</button>
            </div>
            )
        }
        }

        export default RefsDemo

Ref-forward:
------------
    * passing 'Ref' through child components.
    
    FRParentInput.js :
    -----------------
        import React, { Component } from 'react'
        import FRInput from './FRInput'

        class FRParentInput extends Component {
            constructor(props) {
            super(props)
            
            this.inputRef = React.createRef()
            }
            clickHandler = () => {
                this.inputRef.current.focus()
            }
            render() {
                return (
                <div>
                    <FRInput ref={this.inputRef}/>
                    <button onClick={this.clickHandler}>FR-Focus-Input</button>
                </div>
                )
            }
        }

        export default FRParentInput    

    FRInput.js:
    ----------
        import React from 'react'

        // function FRInput() {
        //   return (
        //     <div>
        //         <input type='text' />
        //     </div>
        //   )
        // }

        const FRInput = React.forwardRef((props, ref) => {
                return(
                    <div>
                        <input type='text' ref={ref} />
                    </div>
                )
            }
        ) 

        export default FRInput

    
Portals:
--------
    * render childern in to  DOM node that exists outside of hirerchey of parent node. 

    * Create a new DOM element in index.html(public folder)
        Default:
        --------
            <div id="root"></div>
        using Portal:
        -------------
            <div id="portal-Dom"></div>

    PortalDemo.js:
    --------------
        
        import React from 'react'
        import ReactDOM  from 'react-dom'

        function PortalDemo() {
            return ReactDOM.createPortal(
                <h1>Portal Demo</h1>,
                document.getElementById('portal-root')
            )
        }

        export default PortalDemo

    index.html:
    -----------
        <!-- PortalDemo.js  -->
        <div id="portal-root"></div>

Error boundary:
---------------
    * used to catch error
    * Class component that implements either one or both of the lifecycle method.
        * getDerivedStateFromError
        * ComponentDidCatch
    * palcement of errorBoundary is important.

    App.js:
    -------
        <HeroErrorBoundary>
            <Hero heroName='BatMan' />
        </HeroErrorBoundary>
        
        <HeroErrorBoundary>
            <Hero heroName='SuperMan' />
        </HeroErrorBoundary>

        <HeroErrorBoundary>
            <Hero heroName='Joker' />
        </HeroErrorBoundary>
    
    Hero.js:
    --------
        import React from 'react'

        function Hero({heroName}) {
            if(heroName === 'Joker'){
                throw new Error('Not Hero')
            }
            return (
                <div>
                    {heroName}
                </div>
            )
        }

        export default Hero
    
    HeroErrorBoundary.js:
    ---------------------
        import React, { Component } from 'react'

        class HeroErrorBoundary extends Component {
            constructor(props) {
            super(props)
            
            this.state = {
                hasError:false
            }
            }
            
            static getDerivedStateFromError(error){
                return {
                    hasError:true
                }
            }

            componentDidCatch(error, info){
                console.log(error);
                console.log('info-',info);
            }

            render() {
                if(this.state.hasError){
                    return <h1>Smonething went wrong</h1>
                }
                return this.props.children
            }
        }

        export default HeroErrorBoundary

Higher-Ordered component (HOC):
--------------------------
    * share a common functionality between componets.
    * takes function as argument and return new component.
        Eg: const newComponent = higherOrderComponent(originalComponent)

    Simple example:
    ---------------
        * Both of the below componet use same constructor & incrementCount function;
        * here the reusability of the code is not staisfied.
        * using Higher-Ordered component we can solve this problem

        clickCounter.js:
        ----------------
            import React, { Component } from 'react'

            class ClickCounter extends Component {
                constructor(props) {
                super(props)
                
                this.state = {
                    count : 0
                }
                }
                incrementCount = () => {
                    this.setState(
                        (prevState) => {
                            return {count: prevState.count+1}
                        }
                    )
                }
                render() {
                    const {count} = this.state
                    return (
                    <div>
                        <button onClick={this.incrementCount}>Clicker-{count}-times</button>
                    </div>
                    )
                }
            }

            export default ClickCounter

        HoverCounter.js:
        ----------------
            import React, { Component } from 'react'

            class HoverCounter extends Component {
                constructor(props) {
                    super(props)
                
                    this.state = {
                    count : 0
                    }
                }
                incrementCount = () => {
                    this.setState(
                        (prevState) => {
                            return {count: prevState.count+1}
                        }
                    )
                }
                render() {
                    const {count} = this.state
                    return (
                    <div>
                        <h1 onMouseOver={this.incrementCount}>Hover-{count}-Times</h1>
                    </div>
                    )
                }
            }

            export default HoverCounter

    Using HOC method:
    -----------------
        * reusability of component or code is achieved.

        WithCounterHOC.js:
        ------------------
            import React from 'react'

            const UpdateComponent = (OriginalComponent) => {
                
                class NewComponent extends React.Component{
                    constructor(props) {
                        super(props)
                    
                        this.state = {
                        count : 0
                        }
                    }
                    incrementCount = () => {
                        this.setState(
                            (prevState) => {
                                return {count: prevState.count+1}
                            }
                        )
                    }
                    render(){
                        return <OriginalComponent 
                                    count={this.state.count}
                                    incrementCount = {this.incrementCount}
                                />
                    }
                }
                return NewComponent
            }

            export default UpdateComponent
        
        ClickCounter.js:
        ----------------
            import React, { Component } from 'react'
            import UpdateComponent from './WithCounterHOC'

            class ClickCounter extends Component {
                render() {
                    const {count, incrementCount} = this.props
                    return (
                    <div>
                        <button onClick={incrementCount}>
                            Clicker-{count}-times
                        </button>
                    </div>
                    )
                }
            }

            export default UpdateComponent(ClickCounter)

        HoverCounter.js:
        ----------------
            import React, { Component } from 'react'
            import UpdateComponent from './WithCounterHOC'

            class HoverCounter extends Component {
                render() {
                    const {count, incrementCount} = this.props
                    return (
                    <div>
                        <h1 onMouseOver={incrementCount}>Hover-{count}-Times</h1>
                    </div>
                    )
                }
            }

            export default UpdateComponent(HoverCounter)


    Passing props in HOC from App.js:
    ---------------------------------
    * passing props through the componet in HOC doesn't get to the compnent directly, 
      but it is passed through the HOC function we used, so we need to pass the 
      {...this.props} to get all the props passed(through App.js) in the component to render 

        App.js:
        -------
            <ClickCounter name='surya'/>

        WithCounterHOC.js:
        ------------------
            render(){
            // console.log(this.props.name);
            return <OriginalComponent 
                        count={this.state.count}
                        incrementCount = {this.incrementCount}
    ------->            {...this.props}
                    />
            }

        ClickCounter.js:
        ----------------
            <button onClick={incrementCount}>
                {this.props.name} Clicker-{count}-times
            </button>
    

    passing parameters in HOC:
    --------------------------
        WithCounterHOC.js:
        ------------------
    ------> const UpdateComponent = (OriginalComponent, incNum) => {
    
            class NewComponent extends React.Component{
                constructor(props) {
                    super(props)
                
                    this.state = {
                    count : 0
                    }
                }
                incrementCount = () => {
                    this.setState(
                        (prevState) => {
                            return {count: prevState.count+incNum}
                        }
                    )
                }
                render(){
                    // console.log(this.props.name);
                    return <OriginalComponent 
                                count={this.state.count}
                                incrementCount = {this.incrementCount}
                                {...this.props}
                            />
                }
            }
            return NewComponent
        }

    ClickCounter.js:
    ----------------
        export default UpdateComponent(ClickCounter,5)
    
    HoverCounter.js:
    ----------------
        export default UpdateComponent(HoverCounter,10)

Render Props:
-------------
    * Similar to HOC, used to share common functionality b/w components.
    * render prop - refers to a techniue for sharing code b/w React component using 
      a prop whose value is a function.

    simple ex:
    ----------
        PRUserProps.js:
        ---------------
            import React, { Component } from 'react'

            class PRUserProps extends Component {
                render() {
                    return (
                    <div>
                        {this.props.render(true)}
                    </div>
                    )
                }
            }

            export default PRUserProps  

        App.js:
        -------
            <PRUserProps 
                render={ (isLoggedIn) => isLoggedIn ? 'Surya' : 'Guest' }
            />

    example:
    --------
        Create a common functionality:
        ------------------------------
            * the render() method doesn't return anything on it's own.
            * it just pass the values in the render method(state & incrementCount)
            * In App.js pass the values as props in the child component.
            * Invoke the values as props in child component and render the jsx.

            App.js:
                --------
                    {/* Simple props:  */}
                    {/* <RenderPropsCounter name='Surya'/> */}

                    {/* Props as function: */}
                    {/* <RenderPropsCounter name={ () => 'Steve' } /> */}

                    {/* Conditional props: */}
                    <RenderPropsCounter name={ isLoggedIn => isLoggedIn ? 'Joe' : 'Roger' }/>

            RenderPropsCounter.js:
            ----------------------
                <h2>{this.props.name}</h2>

                <h2>{this.props.name()}</h2>

                <h2>{this.props.name(false)}</h2>


            PRCounter.js:
            -------------
            import React, { Component } from 'react'

            class PRCounter extends Component {
                constructor(props) {
                    super(props)
                
                    this.state = {
                    count : 0
                    }
                }
                incrementCount = () => {
                    this.setState(prevState => {
                        return {count : prevState.count + 1}
                    })
                }
            render() {
                return (
                    <div>
                        {this.props.render(this.state.count, this.incrementCount)}
                    </div>
                )
            }
            }

            export default PRCounter

            App.js:
            -------
                * the name render in App.js can be changed as we want.
                
                <PRCounter render={
                    (count, incrementCount) => 
                    <PRClickCounter  count={count} incrementCount={incrementCount} />
                } />
                
                <PRCounter render={
                    (count, incrementCount) => 
                    <PRHoverCounter  count={count} incrementCount={incrementCount} />
                } />


            PRClickCounter.js:
            ------------------
                import React, { Component } from 'react'

                class PRClickCounter extends Component {
                    
                    render() {
                        const {count, incrementCount} = this.props
                        return (
                        <div>
                            <button onClick={incrementCount}>Clicked {count} times</button>
                        </div>
                        )
                    }
                }

                export default PRClickCounter

            PRHoverCounter.js:
            ------------------
                import React, { Component } from 'react'

                class PRHoverCounter extends Component {
                    
                    render() {
                        const {count,incrementCount} = this.props
                        return (
                        <div>
                            <h2 onMouseOver={incrementCount}>Hover {count} times</h2>
                        </div>
                        )
                    }
                }

                export default PRHoverCounter

        Pass the props as childern:
        ---------------------------
            PRCounter.js:
            -------------
                import React, { Component } from 'react'

                class PRCounter extends Component {
                    constructor(props) {
                        super(props)
                    
                        this.state = {
                        count : 0
                        }
                    }
                    incrementCount = () => {
                        this.setState(prevState => {
                            return {count : prevState.count + 1}
                        })
                    }
                    render() {
                        return (
                        <div>
        ----------->      {this.props.children(this.state.count, this.incrementCount)}
                        </div>
                        )
                    }
                }

                export default PRCounter

            App.js:
            -------
                {/*pass props as children */}
                <PRCounter> 
                    {
                        (count, incrementCount) => (
                            <PRClickCounter count={count} incrementCount={incrementCount} />
                        )
                    }
                </PRCounter>

                <PRCounter> 
                    {(count, incrementCount) => (
                        <PRHoverCounter count={count} incrementCount={incrementCount} />
                    )}
                </PRCounter>

Context:
--------
    * context provides a way to pass data through the component tree 
      w/o having to pass props down manually at every level.  
    * steps:
        1, Create the context 
        2, Provide a context value
        3, Consume the context value

    
    1,Createing the context:
    ------------------------
        ContextUser.js:
        ---------------
            import React from 'react'

            const UserContext = React.createContext()

            const UserProvider = UserContext.Provider
            const UserConsumer = UserContext.Consumer

            export {UserProvider, UserConsumer}


    2,Provide the context value in App.js using the UserProvider we created in our context:
    --------------------------------------
        App.js:
        -------
            import ComponentC from './components/ComponentC'
            import { UserProvider } from './components/ContextUser'

            <UserProvider value='surya'>
                <ComponentC />
            </UserProvider>

    3, Consume the context value in Component:
    ------------------------------------------
        * pass the JSX within a function,with argument in UserComsumer tag,
          that we created in ContextUser.js 
        * the userName in the function is to represnt the value attribute in App.js.
        ComponentC.js:
        --------------
            import React, { Component } from 'react'
            import { UserConsumer } from './ContextUser'

            class ComponentC extends Component {
            render() {
                return (
                <UserConsumer>
                    {
                        userName => {
                            return (
                                <div>
                                    Hello {userName}
                                </div>
                            )
                        }
                    }
                </UserConsumer>
                )
            }
            }

            export default ComponentC

    method-2:
    ---------
    Passing Default Argument:
    -------------------------
        App.js:
        -------
            {/* <UserProvider value='surya'> */}
                <ComponentC />
            {/* </UserProvider> */}

        ContextUser.js:
        ---------------
            const UserContext = React.createContext('defaultArgument')

        output:
        ------- 
            Hello defaultArgument

    Method-3:
    ---------
    Using ContextType:
    ------------------
        ContextUser.js:
        ---------------
            export default ContextUser

        ComponentB.js:
        --------------- 
            import React, { Component } from 'react'
            import ComponentC from './ComponentC'
            import UserContext from './UserContext'

            class ComponentB extends Component {

                // type-2:
                static contextType = UserContext

                render() {
                    return (
                    <div>
                        Component-B context {this.context}
                        <ComponentC />
                    </div>
                    )
                }
            }
            
            // type-1:
            ComponentB.contextType = UserContext

            export default ComponentB


    Limitation of method-2 & method-3 :
    -----------
    1, Only works with class component.
    2, Only one context is rendered per context.

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
