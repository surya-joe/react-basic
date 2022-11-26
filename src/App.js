import './App.css';

// // Default export method:
// import Greet from './components/01FunctionalComponents/Greet';

// component name export method:
// import { Greet } from './components/01FunctionalComponents/Greet';

// import GreetClass from './components/02ClassComponents/GreetClass';

// import { GreetJsx } from './components/03Jsx/GreetJsx';
// import { GreetReactCreateElement } from './components/03Jsx/GreetReactCreateElement';

// import GreetClassProps from './components/04Props/GreetClassProps';
// import { GreetProps } from './components/04Props/GreetProps';

// import MessageClass from './components/05State/MessageClass';
// import CounterClass from './components/05State/SetState/CounterClass';

// import { GreetDestructureProps } from './components/06DestructuringProps&State/GreetDestructureProps';
// import GreetDestructurePropsClass from './components/06DestructuringProps&State/GreetDestructurePropsClass';

// import { FunctionClick } from './components/07EventHandling/FunctionClick';
// import ClassClick from './components/07EventHandling/ClassClick';

// import ClickEventBind from './components/07EventHandling/BindEventHandler/ClickEventBind';

// import ParentComp from './components/08Method-as-Props/ParentComp';

// import UserGreeting from './components/09ConditionalRendering/01if-else/UserGreeting';
// import UserGreeting from './components/09ConditionalRendering/02Element Variable/UserGreeting';
// import UserGreeting from './components/09ConditionalRendering/03Ternary-conditional-operator/UserGreeting';
// import UserGreeting from './components/09ConditionalRendering/04Short-circuit-operator/UserGreeting';

// import { NameList } from './components/10ListRendering/NameList';
// import { IndexAsKey } from './components/10ListRendering/IndexAsKey';

// import { StyleSheet } from './components/11StyleSheet/StyleSheet';
// import { ConditionalStyle } from './components/11StyleSheet/ConditionalStyle';
// import { MultipleClass } from './components/11StyleSheet/MultipleClass';
// import { InlineStyle } from './components/11StyleSheet/InlineStyle';
// import './components/11StyleSheet/CssModule/appRegularStyle.css'
// import styles from './components/11StyleSheet/CssModule/appStyle.module.css'

// import Form from './components/12FormHandling/Form';
// import { Table } from './components/14Fragments/Table';

// import LifeCycleA from './components/13LifeCycle/LifeCycleA';
// import UpdatingLifeCycleMethod from './components/13LifeCycle/UpdatingLifeCycleMethod';

// import FragmentDemo from './components/14Fragments/FragmentDemo';

// import ParentCompo from './components/15PureComponents/ParentCompo';

// import { MemoCompo } from './components/16Memo/MemoCompo';
// import ParentMemo from './components/16Memo/ParentMemo';

// import CallBackRef from './components/17Refs/CallBackRef';
// import FRParentInput from './components/17Refs/Ref-Forwarding/FRParentInput';
// import FocusInputClass from './components/17Refs/Refs-in-Class/FocusInputClass';

// import { PortalDom } from './components/18Portals/PortalDom';

// import { Hero } from './components/19ErrorHandling/Hero';
// import HeroErrorBoundary from './components/19ErrorHandling/HeroErrorBoundary';

// import ClickCounter from './components/20HigherOrderComponent/ClickCounter';
// import HoverCounter from './components/20HigherOrderComponent/HoverCounter';

// import RenderPropsCounter from './components/21RenderProps/RenderPropsCounter';
// import ClickCounterRP from './components/21RenderProps/ClickCounterRP';
// import HoverCounterRP from './components/21RenderProps/HoverCounterRP';
// import RenderProps from './components/21RenderProps/RenderProps';

import ComponentA from './components/22Context/ComponentA'
import ComponentB from './components/22Context/ComponentB';
import ComponentC from './components/22Context/ComponentC'
import { UserProvider } from './components/22Context/UserContext'

// import PostList from './components/23Http/Get-Request/PostList';
// import InputForm from './components/23Http/POSTData/InputForm';




function App() {
  return (
    <div className="App">
        {/* <Greet /> */}
        {/* <GreetClass /> */}

        {/* <GreetJsx />
        <GreetReactCreateElement /> */}

        {/* <GreetProps name='BatMan' identity='Bruce'/>
        <GreetProps name='SuperMan' identity='Clark'>
          <button>Save People</button>
        </GreetProps>
        <GreetProps name='WonderWomen' identity='Diana'>
          <p>This is a children</p>
        </GreetProps> */}

        {/* <GreetClassProps name='IronMan' identity='Tony' />
        <GreetClassProps name='Captain America' identity='Steve' />
        <GreetClassProps name='Hulk' identity='Bruce'>
          <p> This is class children </p>
        </GreetClassProps> */}
        
        {/* <MessageClass name='Surya'/> */}
        {/* <CounterClass /> */}

        {/* <GreetDestructureProps name='BraveStone' identity='Surya' />
        <GreetDestructurePropsClass name='SpiderMan' identity='Peter Parker'/> */}

        {/* <FunctionClick />
        <ClassClick /> */}

        {/* <ClickEventBind /> */}

        {/* <ParentComp /> */}

        {/* <UserGreeting /> */}
        {/* <UserGreeting /> */}
        {/* <UserGreeting /> */}
        {/* <UserGreeting /> */}

        {/* <NameList /> */}
        {/* <IndexAsKey /> */}

        {/* <StyleSheet />
        <ConditionalStyle primary={true} />
        <MultipleClass secondary={true} />
        <InlineStyle />
        <h1 className='error'>Error Module syles</h1>
        <h1 className={styles.success}>Success Module syles</h1> */}

        {/* <Form /> */}

        {/* <LifeCycleA /> */}
        {/* <UpdatingLifeCycleMethod /> */}

        {/* <FragmentDemo /> */}
        {/* <Table /> */}

        {/* <ParentCompo /> */}

        {/* <MemoCompo name='Surya' /> */}
        {/* <ParentMemo /> */}

        {/* <FocusInput /> */}
        {/* <CallBackRef /> */}
        {/* <FocusInputClass /> */}
        {/* <FRParentInput /> */}

        {/* <PortalDom /> */}

        

        {/* <HeroErrorBoundary>
          <Hero heroName='SpiderMan' />
        </HeroErrorBoundary>
        <HeroErrorBoundary>
          <Hero heroName='AntMan' />
        </HeroErrorBoundary>
        <HeroErrorBoundary>
          <Hero heroName='Joker' /> 
        </HeroErrorBoundary> */}

        {/* <ClickCounter />
        <HoverCounter name='Steve' /> */}

        {/* <ClickCounterRP /> */}
        {/* <HoverCounterRP /> */}

        {/* Simple props:  */}
        {/* <RenderProps name='Surya'/> */}
        {/* Props as function: */}
        {/* <RenderProps name={ () => 'Steve' } /> */}
        {/* Conditional props: */}
        {/* <RenderProps name={ isLoggedIn => isLoggedIn ? 'Joe' : 'Roger' }/> */}

        {/* <RenderPropsCounter
          render = {
            (count, incrementCount) => (
              <ClickCounterRP 
                count={count}
                incrementCount={incrementCount}
              />
            )
            
          }
        /> */}

        {/* <RenderPropsCounter
          render = {
            (count, incrementCount) => (
              <HoverCounterRP 
                count={count}
                incrementCount={incrementCount}
              />
            )
            
          }
        /> */}

        {/* Normal method hierarchy: */}
        {/* <ComponentA /> */}
        <UserProvider >
          <ComponentB />
        </UserProvider>

        {/* <PostList /> */}
        {/* <InputForm /> */}

    </div>
  );
}

export default App;
